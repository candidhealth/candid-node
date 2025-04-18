/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const InvoiceDestination: core.serialization.Schema<
    serializers.invoices.v2.InvoiceDestination.Raw,
    CandidApi.invoices.v2.InvoiceDestination
> = core.serialization.enum_(["STRIPE", "CEDAR", "HEALTHIE", "COLLECTLY", "THIRD_PARTY_PAYERS"]);

export declare namespace InvoiceDestination {
    export type Raw = "STRIPE" | "CEDAR" | "HEALTHIE" | "COLLECTLY" | "THIRD_PARTY_PAYERS";
}
