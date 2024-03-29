/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const MedicaidProviderIdentifier: core.serialization.ObjectSchema<
    serializers.MedicaidProviderIdentifier.Raw,
    CandidApi.MedicaidProviderIdentifier
> = core.serialization.object({
    state: core.serialization.lazy(async () => (await import("../../..")).State),
    providerNumber: core.serialization.property("provider_number", core.serialization.string()),
});

export declare namespace MedicaidProviderIdentifier {
    interface Raw {
        state: serializers.State.Raw;
        provider_number: string;
    }
}
