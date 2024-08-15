/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const ToggleThirdPartyPayerEnablementRequest: core.serialization.ObjectSchema<
    serializers.thirdPartyPayers.v1.ToggleThirdPartyPayerEnablementRequest.Raw,
    CandidApi.thirdPartyPayers.v1.ToggleThirdPartyPayerEnablementRequest
> = core.serialization.object({
    enabled: core.serialization.boolean(),
});

export declare namespace ToggleThirdPartyPayerEnablementRequest {
    interface Raw {
        enabled: boolean;
    }
}