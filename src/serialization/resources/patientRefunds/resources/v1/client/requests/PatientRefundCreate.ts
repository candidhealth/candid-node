/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as CandidApi from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const PatientRefundCreate: core.serialization.Schema<
    serializers.patientRefunds.v1.PatientRefundCreate.Raw,
    CandidApi.patientRefunds.v1.PatientRefundCreate
> = core.serialization.object({
    amountCents: core.serialization.property("amount_cents", core.serialization.number()),
    refundTimestamp: core.serialization.property("refund_timestamp", core.serialization.date().optional()),
    refundNote: core.serialization.property("refund_note", core.serialization.string().optional()),
    patientExternalId: core.serialization.property(
        "patient_external_id",
        core.serialization.lazy(async () => (await import("../../../../../..")).PatientExternalId)
    ),
    allocations: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../../..")).AllocationCreate)
    ),
    invoice: core.serialization.lazy(async () => (await import("../../../../../..")).InvoiceId).optional(),
    refundReason: core.serialization.property(
        "refund_reason",
        core.serialization.lazy(async () => (await import("../../../../../..")).RefundReason).optional()
    ),
});

export declare namespace PatientRefundCreate {
    interface Raw {
        amount_cents: number;
        refund_timestamp?: string | null;
        refund_note?: string | null;
        patient_external_id: serializers.PatientExternalId.Raw;
        allocations: serializers.AllocationCreate.Raw[];
        invoice?: serializers.InvoiceId.Raw | null;
        refund_reason?: serializers.RefundReason.Raw | null;
    }
}
