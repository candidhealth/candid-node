/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";

export const UnauthorizedErrorMessage: core.serialization.ObjectSchema<
    serializers.UnauthorizedErrorMessage.Raw,
    CandidApi.UnauthorizedErrorMessage
> = core.serialization.object({
    message: core.serialization.string().optional(),
});

export declare namespace UnauthorizedErrorMessage {
    export interface Raw {
        message?: string | null;
    }
}
