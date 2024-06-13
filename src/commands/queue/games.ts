import {Command} from "../../interfaces/Command";
import {SlashCommandBuilder} from "@discordjs/builders";
import {logError} from "../../loggers";
import {gameEmbed} from "../../embeds/matchEmbeds";
import discordTokens from "../../config/discordTokens";

export const games: Command = {
    data: new SlashCommandBuilder()
        .setName("games")
        .setDescription("Displays current games and everyone in them"),
    run: async (interaction, data) => {
        try {
            const games = data.getGames();
            const embeds = [];
            for (let game of games) {
                embeds.push(gameEmbed(game));
            }
            await interaction.reply({content: "Current Games:", embeds: embeds});
        } catch (e) {
            await logError(e, interaction);
        }
    },
    name: "games",
    allowedChannels: [discordTokens.QueueChannel]
}