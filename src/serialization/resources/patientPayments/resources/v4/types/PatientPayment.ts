/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { PatientPaymentId } from "./PatientPaymentId";
import { OrganizationId } from "../../../../commons/types/OrganizationId";
import { PatientTransactionSource } from "../../../../financials/types/PatientTransactionSource";
import { PatientExternalId } from "../../../../commons/types/PatientExternalId";
import { Allocation } from "../../../../financials/types/Allocation";
import { InvoiceId } from "../../../../commons/types/InvoiceId";

export const PatientPayment: core.serialization.ObjectSchema<
    serializers.patientPayments.v4.PatientPayment.Raw,
    CandidApi.patientPayments.v4.PatientPayment
> = core.serialization.object({
    patientPaymentId: core.serialization.property("patient_payment_id", PatientPaymentId),
    organizationId: core.serialization.property("organization_id", OrganizationId),
    sourceInternalId: core.serialization.property("source_internal_id", core.serialization.string().optional()),
    paymentSource: core.serialization.property("payment_source", PatientTransactionSource),
    amountCents: core.serialization.property("amount_cents", core.serialization.number()),
    patientExternalId: core.serialization.property("patient_external_id", PatientExternalId),
    paymentTimestamp: core.serialization.property("payment_timestamp", core.serialization.date().optional()),
    paymentNote: core.serialization.property("payment_note", core.serialization.string().optional()),
    allocations: core.serialization.list(Allocation),
    invoice: InvoiceId.optional(),
});

export declare namespace PatientPayment {
    export interface Raw {
        patient_payment_id: PatientPaymentId.Raw;
        organization_id: OrganizationId.Raw;
        source_internal_id?: string | null;
        payment_source: PatientTransactionSource.Raw;
        amount_cents: number;
        patient_external_id: PatientExternalId.Raw;
        payment_timestamp?: string | null;
        payment_note?: string | null;
        allocations: Allocation.Raw[];
        invoice?: InvoiceId.Raw | null;
    }
}
