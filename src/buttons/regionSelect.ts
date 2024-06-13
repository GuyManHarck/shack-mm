import {Button} from "../interfaces/Button";
import {ButtonBuilder} from "@discordjs/builders";
import {ButtonStyle} from "discord.js";
import {logError} from "../loggers";
import {getUserByUser} from "../modules/getters/getUser";
import {Regions} from "../database/models/UserModel";
import {updateUser} from "../modules/updaters/updateUser";
import discordTokens from "../config/discordTokens";

const regionRoles = [discordTokens.RegionRoles.NAE, discordTokens.RegionRoles.NAW, discordTokens.RegionRoles.EUE, discordTokens.RegionRoles.EUW, discordTokens.RegionRoles.APAC]

export const NAE: Button = {
    data: new ButtonBuilder()
        .setStyle(ButtonStyle.Primary)
        .setLabel("NAE")
        .setCustomId("NAE"),
    run: async (interaction, data) => {
        try {
            const member = await interaction.guild!.members.fetch(interaction.user.id);
            let hasRole = false;
            for (let role of member.roles.cache.values()) {
                if (regionRoles.includes(role.id)) {
                    hasRole = true;
                    break;
                }
            }
            if (hasRole) {
                await interaction.reply({ephemeral: true, content: "You have already selected a role, please make a ticket to change it"});
            } else {
                await member.roles.add(discordTokens.RegionRoles.NAE);
                const dbUser = await getUserByUser(interaction.user, data);
                dbUser.region = Regions.NAE;
                await updateUser(dbUser, data);
                await interaction.reply({ephemeral: true, content: "Assigned NAE role, You are not able to change this please make a ticket to do so"});
            }
        } catch (e) {
            await logError(e, interaction);
        }
    },
    id: 'NAE'
}

export const NAW: Button = {
    data: new ButtonBuilder()
        .setStyle(ButtonStyle.Primary)
        .setLabel("NAW")
        .setCustomId("NAW"),
    run: async (interaction, data) => {
        try {
            const member = await interaction.guild!.members.fetch(interaction.user.id);
            let hasRole = false;
            for (let role of member.roles.cache.values()) {
                if (regionRoles.includes(role.id)) {
                    hasRole = true;
                    break;
                }
            }
            if (hasRole) {
                await interaction.reply({ephemeral: true, content: "You have already selected a role, please make a ticket to change it"});
            } else {
                await member.roles.add(discordTokens.RegionRoles.NAW);
                const dbUser = await getUserByUser(interaction.user, data);
                dbUser.region = Regions.NAW;
                await updateUser(dbUser, data);
                await interaction.reply({ephemeral: true, content: "Assigned NAW role, You are not able to change this please make a ticket to do so"});
            }
        } catch (e) {
            await logError(e, interaction);
        }
    },
    id: 'NAW'
}

export const EUE: Button = {
    data: new ButtonBuilder()
        .setStyle(ButtonStyle.Primary)
        .setLabel("EUE")
        .setCustomId("EUE"),
    run: async (interaction, data) => {
        try {
            const member = await interaction.guild!.members.fetch(interaction.user.id);
            let hasRole = false;
            for (let role of member.roles.cache.values()) {
                if (regionRoles.includes(role.id)) {
                    hasRole = true;
                    break;
                }
            }
            if (hasRole) {
                await interaction.reply({ephemeral: true, content: "You have already selected a role, please make a ticket to change it"});
            } else {
                await member.roles.add(discordTokens.RegionRoles.EUE);
                const dbUser = await getUserByUser(interaction.user, data);
                dbUser.region = Regions.EUE;
                await updateUser(dbUser, data);
                await interaction.reply({ephemeral: true, content: "Assigned EUE role, You are not able to change this please make a ticket to do so"});
            }
        } catch (e) {
            await logError(e, interaction);
        }
    },
    id: 'EUE'
}

export const EUW: Button = {
    data: new ButtonBuilder()
        .setStyle(ButtonStyle.Primary)
        .setLabel("EUW")
        .setCustomId("EUW"),
    run: async (interaction, data) => {
        try {
            const member = await interaction.guild!.members.fetch(interaction.user.id);
            let hasRole = false;
            for (let role of member.roles.cache.values()) {
                if (regionRoles.includes(role.id)) {
                    hasRole = true;
                    break;
                }
            }
            if (hasRole) {
                await interaction.reply({ephemeral: true, content: "You have already selected a role, please make a ticket to change it"});
            } else {
                await member.roles.add(discordTokens.RegionRoles.EUW);
                const dbUser = await getUserByUser(interaction.user, data);
                dbUser.region = Regions.EUW;
                await updateUser(dbUser, data);
                await interaction.reply({ephemeral: true, content: "Assigned EUW role, You are not able to change this please make a ticket to do so"})
            }
        } catch (e) {
            await logError(e, interaction);
        }
    },
    id: 'EUW'
}

export const APAC: Button = {
    data: new ButtonBuilder()
        .setStyle(ButtonStyle.Primary)
        .setLabel("APAC")
        .setCustomId("APAC"),
    run: async (interaction, data) => {
        try {
            const member = await interaction.guild!.members.fetch(interaction.user.id);
            let hasRole = false;
            for (let role of member.roles.cache.values()) {
                if (regionRoles.includes(role.id)) {
                    hasRole = true;
                    break;
                }
            }
            if (hasRole) {
                await interaction.reply({ephemeral: true, content: "You have already selected a role, please make a ticket to change it"});
            } else {
                await member.roles.add(discordTokens.RegionRoles.APAC);
                const dbUser = await getUserByUser(interaction.user, data);
                dbUser.region = Regions.APAC;
                await updateUser(dbUser, data);
                await interaction.reply({ephemeral: true, content: "Assigned APAC role, You are not able to change this please make a ticket to do so"})
            }
        } catch (e) {
            await logError(e, interaction);
        }
    },
    id: 'APAC',
}
