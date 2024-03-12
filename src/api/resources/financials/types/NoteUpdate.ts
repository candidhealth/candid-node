/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../..";

export type NoteUpdate = CandidApi.NoteUpdate.Set | CandidApi.NoteUpdate.Remove;

export declare namespace NoteUpdate {
    interface Set {
        type: "set";
        value: string;
    }

    interface Remove {
        type: "remove";
    }
}