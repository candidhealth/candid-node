/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const NoteId: core.serialization.Schema<serializers.preEncounter.NoteId.Raw, CandidApi.preEncounter.NoteId> =
    core.serialization.string().transform({
        transform: CandidApi.preEncounter.NoteId,
        untransform: (value) => value,
    });

export declare namespace NoteId {
    export type Raw = string;
}
