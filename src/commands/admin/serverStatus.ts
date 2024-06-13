import {Command} from "../../interfaces/Command";
import {SlashCommandBuilder} from "@discordjs/builders";
import {logError} from "../../loggers";
import tokens from "../../config/tokens";
import discordTokens from "../../config/discordTokens";

export const serverStatus: Command = {
    data: new SlashCommandBuilder()
        .setName("server_status")
        .setDescription("Displays the server status"),
    run: async (interaction, data) => {
        try {
            let status = "```";
            for (let server of data.getServers()) {
                status += `${server.name}: ${server.name}, ${server.isInUse()}\n`;
            }
            status += "```";
            await interaction.reply({ephemeral: true, content: status});
        } catch (e) {
            await logError(e, interaction);
        }
    },
    name: 'server_status',
    allowedUsers: [discordTokens.BotOwner],
    allowedRoles: discordTokens.Admins,
}