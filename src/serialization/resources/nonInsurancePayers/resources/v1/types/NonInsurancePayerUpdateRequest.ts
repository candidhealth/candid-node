/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { NonInsurancePayerDescriptionUpdate } from "./NonInsurancePayerDescriptionUpdate";
import { NonInsurancePayerCategoryUpdate } from "./NonInsurancePayerCategoryUpdate";

export const NonInsurancePayerUpdateRequest: core.serialization.ObjectSchema<
    serializers.nonInsurancePayers.v1.NonInsurancePayerUpdateRequest.Raw,
    CandidApi.nonInsurancePayers.v1.NonInsurancePayerUpdateRequest
> = core.serialization.object({
    name: core.serialization.string().optional(),
    description: NonInsurancePayerDescriptionUpdate.optional(),
    category: NonInsurancePayerCategoryUpdate.optional(),
});

export declare namespace NonInsurancePayerUpdateRequest {
    interface Raw {
        name?: string | null;
        description?: NonInsurancePayerDescriptionUpdate.Raw | null;
        category?: NonInsurancePayerCategoryUpdate.Raw | null;
    }
}