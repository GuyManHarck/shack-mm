import {SubCommand} from "../../interfaces/Command";
import {SlashCommandStringOption, SlashCommandSubcommandBuilder} from "discord.js";
import {userOption} from "../../utility/options";
import {logError} from "../../loggers";
import {getUserByUser} from "../../modules/getters/getUser";
import warnModel from "../../database/models/WarnModel";
import moment from "moment";
import tokens from "../../config/tokens";
import discordTokens from "../../config/discordTokens";

export const warn: SubCommand = {
    data: new SlashCommandSubcommandBuilder()
        .setName("warn")
        .setDescription("Warns a player")
        .addUserOption(userOption("User to warn"))
        .addStringOption(new SlashCommandStringOption()
            .setName("reason")
            .setDescription("Reason for the warning")
            .setRequired(true)),
    run: async (interaction, data) => {
        try {
            const dbUser = await getUserByUser(interaction.options.getUser('user', true), data);
            await warnModel.create({
                userId: dbUser._id,
                reason: interaction.options.getString('reason', true),
                timeStamp: moment().unix(),
                modId: interaction.user.id,
                removed: false,
            });
            await interaction.reply({content: `<@${interaction.options.getUser('user', true).id}> has been warned:\n\`\`\`${interaction.options.getString('reason', true)}\`\`\``});
        } catch (e) {
            await logError(e, interaction);
        }
    },
    name: 'warn',
    allowedRoles: discordTokens.Moderators
}