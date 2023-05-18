/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const ProviderCredentialingSpanId: core.serialization.Schema<
    serializers.ProviderCredentialingSpanId.Raw,
    CandidApi.ProviderCredentialingSpanId
> = core.serialization.string();

export declare namespace ProviderCredentialingSpanId {
    type Raw = string;
}
