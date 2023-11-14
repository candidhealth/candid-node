/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const HttpServiceUnavailableErrorMessage: core.serialization.ObjectSchema<
    serializers.HttpServiceUnavailableErrorMessage.Raw,
    CandidApi.HttpServiceUnavailableErrorMessage
> = core.serialization.object({
    message: core.serialization.string().optional(),
});

export declare namespace HttpServiceUnavailableErrorMessage {
    interface Raw {
        message?: string | null;
    }
}