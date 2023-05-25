/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const EncounterSortOptions: core.serialization.Schema<
    serializers.encounters.v4.EncounterSortOptions.Raw,
    CandidApi.encounters.v4.EncounterSortOptions
> = core.serialization.enum_(["created_at:asc", "created_at:desc", "date_of_service:asc", "date_of_service:desc"]);

export declare namespace EncounterSortOptions {
    type Raw = "created_at:asc" | "created_at:desc" | "date_of_service:asc" | "date_of_service:desc";
}