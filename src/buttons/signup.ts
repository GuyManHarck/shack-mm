import {Button} from "../interfaces/Button";
import {ButtonBuilder} from "@discordjs/builders";
import {ButtonStyle} from "discord.js";
import {logError} from "../loggers";
import discordTokens from "../config/discordTokens";

export const signup: Button = {
    data: new ButtonBuilder()
        .setLabel('Sign Up')
        .setCustomId('sign-up')
        .setStyle(ButtonStyle.Success),
    run: async (interaction) => {
        try {
            const member = await interaction.guild!.members.fetch(interaction.user.id);
            await member.roles.add(discordTokens.PlayerRole)
            await interaction.reply({ephemeral: true,
                content: `You have signed up please use \`/register\` to add your oculus name\nGo to <#${discordTokens.RegionSelectChannel}> to select a region\nGo to <#${discordTokens.QueueChannel}> to ready up or use \`/ready 5v5\``});
        } catch (e) {
            await logError(e, interaction);
        }
    },
    id: 'sign-up',
}