/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const InsuranceWriteOff: core.serialization.ObjectSchema<
    serializers.writeOffs.v1.InsuranceWriteOff.Raw,
    CandidApi.writeOffs.v1.InsuranceWriteOff
> = core.serialization.object({
    writeOffId: core.serialization.property(
        "write_off_id",
        core.serialization.lazy(async () => (await import("../../../../..")).writeOffs.v1.WriteOffId)
    ),
    payer: core.serialization.lazyObject(async () => (await import("../../../../..")).payers.v3.Payer),
    writeOffTarget: core.serialization.property(
        "write_off_target",
        core.serialization.lazy(async () => (await import("../../../../..")).writeOffs.v1.InsuranceWriteOffTarget)
    ),
    writeOffTimestamp: core.serialization.property("write_off_timestamp", core.serialization.date()),
    writeOffNote: core.serialization.property("write_off_note", core.serialization.string().optional()),
    writeOffReason: core.serialization.property(
        "write_off_reason",
        core.serialization.lazy(async () => (await import("../../../../..")).writeOffs.v1.InsuranceWriteOffReason)
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

export declare namespace InsuranceWriteOff {
    interface Raw {
        write_off_id: serializers.writeOffs.v1.WriteOffId.Raw;
        payer: serializers.payers.v3.Payer.Raw;
        write_off_target: serializers.writeOffs.v1.InsuranceWriteOffTarget.Raw;
        write_off_timestamp: string;
        write_off_note?: string | null;
        write_off_reason: serializers.writeOffs.v1.InsuranceWriteOffReason.Raw;
        reverts_write_off_id?: serializers.writeOffs.v1.WriteOffId.Raw | null;
        reverted_by_write_off_id?: serializers.writeOffs.v1.WriteOffId.Raw | null;
        amount_cents: number;
    }
}
