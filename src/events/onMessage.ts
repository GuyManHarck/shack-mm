import {Message} from "discord.js";
import {logWarn} from "../loggers";
import tokens from "../config/tokens";
import discordTokens from "../config/discordTokens";

export const onMessage = async (message: Message) => {
    try {
        if (message.channelId == discordTokens.ScoreboardChannel) {
            if (message.attachments.size < 1) {
                await message.delete();
            }
        }
        if (message.content == "!no") {
            const guild = await message.client.guilds.fetch(discordTokens.GuildId);
            const member = await guild.members.fetch(message.member!.id);
            for (let role of member.roles.cache.values()) {
                if (discordTokens.Moderators.includes(role.id)) {
                    await message.reply(tokens.NoMessage);
                    break;
                }
            }
        }
    } catch (e) {
        await logWarn("Message could not be processed", message.client);
    }
}