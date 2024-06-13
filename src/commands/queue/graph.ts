import {Command} from "../../interfaces/Command";
import {SlashCommandBuilder} from "@discordjs/builders";
import {games, userOptional} from "../../utility/options";
import {logError} from "../../loggers";
import {getUserByUser} from "../../modules/getters/getUser";
import {getStats} from "../../modules/getters/getStats";
import {getMMRGraph} from "../../utility/graph";
import discordTokens from "../../config/discordTokens";

export const graph: Command = {
    data: new SlashCommandBuilder()
        .setName('graph')
        .setDescription("Get rank graph")
        .addIntegerOption(games)
        .addUserOption(userOptional("User to get graph of")),
    run: async (interaction, data) => {
        try {
            let gameNumber = interaction.options.getInteger('games');
            if (!gameNumber) {
                gameNumber = 10;
            }
            let user = interaction.options.getUser('user');
            if (!user) {
                user = interaction.user;
            }
            const dbUser = await getUserByUser(user, data);
            const stats = await getStats(dbUser._id, "SND");
            const start = stats.gamesPlayed - gameNumber + 1;
            if (stats.gamesPlayed < 20) {
                await interaction.reply({
                    ephemeral: true,
                    content: "A user must play 20 games before they can be graphed"
                })
            } else if (start < 10) {
                await interaction.reply({
                    ephemeral: true,
                    content: `You are trying to graph more games than the user has played the largest number you can enter is ${stats.gamesPlayed - 10}`
                });
            } else {
                await interaction.reply({
                    content: "Displaying Graph",
                    files: [await getMMRGraph(stats.mmrHistory, start, stats.gamesPlayed, user.username)]
                });
            }
        } catch (e) {
            await logError(e, interaction);
        }
    },
    name: 'graph',
    allowedRoles: [discordTokens.PlayerRole],
    allowedChannels: [discordTokens.QueueChannel]
}