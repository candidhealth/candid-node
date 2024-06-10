/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const CreateWriteOffsResponse: core.serialization.ObjectSchema<
    serializers.writeOffs.v1.CreateWriteOffsResponse.Raw,
    CandidApi.writeOffs.v1.CreateWriteOffsResponse
> = core.serialization.object({
    writeOffs: core.serialization.property(
        "write_offs",
        core.serialization.list(
            core.serialization.lazy(async () => (await import("../../../../..")).writeOffs.v1.WriteOff)
        )
    ),
});

export declare namespace CreateWriteOffsResponse {
    interface Raw {
        write_offs: serializers.writeOffs.v1.WriteOff.Raw[];
    }
}
