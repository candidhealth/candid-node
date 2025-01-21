/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const CoverageLevel: core.serialization.Schema<
    serializers.preEncounter.coverages.v1.CoverageLevel.Raw,
    CandidApi.preEncounter.coverages.v1.CoverageLevel
> = core.serialization.enum_(["EMPLOYEE_AND_CHILDREN", "EMPLOYEE_ONLY", "EMPLOYEE_AND_SPOUSE", "FAMILY", "INDIVIDUAL"]);

export declare namespace CoverageLevel {
    type Raw = "EMPLOYEE_AND_CHILDREN" | "EMPLOYEE_ONLY" | "EMPLOYEE_AND_SPOUSE" | "FAMILY" | "INDIVIDUAL";
}
