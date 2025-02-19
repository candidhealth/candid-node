/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { OrganizationId } from "../../../../commons/types/OrganizationId";
import { InvoiceDestinationMetadata } from "./InvoiceDestinationMetadata";
import { PatientExternalId } from "../../../../commons/types/PatientExternalId";
import { InvoiceStatus } from "./InvoiceStatus";
import { InvoiceItemInfo } from "./InvoiceItemInfo";

export const Invoice: core.serialization.ObjectSchema<
    serializers.invoices.v2.Invoice.Raw,
    CandidApi.invoices.v2.Invoice
> = core.serialization.object({
    amountCents: core.serialization.property("amount_cents", core.serialization.number()),
    createdAt: core.serialization.property("created_at", core.serialization.date()),
    updatedAt: core.serialization.property("updated_at", core.serialization.date()),
    organizationId: core.serialization.property("organization_id", OrganizationId),
    invoiceDestinationMetadata: core.serialization.property("invoice_destination_metadata", InvoiceDestinationMetadata),
    patientExternalId: core.serialization.property("patient_external_id", PatientExternalId),
    note: core.serialization.string().optional(),
    dueDate: core.serialization.property("due_date", core.serialization.string()),
    status: InvoiceStatus,
    url: core.serialization.string().optional(),
    customerInvoiceUrl: core.serialization.property("customer_invoice_url", core.serialization.string().optional()),
    items: InvoiceItemInfo,
});

export declare namespace Invoice {
    export interface Raw {
        amount_cents: number;
        created_at: string;
        updated_at: string;
        organization_id: OrganizationId.Raw;
        invoice_destination_metadata: InvoiceDestinationMetadata.Raw;
        patient_external_id: PatientExternalId.Raw;
        note?: string | null;
        due_date: string;
        status: InvoiceStatus.Raw;
        url?: string | null;
        customer_invoice_url?: string | null;
        items: InvoiceItemInfo.Raw;
    }
}
