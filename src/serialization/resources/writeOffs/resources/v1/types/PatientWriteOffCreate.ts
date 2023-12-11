/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const PatientWriteOffCreate: core.serialization.ObjectSchema<
    serializers.writeOffs.v1.PatientWriteOffCreate.Raw,
    CandidApi.writeOffs.v1.PatientWriteOffCreate
> = core.serialization.object({
    writeOffTimestamp: core.serialization.property("write_off_timestamp", core.serialization.date()),
    writeOffNote: core.serialization.property("write_off_note", core.serialization.string().optional()),
    writeOffReason: core.serialization.property(
        "write_off_reason",
        core.serialization.lazy(async () => (await import("../../../../..")).writeOffs.v1.WriteOffReason)
    ),
    serviceLineId: core.serialization.property(
        "service_line_id",
        core.serialization.lazy(async () => (await import("../../../../..")).ServiceLineId)
    ),
    amountCents: core.serialization.property("amount_cents", core.serialization.number()),
});

export declare namespace PatientWriteOffCreate {
    interface Raw {
        write_off_timestamp: string;
        write_off_note?: string | null;
        write_off_reason: serializers.writeOffs.v1.WriteOffReason.Raw;
        service_line_id: serializers.ServiceLineId.Raw;
        amount_cents: number;
    }
}
