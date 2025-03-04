/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { InvoiceItemUpdateType } from "./InvoiceItemUpdateType";
import { InvoiceItemCreate } from "../../../../invoices/resources/v2/types/InvoiceItemCreate";

export const InvoiceItemInfoUpdate: core.serialization.ObjectSchema<
    serializers.importInvoice.v1.InvoiceItemInfoUpdate.Raw,
    CandidApi.importInvoice.v1.InvoiceItemInfoUpdate
> = core.serialization.object({
    updateType: core.serialization.property("update_type", InvoiceItemUpdateType),
    items: core.serialization.list(InvoiceItemCreate),
});

export declare namespace InvoiceItemInfoUpdate {
    export interface Raw {
        update_type: InvoiceItemUpdateType.Raw;
        items: InvoiceItemCreate.Raw[];
    }
}
