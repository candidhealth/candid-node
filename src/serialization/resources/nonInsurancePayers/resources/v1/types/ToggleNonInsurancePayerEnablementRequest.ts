/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const ToggleNonInsurancePayerEnablementRequest: core.serialization.ObjectSchema<
    serializers.nonInsurancePayers.v1.ToggleNonInsurancePayerEnablementRequest.Raw,
    CandidApi.nonInsurancePayers.v1.ToggleNonInsurancePayerEnablementRequest
> = core.serialization.object({
    enabled: core.serialization.boolean(),
});

export declare namespace ToggleNonInsurancePayerEnablementRequest {
    interface Raw {
        enabled: boolean;
    }
}