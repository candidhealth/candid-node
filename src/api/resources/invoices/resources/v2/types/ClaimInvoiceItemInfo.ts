/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

export interface ClaimInvoiceItemInfo {
    claimInvoiceItem?: CandidApi.invoices.v2.ClaimInvoiceItem;
    serviceLineInvoiceItems: Record<CandidApi.ServiceLineId, CandidApi.invoices.v2.ServiceLineInvoiceItem>;
}