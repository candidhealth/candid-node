/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const ClinicalNoteCategoryCreate: core.serialization.ObjectSchema<
    serializers.encounters.v4.ClinicalNoteCategoryCreate.Raw,
    CandidApi.encounters.v4.ClinicalNoteCategoryCreate
> = core.serialization.object({
    category: core.serialization.lazy(async () => (await import("../../../../..")).encounters.v4.NoteCategory),
    notes: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../..")).encounters.v4.ClinicalNote)
    ),
});

export declare namespace ClinicalNoteCategoryCreate {
    interface Raw {
        category: serializers.encounters.v4.NoteCategory.Raw;
        notes: serializers.encounters.v4.ClinicalNote.Raw[];
    }
}
