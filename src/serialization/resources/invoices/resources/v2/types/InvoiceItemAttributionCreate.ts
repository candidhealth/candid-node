/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ServiceLineId } from "../../../../commons/types/ServiceLineId";
import { ClaimId } from "../../../../commons/types/ClaimId";

export const InvoiceItemAttributionCreate: core.serialization.Schema<
    serializers.invoices.v2.InvoiceItemAttributionCreate.Raw,
    CandidApi.invoices.v2.InvoiceItemAttributionCreate
> = core.serialization
    .union("type", {
        service_line_id: core.serialization.object({
            value: ServiceLineId,
        }),
        claim_id: core.serialization.object({
            value: ClaimId,
        }),
        unattributed: core.serialization.object({}),
    })
    .transform<CandidApi.invoices.v2.InvoiceItemAttributionCreate>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace InvoiceItemAttributionCreate {
    export type Raw =
        | InvoiceItemAttributionCreate.ServiceLineId
        | InvoiceItemAttributionCreate.ClaimId
        | InvoiceItemAttributionCreate.Unattributed;

    export interface ServiceLineId {
        type: "service_line_id";
        value: ServiceLineId.Raw;
    }

    export interface ClaimId {
        type: "claim_id";
        value: ClaimId.Raw;
    }

    export interface Unattributed {
        type: "unattributed";
    }
}
