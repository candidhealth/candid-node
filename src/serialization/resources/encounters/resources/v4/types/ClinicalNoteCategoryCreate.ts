/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { NoteCategory } from "./NoteCategory";
import { ClinicalNote } from "./ClinicalNote";

export const ClinicalNoteCategoryCreate: core.serialization.ObjectSchema<
    serializers.encounters.v4.ClinicalNoteCategoryCreate.Raw,
    CandidApi.encounters.v4.ClinicalNoteCategoryCreate
> = core.serialization.object({
    category: NoteCategory,
    notes: core.serialization.list(ClinicalNote),
});

export declare namespace ClinicalNoteCategoryCreate {
    export interface Raw {
        category: NoteCategory.Raw;
        notes: ClinicalNote.Raw[];
    }
}
