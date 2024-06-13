import {Document, model, Schema} from "mongoose";

export enum Actions {
    Cooldown = 'cd',
    ForceScore = 'fs',
    Nullify = 'nu',
    ReverseCooldown = 'rcd',
    Abandon = 'ab',
    AcceptFail = 'af',
    ForceAbandon = 'fa',
    RemoveCooldown = 'rd',
    ManualSubmit = 'ms',
}

export interface ActionInt extends Document {
    action: Actions;
    modId: string;
    userId: string;
    reason: string;
    time: number;
    actionData: string;
}

export const ActionSchema = new Schema({
    action: {
        type: String,
        enum: ['cd', 'fs', 'nu', 'rcd', 'ab', 'af', 'fa', 'rd', 'ms'],
        default: 'cd',
    },
    modId: String,
    userId: String,
    reason: String,
    time: Number,
    actionData: String,
});

export default model<ActionInt>('actions', ActionSchema);
