/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../index";

/**
 * @example
 *     {
 *         diagnosisIds: [CandidApi.DiagnosisId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")],
 *         placeOfServiceCodeAsSubmitted: "01"
 *     }
 */
export interface EncounterUpdate extends CandidApi.encounters.v4.EncounterOptional {
    /**
     * Ideally, this field should contain no more than 12 diagnoses. However, more diagnoses
     * may be submitted at this time, and coders will later prioritize the 12 that will be
     * submitted to the payor.
     *
     */
    diagnosisIds?: CandidApi.DiagnosisId[];
    /**
     * Box 24B on the CMS-1500 claim form. 837p Loop2300, CLM-05-1. 02 for telemedicine, 11 for in-person. Full list [here](https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set).
     *
     */
    placeOfServiceCodeAsSubmitted?: CandidApi.FacilityTypeCode;
}
