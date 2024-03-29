/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const OrganizationNotAuthorizedErrorMessage: core.serialization.ObjectSchema<
    serializers.OrganizationNotAuthorizedErrorMessage.Raw,
    CandidApi.OrganizationNotAuthorizedErrorMessage
> = core.serialization.object({
    message: core.serialization.string(),
});

export declare namespace OrganizationNotAuthorizedErrorMessage {
    interface Raw {
        message: string;
    }
}
