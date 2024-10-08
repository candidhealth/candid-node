/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../../index";

export interface EligibilityCheck {
    rawJson?: unknown;
    errors?: unknown;
    eligibilityStatus: CandidApi.preEncounter.coverages.v1.EligibilityStatus;
    planMetadata?: CandidApi.preEncounter.coverages.v1.PlanMetadata;
    benefits?: CandidApi.preEncounter.coverages.v1.CoverageBenefits;
}
