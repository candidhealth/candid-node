/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const EntityNotFoundErrorMessage: core.serialization.ObjectSchema<
    serializers.EntityNotFoundErrorMessage.Raw,
    CandidApi.EntityNotFoundErrorMessage
> = core.serialization.object({
    id: core.serialization.string(),
});

export declare namespace EntityNotFoundErrorMessage {
    interface Raw {
        id: string;
    }
}