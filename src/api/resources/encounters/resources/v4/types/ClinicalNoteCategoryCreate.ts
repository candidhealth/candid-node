/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export interface ClinicalNoteCategoryCreate {
    category: CandidApi.encounters.v4.NoteCategory;
    notes: CandidApi.encounters.v4.ClinicalNote[];
}
