/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const InsuranceRefundCreate: core.serialization.ObjectSchema<
    serializers.insuranceRefunds.v1.InsuranceRefundCreate.Raw,
    CandidApi.insuranceRefunds.v1.InsuranceRefundCreate
> = core.serialization.object({
    payerId: core.serialization.property(
        "payer_id",
        core.serialization.lazy(async () => (await import("../../../../..")).payers.v3.PayerId)
    ),
    amountCents: core.serialization.property("amount_cents", core.serialization.number()),
    refundTimestamp: core.serialization.property("refund_timestamp", core.serialization.date().optional()),
    refundNote: core.serialization.property("refund_note", core.serialization.string().optional()),
    allocations: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../..")).AllocationCreate)
    ),
    refundReason: core.serialization.property(
        "refund_reason",
        core.serialization.lazy(async () => (await import("../../../../..")).RefundReason).optional()
    ),
});

export declare namespace InsuranceRefundCreate {
    interface Raw {
        payer_id: serializers.payers.v3.PayerId.Raw;
        amount_cents: number;
        refund_timestamp?: string | null;
        refund_note?: string | null;
        allocations: serializers.AllocationCreate.Raw[];
        refund_reason?: serializers.RefundReason.Raw | null;
    }
}