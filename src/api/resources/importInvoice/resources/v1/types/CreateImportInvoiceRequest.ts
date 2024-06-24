/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export interface CreateImportInvoiceRequest {
    patientExternalId: CandidApi.PatientExternalId;
    /** Id of the customer in the source system */
    externalCustomerIdentifier: string;
    note?: string;
    /** If given as None, days_until_due in the payment config will be used to create a default date */
    dueDate?: string;
    items: CandidApi.invoices.v2.InvoiceItemCreate[];
    status: CandidApi.invoices.v2.InvoiceStatus;
    /** Id of the invoice being imported in the source system. Warning - This field CANNOT be updated. */
    externalIdentifier: string;
    /** Link to the patient view of the invoice in the third-party service */
    customerInvoiceUrl?: string;
}