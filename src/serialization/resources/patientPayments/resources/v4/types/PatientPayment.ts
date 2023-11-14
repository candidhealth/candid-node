/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const PatientPayment: core.serialization.ObjectSchema<
    serializers.patientPayments.v4.PatientPayment.Raw,
    CandidApi.patientPayments.v4.PatientPayment
> = core.serialization.object({
    patientPaymentId: core.serialization.property(
        "patient_payment_id",
        core.serialization.lazy(async () => (await import("../../../../..")).patientPayments.v4.PatientPaymentId)
    ),
    organizationId: core.serialization.property(
        "organization_id",
        core.serialization.lazy(async () => (await import("../../../../..")).OrganizationId)
    ),
    sourceInternalId: core.serialization.property("source_internal_id", core.serialization.string()),
    amountCents: core.serialization.property("amount_cents", core.serialization.number()),
    patientExternalId: core.serialization.property(
        "patient_external_id",
        core.serialization.lazy(async () => (await import("../../../../..")).PatientExternalId)
    ),
    paymentTimestamp: core.serialization.property("payment_timestamp", core.serialization.date().optional()),
    paymentNote: core.serialization.property("payment_note", core.serialization.string().optional()),
    allocations: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../..")).Allocation)
    ),
    invoice: core.serialization.lazy(async () => (await import("../../../../..")).InvoiceId).optional(),
});

export declare namespace PatientPayment {
    interface Raw {
        patient_payment_id: serializers.patientPayments.v4.PatientPaymentId.Raw;
        organization_id: serializers.OrganizationId.Raw;
        source_internal_id: string;
        amount_cents: number;
        patient_external_id: serializers.PatientExternalId.Raw;
        payment_timestamp?: string | null;
        payment_note?: string | null;
        allocations: serializers.Allocation.Raw[];
        invoice?: serializers.InvoiceId.Raw | null;
    }
}