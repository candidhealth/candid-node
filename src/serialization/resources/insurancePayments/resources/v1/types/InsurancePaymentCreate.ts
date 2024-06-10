/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { PayerIdentifier } from "../../../../payers/resources/v3/types/PayerIdentifier";
import { AllocationCreate } from "../../../../financials/types/AllocationCreate";

export const InsurancePaymentCreate: core.serialization.ObjectSchema<
    serializers.insurancePayments.v1.InsurancePaymentCreate.Raw,
    CandidApi.insurancePayments.v1.InsurancePaymentCreate
> = core.serialization.object({
    payerIdentifier: core.serialization.property("payer_identifier", PayerIdentifier),
    amountCents: core.serialization.property("amount_cents", core.serialization.number()),
    paymentTimestamp: core.serialization.property("payment_timestamp", core.serialization.date().optional()),
    paymentNote: core.serialization.property("payment_note", core.serialization.string().optional()),
    allocations: core.serialization.list(AllocationCreate),
});

export declare namespace InsurancePaymentCreate {
    interface Raw {
        payer_identifier: PayerIdentifier.Raw;
        amount_cents: number;
        payment_timestamp?: string | null;
        payment_note?: string | null;
        allocations: AllocationCreate.Raw[];
    }
}
