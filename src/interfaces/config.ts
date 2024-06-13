import {Regions} from "../database/models/UserModel";
import messages from "../messages.json";

export interface DiscordTokensInt {
    ActiveGamesChannel: string; // Channel that displays number of active games
    Admins: string[]; // Array of all RoleIds for admin roles, used for command permissions
    BotOwner: string; // UserId of the owner of the bot, is used for access to certain commands
    DoNotPingRole: string; // RoleId for the do not ping role
    Emoji: {
        Win: string,
        Loss: string,
        Draw: string,
    }
    GameLogChannel: string; // ChannelId of the channel to log game events in
    GeneralChannel: string, // ChannelId of general channel
    GuildId: string; // GuildId of the guild the bot will be used in
    LeaderboardChannel: string; // Leaderboard channel
    LeaderboardMessage: string; // Leaderboard message id
    LogChannel: string; // ChannelId in MasterGuild to log all events to
    MasterGuild: string; // GuildId to log all bot events to, can be same as guild bot is used in
    MatchCategory: string; // ChannelId of the category that matches occur in
    Moderators: string[]; // Array of all RoleIds for moderator roles, used for command permissions
    ModeratorLogChannel: string; // ChannelId of channel to log actions performed by mods to
    ModRole: string; // RoleId of the moderator role
    MutedRole: string; // RoleId of the muted role
    PingToPlayRole: string; // RoleId of the ping to play role
    PlayerRole: string; // RoleId of the player role
    QueueChannel: string; // ChannelId of the queue channel
    QueueLogChannel: string; // ChannelId of the queue logging channel
    RegionRoles: {
        NAE: string,
        NAW: string,
        EUE: string,
        EUW: string,
        APAC: string,
    }, // RoleIds for each region role
    RegionSelectChannel: string; // ChannelId of the region select channel
    ScoreboardChannel: string; // ChannelId of the scoreboard channel
    ScoreChannel: string; // ChannelId of the match results channel
}

export interface TokensInt {
    AbandonTime: number; // Time in seconds for delay before cleanup after an abandon
    AcceptTime: number; // Time in seconds for a user to accept the game
    ApplyLates: boolean; // Toggle whether lates should be applied
    BotKey: string; // Key for bot to post to the website
    BotToken: string; // Token provided by discord to allow bot to access the gateway
    ClientId: string; // Id of the bot/client
    DB_URI: string; // URI of the database to connect to
    Ranks: {
        name: string,
        threshold: number;
        roleId: string;
    }[]; // Ranks for the ranking system
    ReductionGames: number, // Number of games for a ban reduction to occur
    ScoreLimit: number, // Max number of rounds a team can win
    ServerKey: string; // Key to post to webserver for game actions
    Servers: {
        ip: string,
        port: number,
        password: string,
        name: string,
        region: Regions
    }[]; // Servers for games to be played on
    StartingMMR: number; // MMR players should start at
    SubmitCooldown: number; // Time in seconds before scores should be accepted
    PingTime: number; // Time in seconds to ping users before they are abandoned for failing to accept
    PlayerCount: number; // Number of players in a game
    VoteTime: number; // Time in seconds that are allocated per vote stage
    VoteSize: number; // Number of maps to put into first vote stage
    /*
     Adding these as temporary until new message system is ported allowing live changes
     */
    AcceptMessage: string;
    SignUpMessage: string;
    InfoMessage: string;
    RegionSelectMessage: string;
    NoMessage: string;
    /*
       Adding these until map manager system is ported over
     */
    MapIds: any;
    Images: any;
    MapPool: string[];
}