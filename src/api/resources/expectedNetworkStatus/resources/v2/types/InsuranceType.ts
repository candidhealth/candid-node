/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

export interface InsuranceType {
    /** The line of business associated with the patient’s insurance */
    lineOfBusiness: CandidApi.expectedNetworkStatus.v2.LineOfBusiness;
    /** The Insurance Type Code associated with the patient’s insurance plan. */
    insuranceTypeCodes: CandidApi.InsuranceTypeCode[];
}
