/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const OutOfNetworkContractingStatusResult: core.serialization.ObjectSchema<
    serializers.encounters.v4.OutOfNetworkContractingStatusResult.Raw,
    CandidApi.encounters.v4.OutOfNetworkContractingStatusResult
> = core.serialization.object({
    outOfNetworkReason: core.serialization.property(
        "out_of_network_reason",
        core.serialization.lazy(
            async () => (await import("../../../../..")).encounters.v4.ContractingOutOfOfNetworkReason
        )
    ),
});

export declare namespace OutOfNetworkContractingStatusResult {
    interface Raw {
        out_of_network_reason: serializers.encounters.v4.ContractingOutOfOfNetworkReason.Raw;
    }
}