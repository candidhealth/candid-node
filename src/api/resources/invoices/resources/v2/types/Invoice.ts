/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

export interface Invoice {
    /** Total monetary amount (in cents) of all Invoice Items */
    amountCents: number;
    createdAt: Date;
    updatedAt: Date;
    organizationId: CandidApi.OrganizationId;
    /** Contains all relevant information from the third-party service this invoice was created in */
    invoiceDestinationMetadata: CandidApi.invoices.v2.InvoiceDestinationMetadata;
    patientExternalId: CandidApi.PatientExternalId;
    note?: string;
    dueDate: string;
    status: CandidApi.invoices.v2.InvoiceStatus;
    /** Link to the admin view of the invoice in the third-party service */
    url?: string;
    /** Link to the patient view of the invoice in the third-party service */
    customerInvoiceUrl?: string;
    /** The InvoiceItem rollup which contains all claim and service line invoice items */
    items: CandidApi.invoices.v2.InvoiceItemInfo;
}