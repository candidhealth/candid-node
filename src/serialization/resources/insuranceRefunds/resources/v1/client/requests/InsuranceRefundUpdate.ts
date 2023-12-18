/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as CandidApi from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const InsuranceRefundUpdate: core.serialization.Schema<
    serializers.insuranceRefunds.v1.InsuranceRefundUpdate.Raw,
    CandidApi.insuranceRefunds.v1.InsuranceRefundUpdate
> = core.serialization.object({
    refundTimestamp: core.serialization.property("refund_timestamp", core.serialization.date().optional()),
    refundNote: core.serialization.property(
        "refund_note",
        core.serialization.lazy(async () => (await import("../../../../../..")).NoteUpdate).optional()
    ),
    payerIdentifier: core.serialization.property(
        "payer_identifier",
        core.serialization.lazy(async () => (await import("../../../../../..")).payers.v3.PayerIdentifier).optional()
    ),
    allocations: core.serialization
        .lazyObject(async () => (await import("../../../../../..")).AllocationAmountUpdate)
        .optional(),
    refundReason: core.serialization.property(
        "refund_reason",
        core.serialization.lazy(async () => (await import("../../../../../..")).RefundReasonUpdate).optional()
    ),
});

export declare namespace InsuranceRefundUpdate {
    interface Raw {
        refund_timestamp?: string | null;
        refund_note?: serializers.NoteUpdate.Raw | null;
        payer_identifier?: serializers.payers.v3.PayerIdentifier.Raw | null;
        allocations?: serializers.AllocationAmountUpdate.Raw | null;
        refund_reason?: serializers.RefundReasonUpdate.Raw | null;
    }
}
