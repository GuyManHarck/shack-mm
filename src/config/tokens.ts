import * as process from "process";
import {TokensInt} from "../interfaces/config";
import {Regions} from "../database/models/UserModel";
import messages from "../messages.json";

const isProd = process.env.PROD == "1";

const images = {
    Dust2: "https://shackmm.com/static/images/dust2.png",
        Oilrig: "https://shackmm.com/static/images/oilrig.png",
        Mirage: "https://shackmm.com/static/images/mirage.png",
        Vertigo: "https://shackmm.com/static/images/vertigo.png",
        Inferno: "https://shackmm.com/static/images/inferno.png",
        Overpass: "https://shackmm.com/static/images/overpass.png",
        Cache: "https://shackmm.com/static/images/cache.png",
        Harbor: "https://shackmm.com/static/images/harbor.png",
        Industry: "https://shackmm.com/static/images/industry.png",
        Lumber: "https://shackmm.com/static/images/lumber.png",
        Reachsky: "https://shackmm.com/static/images/reachsky.png",
        Manor: "https://shackmm.com/static/images/manor.png",
        Autumn: "https://shackmm.com/static/images/manor.png",
}

const mapIds = {
    Oilrig: "UGC3266780",
    Mirage: "UGC3278975",
    Dust2: "UGC3283822",
    Cache: "UGC3275597",
    Overpass: "UGC3283728",
    Inferno: "UGC3430252",
    Harbor: "harbor",
    Industry: "industry",
    Lumber: "UGC3505396",
    Reachsky: "UGC3748612",
    Manor: "UGC3765846",
    Vertigo: "UGC3309849",
    Autumn: "autumn",
};

const mapPool = ["Dust 2", "Cache", "Overpass", "Harbor", "Oilrig", "Autumn", "Vertigo", "Mirage", "Reachsky"];

const dev: TokensInt = {
    AbandonTime: 30,
    AcceptTime: 5 * 60,
    ApplyLates: true,
    BotKey: process.env.BOT_KEY ?? 'no bot key',
    BotToken: process.env.BOT_TOKEN_TEST ?? "no token",
    DB_URI: process.env.DB_URI_TEST ?? "no db uri",
    ClientId: process.env.CLIENT_ID_TEST ?? "no client id",
    Ranks: [
        {name: 'Master', threshold: 1950, roleId: "1207438740264583218"},
        {name: 'Diamond', threshold: 1821, roleId: "1207438740247814183"},
        {name: 'Platinum', threshold: 1701, roleId: "1207438740247814182"},
        {name: 'Gold', threshold: 1611, roleId: "1207438740247814181"},
        {name: 'Silver', threshold: 1551, roleId: "1207438740247814180"},
        {name: 'Bronze', threshold: 1470, roleId: "1207438740247814179"},
        {name: 'Iron', threshold: 1375, roleId: "1207438740247814178"},
        {name: 'Copper', threshold: 1300, roleId: "1207438740247814177"},
        {name: 'Wood', threshold: -99999, roleId: "1207438740247814176"},
    ],
    ReductionGames: 10,
    ScoreLimit: 10,
    ServerKey: process.env.SERVER_KEY ?? 'no server key',
    Servers: [],
    StartingMMR: 1500,
    SubmitCooldown: 0,
    PingTime: 60,
    PlayerCount: 4,
    VoteTime: 25,
    VoteSize: 7,

    AcceptMessage: messages.acceptMessage,
    SignUpMessage: messages.signUp,
    InfoMessage: messages.info,
    RegionSelectMessage: messages.region,
    NoMessage: messages.no,

    MapIds: mapIds,
    Images: images,
    MapPool: mapPool,
};

const prod: TokensInt = {
    AbandonTime: 30,
    AcceptTime: 5 * 60,
    ApplyLates: true,
    BotKey: process.env.BOT_KEY ?? 'no bot key',
    BotToken: process.env.BOT_TOKEN ?? 'no bot token',
    ClientId: process.env.CLIENT_ID ?? "no client id",
    DB_URI: process.env.DB_URI ?? "no db uri",
    Ranks: [
        {name: 'Master', threshold: 1950, roleId: '1152692826669326398'},
        {name: 'Diamond', threshold: 1821, roleId: '1152692676035088464'},
        {name: 'Platinum', threshold: 1701, roleId: '1152692485332664411'},
        {name: 'Gold', threshold: 1611, roleId: '1152692439342141531'},
        {name: 'Silver', threshold: 1551, roleId: '1152692319749931050'},
        {name: 'Bronze', threshold: 1470, roleId: '1152692197439836331'},
        {name: 'Iron', threshold: 1375, roleId: '1152692103256744086'},
        {name: 'Copper', threshold: 1300, roleId: '1152659149017075894'},
        {name: 'Wood', threshold: -99999, roleId: '1152691861186682880'},
    ],
    ReductionGames: 10,
    ScoreLimit: 10,
    ServerKey: process.env.SERVER_KEY ?? 'no server key',
    Servers: [
        {
            ip: "15.204.218.198",
            port: 9100,
            password: process.env.RCON_PASS ?? "NO PASSWORD",
            name: "NAE-ONE shackmm.com",
            region: Regions.NAE,
        }, {
            ip: "15.204.218.215",
            port: 9100,
            password: process.env.RCON_PASS ?? "NO PASSWORD",
            name: "NAE-TWO shackmm.com",
            region: Regions.NAE,
        }
    ],
    StartingMMR: 1500,
    SubmitCooldown: 600,
    PingTime: 60,
    PlayerCount: 10,
    VoteTime: 35,
    VoteSize: 7,

    AcceptMessage: messages.acceptMessage,
    SignUpMessage: messages.signUp,
    InfoMessage: messages.info,
    RegionSelectMessage: messages.region,
    NoMessage: messages.no,

    MapIds: mapIds,
    Images: images,
    MapPool: mapPool,
};

export default isProd ? prod : dev;
