/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const AuthZeroMetadata: core.serialization.ObjectSchema<
    serializers.users.v2.AuthZeroMetadata.Raw,
    CandidApi.users.v2.AuthZeroMetadata
> = core.serialization.object({
    auth0Id: core.serialization.property("auth0_id", core.serialization.string()),
});

export declare namespace AuthZeroMetadata {
    interface Raw {
        auth0_id: string;
    }
}