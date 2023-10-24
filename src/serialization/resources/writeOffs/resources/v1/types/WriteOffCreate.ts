/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const WriteOffCreate: core.serialization.ObjectSchema<
    serializers.writeOffs.v1.WriteOffCreate.Raw,
    CandidApi.writeOffs.v1.WriteOffCreate
> = core.serialization.object({
    writeOffTimestamp: core.serialization.property("write_off_timestamp", core.serialization.date()),
    writeOffNote: core.serialization.property("write_off_note", core.serialization.string().optional()),
    writeOffReason: core.serialization.property(
        "write_off_reason",
        core.serialization.lazy(async () => (await import("../../../../..")).writeOffs.v1.WriteOffReason)
    ),
    allocation: core.serialization.lazyObject(async () => (await import("../../../../..")).Allocation),
});

export declare namespace WriteOffCreate {
    interface Raw {
        write_off_timestamp: string;
        write_off_note?: string | null;
        write_off_reason: serializers.writeOffs.v1.WriteOffReason.Raw;
        allocation: serializers.Allocation.Raw;
    }
}
