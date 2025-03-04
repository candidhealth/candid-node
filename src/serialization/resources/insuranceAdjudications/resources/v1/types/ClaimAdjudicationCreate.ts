/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ClaimStatusCodeCreate } from "../../../../eraCommons/types/ClaimStatusCodeCreate";
import { ServiceLineId } from "../../../../commons/types/ServiceLineId";
import { ServiceLineAdjudicationCreate } from "./ServiceLineAdjudicationCreate";
import { ClaimAdjustmentReasonCode } from "../../../../x12/resources/v1/types/ClaimAdjustmentReasonCode";

export const ClaimAdjudicationCreate: core.serialization.ObjectSchema<
    serializers.insuranceAdjudications.v1.ClaimAdjudicationCreate.Raw,
    CandidApi.insuranceAdjudications.v1.ClaimAdjudicationCreate
> = core.serialization.object({
    claimStatusCode: core.serialization.property("claim_status_code", ClaimStatusCodeCreate),
    insurancePaidAmountCents: core.serialization.property(
        "insurance_paid_amount_cents",
        core.serialization.number().optional(),
    ),
    chargeAmountCents: core.serialization.property("charge_amount_cents", core.serialization.number().optional()),
    serviceLines: core.serialization.property(
        "service_lines",
        core.serialization.record(ServiceLineId, core.serialization.list(ServiceLineAdjudicationCreate)),
    ),
    payerClaimNumber: core.serialization.property("payer_claim_number", core.serialization.string().optional()),
    carcs: core.serialization.list(ClaimAdjustmentReasonCode),
});

export declare namespace ClaimAdjudicationCreate {
    export interface Raw {
        claim_status_code: ClaimStatusCodeCreate.Raw;
        insurance_paid_amount_cents?: number | null;
        charge_amount_cents?: number | null;
        service_lines: Record<ServiceLineId.Raw, ServiceLineAdjudicationCreate.Raw[]>;
        payer_claim_number?: string | null;
        carcs: ClaimAdjustmentReasonCode.Raw[];
    }
}
