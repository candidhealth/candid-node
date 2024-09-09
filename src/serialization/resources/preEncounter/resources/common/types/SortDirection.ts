/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const SortDirection: core.serialization.Schema<
    serializers.preEncounter.SortDirection.Raw,
    CandidApi.preEncounter.SortDirection
> = core.serialization.enum_(["asc", "desc"]);

export declare namespace SortDirection {
    type Raw = "asc" | "desc";
}