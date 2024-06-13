import * as process from "process";
import {DiscordTokensInt} from "../interfaces/config";


const isProd = process.env.PROD == "1";

const dev: DiscordTokensInt = {
    ActiveGamesChannel: "1250570751694606398",
    Admins: ["1207438740264583226", "1207438740264583224"],
    BotOwner: "484100069688344606",
    DoNotPingRole: "1207438740226703448",
    Emoji: {
        Win: "<:win:1236336021659193405>",
        Loss: "<:loss:1236336020572864533>",
        Draw: "<:draw:1236336019595596008>",
    },
    GameLogChannel: "1207438742399361132",
    GeneralChannel: "",
    GuildId: "1207438740226703440",
    LeaderboardChannel: "1207438741254443063",
    LeaderboardMessage: "1207456079366197249",
    LogChannel: "1207439265345044550",
    MasterGuild: "1058879957461381251",
    MatchCategory: "1207438740943802447",
    Moderators: ["1207438740264583226", "1207438740264583224", "1207438740264583223"],
    ModeratorLogChannel: "1250605579630674045",
    ModRole: "1207438740264583223",
    MutedRole: "1207438740247814174",
    PingToPlayRole: "1207438740226703446",
    PlayerRole: "1207438740226703447",
    QueueChannel: "1207438741254443061",
    QueueLogChannel: "1207438742877507626",
    RegionRoles: {
        NAE: "1207438740226703445",
        NAW: "1207438740226703444",
        EUE: "1207438740226703443",
        EUW: "1207438740226703442",
        APAC: "1207438740226703441",
    },
    RegionSelectChannel: "1207438740943802444",
    ScoreboardChannel: "1207438741254443065",
    ScoreChannel: "1207438741254443064",
};

const prod: DiscordTokensInt = {
    ActiveGamesChannel: "1183155071433850960",
    Admins: ["1152652534763241542", "1204928541045825636"], // Admin, Owner
    BotOwner: "484100069688344606",
    DoNotPingRole: "1186750217962401844",
    Emoji: {
        Win: "<:Win:1174459375943946261>",
        Loss: "<:Loss:1174459377709764800>",
        Draw: "<:Draw:1174459379114848336>",
    },
    GameLogChannel: "1185432060173746236",
    GeneralChannel: "1152652410184024247",
    GuildId: "1152652407856189560",
    LeaderboardChannel: "1171851273499312159",
    LeaderboardMessage: "1183920824164569130",
    LogChannel: "1250198758625382420",
    MasterGuild: "1204816540231401472",
    MatchCategory: "1171850272465764402",
    Moderators: ['1152657002212884550', '1152652534763241542', '1204928541045825636'], // Moderator, Admin, Owner
    ModeratorLogChannel: "1249964183588438158",
    ModRole: "1152657002212884550",
    MutedRole: "1186750217962401844",
    PingToPlayRole: "1171851420639703150",
    PlayerRole: "1171954619585404938",
    QueueChannel: "1171851238594318387",
    QueueLogChannel: "1191799332924559360",
    RegionRoles: {
        NAE: "1186176045829849089",
        NAW: "1186176099969925160",
        EUE: "1186176160674099281",
        EUW: "1186176183470149762",
        APAC: "1186176140394643456",
    },
    RegionSelectChannel: "1186501237517070367",
    ScoreboardChannel: "1182844040937484339",
    ScoreChannel: "1171851522469023836",
};

export default isProd ? prod : dev;
