/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";
import { ServiceLineId } from "../../commons/types/ServiceLineId";

export const InvoiceItem: core.serialization.ObjectSchema<serializers.InvoiceItem.Raw, CandidApi.InvoiceItem> =
    core.serialization.object({
        serviceLineId: core.serialization.property("service_line_id", ServiceLineId),
        amountCents: core.serialization.property("amount_cents", core.serialization.number()),
    });

export declare namespace InvoiceItem {
    interface Raw {
        service_line_id: ServiceLineId.Raw;
        amount_cents: number;
    }
}