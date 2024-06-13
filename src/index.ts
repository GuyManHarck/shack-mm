import {Client} from "discord.js";
import tokens from './config/tokens';
import {IntentOptions, PartialsOptions} from './config/IntentOptions';
import {onInteraction} from "./events/onInteraction";
import {onReady} from "./events/onReady";
import {Data} from "./data";
import {onJoin} from "./events/onJoin";
import {onMessage} from "./events/onMessage";

const main = async () => {
    const BOT = new Client({
        intents: IntentOptions,
        partials: PartialsOptions,
    });

    const data = new Data(BOT);

    BOT.once("ready", async () => await onReady(BOT, data));
    BOT.on(
        "interactionCreate",
        async (interaction) => await onInteraction(interaction, data)
    );
    BOT.on(
        "guildMemberAdd",
        async (member) => await onJoin(member, data)
    );
    BOT.on(
        "messageCreate",
        async (message) => await onMessage(message)
    )

    await BOT.login(tokens.BotToken);
}

try {
    main().then(async () => {console.log("Started")})
} catch (error) {
    console.error(error);
}
