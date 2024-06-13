import {GuildMember, PartialGuildMember} from "discord.js";
import moment from "moment";
import {getUserByUser} from "../modules/getters/getUser";
import {Data} from "../data";
import discordTokens from "../config/discordTokens";

export const onJoin = async (member: GuildMember | PartialGuildMember, data: Data) => {
    const dbUser = await getUserByUser(member, data);
    if (dbUser.muteUntil > moment().unix() || dbUser.muteUntil < 0) {
        await member.roles.add(discordTokens.MutedRole);
    }
}