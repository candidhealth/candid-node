/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { InvoiceId } from "../../../../commons/types/InvoiceId";
import { InvoiceItemInfo } from "../../../../invoices/resources/v2/types/InvoiceItemInfo";
import { PatientExternalId } from "../../../../commons/types/PatientExternalId";
import { InvoiceStatus } from "../../../../invoices/resources/v2/types/InvoiceStatus";

export const ImportInvoice: core.serialization.ObjectSchema<
    serializers.importInvoice.v1.ImportInvoice.Raw,
    CandidApi.importInvoice.v1.ImportInvoice
> = core.serialization.object({
    id: InvoiceId,
    createdAt: core.serialization.property("created_at", core.serialization.date()),
    updatedAt: core.serialization.property("updated_at", core.serialization.date()),
    items: InvoiceItemInfo,
    patientExternalId: core.serialization.property("patient_external_id", PatientExternalId),
    externalCustomerIdentifier: core.serialization.property(
        "external_customer_identifier",
        core.serialization.string(),
    ),
    status: InvoiceStatus,
    externalIdentifier: core.serialization.property("external_identifier", core.serialization.string()),
    note: core.serialization.string().optional(),
    customerInvoiceUrl: core.serialization.property("customer_invoice_url", core.serialization.string().optional()),
    dueDate: core.serialization.property("due_date", core.serialization.string()),
    amountCents: core.serialization.property("amount_cents", core.serialization.number()),
});

export declare namespace ImportInvoice {
    export interface Raw {
        id: InvoiceId.Raw;
        created_at: string;
        updated_at: string;
        items: InvoiceItemInfo.Raw;
        patient_external_id: PatientExternalId.Raw;
        external_customer_identifier: string;
        status: InvoiceStatus.Raw;
        external_identifier: string;
        note?: string | null;
        customer_invoice_url?: string | null;
        due_date: string;
        amount_cents: number;
    }
}
