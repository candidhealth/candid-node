/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Ethnicity: core.serialization.Schema<
    serializers.preEncounter.Ethnicity.Raw,
    CandidApi.preEncounter.Ethnicity
> = core.serialization.enum_(["HISPANIC_OR_LATINO", "NOT_HISPANIC_OR_LATINO", "UNKNOWN", "REFUSED"]);

export declare namespace Ethnicity {
    type Raw = "HISPANIC_OR_LATINO" | "NOT_HISPANIC_OR_LATINO" | "UNKNOWN" | "REFUSED";
}
