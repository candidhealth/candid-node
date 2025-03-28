/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";

export const UpdatesDisabledDueToExternalSystemIntegrationErrorMessage: core.serialization.ObjectSchema<
    serializers.UpdatesDisabledDueToExternalSystemIntegrationErrorMessage.Raw,
    CandidApi.UpdatesDisabledDueToExternalSystemIntegrationErrorMessage
> = core.serialization.object({
    message: core.serialization.string().optional(),
});

export declare namespace UpdatesDisabledDueToExternalSystemIntegrationErrorMessage {
    export interface Raw {
        message?: string | null;
    }
}
