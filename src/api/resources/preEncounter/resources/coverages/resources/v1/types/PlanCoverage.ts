/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../../index";

export interface PlanCoverage {
    inNetwork?: CandidApi.preEncounter.coverages.v1.PlanCoverageDetails;
    inNetworkFlat?: CandidApi.preEncounter.coverages.v1.CoverageDetails[];
    outOfNetwork?: CandidApi.preEncounter.coverages.v1.PlanCoverageDetails;
    outOfNetworkFlat?: CandidApi.preEncounter.coverages.v1.CoverageDetails[];
}
