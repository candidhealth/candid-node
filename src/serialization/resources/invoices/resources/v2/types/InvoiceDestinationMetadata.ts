/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const InvoiceDestinationMetadata: core.serialization.ObjectSchema<
    serializers.invoices.v2.InvoiceDestinationMetadata.Raw,
    CandidApi.invoices.v2.InvoiceDestinationMetadata
> = core.serialization.object({
    invoiceDestination: core.serialization.property(
        "invoice_destination",
        core.serialization.lazy(async () => (await import("../../../../..")).invoices.v2.InvoiceDestination)
    ),
    sourceId: core.serialization.property("source_id", core.serialization.string()),
    sourceCustomerId: core.serialization.property("source_customer_id", core.serialization.string()),
    destinationStatus: core.serialization.property("destination_status", core.serialization.string().optional()),
});

export declare namespace InvoiceDestinationMetadata {
    interface Raw {
        invoice_destination: serializers.invoices.v2.InvoiceDestination.Raw;
        source_id: string;
        source_customer_id: string;
        destination_status?: string | null;
    }
}
