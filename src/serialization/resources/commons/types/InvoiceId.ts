/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const InvoiceId: core.serialization.Schema<serializers.InvoiceId.Raw, CandidApi.InvoiceId> = core.serialization
    .string()
    .transform({
        transform: CandidApi.InvoiceId,
        untransform: (value) => value,
    });

export declare namespace InvoiceId {
    type Raw = string;
}