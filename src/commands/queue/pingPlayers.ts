import {Command} from "../../interfaces/Command";
import {SlashCommandBuilder} from "@discordjs/builders";
import {logError} from "../../loggers";
import moment from "moment";
import tokens from "../../config/tokens";
import {grammaticalTime} from "../../utility/grammatical";
import discordTokens from "../../config/discordTokens";

export const pingPlayers: Command = {
    data: new SlashCommandBuilder()
        .setName('ping_players')
        .setDescription('Pings players who have opted in'),
    run: async (interaction, data) => {
        try {
            if (moment().unix() >= data.nextPing) {
                await interaction.reply({ephemeral: false, content: `<@&${discordTokens.PingToPlayRole}> players are looking for a match`, allowedMentions: {roles: [discordTokens.PingToPlayRole]}});
                data.nextPing = moment().unix() + tokens.PingTime;
            } else {
                await interaction.reply({ephemeral: true, content: `You cannot ping players for another ${grammaticalTime(data.nextPing - moment().unix())}`})
            }
        } catch (e) {
            await logError(e, interaction);
        }
    },
    name: 'ping_players',
    allowedChannels: [discordTokens.QueueChannel],
}