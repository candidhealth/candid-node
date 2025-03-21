/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";

export const ProviderCredentialingSpanId: core.serialization.Schema<
    serializers.ProviderCredentialingSpanId.Raw,
    CandidApi.ProviderCredentialingSpanId
> = core.serialization.string().transform({
    transform: CandidApi.ProviderCredentialingSpanId,
    untransform: (value) => value,
});

export declare namespace ProviderCredentialingSpanId {
    export type Raw = string;
}
