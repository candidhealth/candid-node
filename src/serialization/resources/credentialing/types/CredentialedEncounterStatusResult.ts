/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const CredentialedEncounterStatusResult: core.serialization.ObjectSchema<
    serializers.CredentialedEncounterStatusResult.Raw,
    CandidApi.CredentialedEncounterStatusResult
> = core.serialization.object({
    credentialingSpans: core.serialization.property(
        "credentialing_spans",
        core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).ProviderCredentialingSpan)
        )
    ),
});

export declare namespace CredentialedEncounterStatusResult {
    interface Raw {
        credentialing_spans: serializers.ProviderCredentialingSpan.Raw[];
    }
}
