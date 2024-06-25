/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../index";

/**
 * @example
 *     {
 *         patientExternalId: CandidApi.PatientExternalId("string"),
 *         encounterExternalId: CandidApi.EncounterExternalId("string"),
 *         note: "string",
 *         dueDateBefore: "2023-01-15",
 *         dueDateAfter: "2023-01-15",
 *         status: CandidApi.invoices.v2.InvoiceStatus.Draft,
 *         limit: 1,
 *         sort: CandidApi.invoices.v2.InvoiceSortField.CreatedAt,
 *         sortDirection: CandidApi.SortDirection.Asc,
 *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9")
 *     }
 */
export interface SearchImportedInvoicesRequest {
    patientExternalId?: CandidApi.PatientExternalId;
    encounterExternalId?: CandidApi.EncounterExternalId;
    /**
     * partial match supported
     */
    note?: string;
    /**
     * all invoices whose due date is before this due date, not inclusive
     */
    dueDateBefore?: string;
    /**
     * all invoices whose due date is after this due date, not inclusive
     */
    dueDateAfter?: string;
    /**
     * all invoices that match any of the provided statuses
     */
    status?: CandidApi.invoices.v2.InvoiceStatus | CandidApi.invoices.v2.InvoiceStatus[];
    /**
     * Defaults to 100
     */
    limit?: number;
    /**
     * Defaults to created_at
     */
    sort?: CandidApi.invoices.v2.InvoiceSortField;
    /**
     * Sort direction. Defaults to descending order
     */
    sortDirection?: CandidApi.SortDirection;
    pageToken?: CandidApi.PageToken;
}
