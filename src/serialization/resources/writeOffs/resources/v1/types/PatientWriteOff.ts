/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const PatientWriteOff: core.serialization.ObjectSchema<
    serializers.writeOffs.v1.PatientWriteOff.Raw,
    CandidApi.writeOffs.v1.PatientWriteOff
> = core.serialization.object({
    writeOffId: core.serialization.property(
        "write_off_id",
        core.serialization.lazy(async () => (await import("../../../../..")).writeOffs.v1.WriteOffId)
    ),
    writeOffTimestamp: core.serialization.property("write_off_timestamp", core.serialization.date()),
    writeOffNote: core.serialization.property("write_off_note", core.serialization.string().optional()),
    writeOffReason: core.serialization.property(
        "write_off_reason",
        core.serialization.lazy(async () => (await import("../../../../..")).writeOffs.v1.PatientWriteOffReason)
    ),
    serviceLineId: core.serialization.property(
        "service_line_id",
        core.serialization.lazy(async () => (await import("../../../../..")).ServiceLineId)
    ),
    revertsWriteOffId: core.serialization.property(
        "reverts_write_off_id",
        core.serialization.lazy(async () => (await import("../../../../..")).writeOffs.v1.WriteOffId).optional()
    ),
    revertedByWriteOffId: core.serialization.property(
        "reverted_by_write_off_id",
        core.serialization.lazy(async () => (await import("../../../../..")).writeOffs.v1.WriteOffId).optional()
    ),
    amountCents: core.serialization.property("amount_cents", core.serialization.number()),
});

export declare namespace PatientWriteOff {
    interface Raw {
        write_off_id: serializers.writeOffs.v1.WriteOffId.Raw;
        write_off_timestamp: string;
        write_off_note?: string | null;
        write_off_reason: serializers.writeOffs.v1.PatientWriteOffReason.Raw;
        service_line_id: serializers.ServiceLineId.Raw;
        reverts_write_off_id?: serializers.writeOffs.v1.WriteOffId.Raw | null;
        reverted_by_write_off_id?: serializers.writeOffs.v1.WriteOffId.Raw | null;
        amount_cents: number;
    }
}
