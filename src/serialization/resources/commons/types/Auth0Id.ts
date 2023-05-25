/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const Auth0Id: core.serialization.Schema<serializers.Auth0Id.Raw, CandidApi.Auth0Id> = core.serialization
    .string()
    .transform({
        transform: CandidApi.Auth0Id,
        untransform: (value) => value,
    });

export declare namespace Auth0Id {
    type Raw = string;
}
