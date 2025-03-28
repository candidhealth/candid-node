/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { NonInsurancePayerRefundId } from "./NonInsurancePayerRefundId";
import { NonInsurancePayer } from "../../../../nonInsurancePayers/resources/v1/types/NonInsurancePayer";
import { Allocation } from "../../../../financials/types/Allocation";
import { RefundReason } from "../../../../financials/types/RefundReason";
import { InvoiceId } from "../../../../commons/types/InvoiceId";

export const NonInsurancePayerRefund: core.serialization.ObjectSchema<
    serializers.nonInsurancePayerRefunds.v1.NonInsurancePayerRefund.Raw,
    CandidApi.nonInsurancePayerRefunds.v1.NonInsurancePayerRefund
> = core.serialization.object({
    nonInsurancePayerRefundId: core.serialization.property("non_insurance_payer_refund_id", NonInsurancePayerRefundId),
    nonInsurancePayer: core.serialization.property("non_insurance_payer", NonInsurancePayer),
    amountCents: core.serialization.property("amount_cents", core.serialization.number()),
    refundTimestamp: core.serialization.property("refund_timestamp", core.serialization.date().optional()),
    refundNote: core.serialization.property("refund_note", core.serialization.string().optional()),
    checkNumber: core.serialization.property("check_number", core.serialization.string().optional()),
    allocations: core.serialization.list(Allocation),
    refundReason: core.serialization.property("refund_reason", RefundReason.optional()),
    invoiceId: core.serialization.property("invoice_id", InvoiceId.optional()),
});

export declare namespace NonInsurancePayerRefund {
    export interface Raw {
        non_insurance_payer_refund_id: NonInsurancePayerRefundId.Raw;
        non_insurance_payer: NonInsurancePayer.Raw;
        amount_cents: number;
        refund_timestamp?: string | null;
        refund_note?: string | null;
        check_number?: string | null;
        allocations: Allocation.Raw[];
        refund_reason?: RefundReason.Raw | null;
        invoice_id?: InvoiceId.Raw | null;
    }
}
