/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../../index";

export interface PostEligibilityRecommendationRequest {
    eligibilityCheckId: string;
    patient: CandidApi.preEncounter.eligibilityChecks.v1.EligibilityRecommendationPatientInfo;
    recommendation: CandidApi.preEncounter.eligibilityChecks.v1.EligibilityRecommendationPayload;
}
