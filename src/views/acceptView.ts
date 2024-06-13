import {ActionRowBuilder, MessageActionRowComponentBuilder} from "discord.js";
import {accept} from "../buttons/match/accept";
import {missing} from "../buttons/match/missing";

export const acceptView = () => {
    return new ActionRowBuilder<MessageActionRowComponentBuilder>()
        .addComponents(accept.data, missing.data).toJSON();
}