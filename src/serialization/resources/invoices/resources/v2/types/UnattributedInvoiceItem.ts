/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const UnattributedInvoiceItem: core.serialization.ObjectSchema<
    serializers.invoices.v2.UnattributedInvoiceItem.Raw,
    CandidApi.invoices.v2.UnattributedInvoiceItem
> = core.serialization.object({
    amountCents: core.serialization.property("amount_cents", core.serialization.number()),
});

export declare namespace UnattributedInvoiceItem {
    interface Raw {
        amount_cents: number;
    }
}
