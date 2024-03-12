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
    refundReason: core.serialization.property(
        "refund_reason",
        core.serialization.lazy(async () => (await import("../../../../../..")).RefundReasonUpdate).optional()
    ),
});

export declare namespace InsuranceRefundUpdate {
    interface Raw {
        refund_timestamp?: string | null;
        refund_note?: serializers.NoteUpdate.Raw | null;
        refund_reason?: serializers.RefundReasonUpdate.Raw | null;
    }
}