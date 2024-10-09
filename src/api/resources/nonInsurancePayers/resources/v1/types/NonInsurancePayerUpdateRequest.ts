/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export interface NonInsurancePayerUpdateRequest {
    /** Max 50 characters allowed */
    name?: string;
    description?: CandidApi.nonInsurancePayers.v1.NonInsurancePayerDescriptionUpdate;
    category?: CandidApi.nonInsurancePayers.v1.NonInsurancePayerCategoryUpdate;
    address?: CandidApi.nonInsurancePayers.v1.NonInsurancePayerAddressUpdate;
}
