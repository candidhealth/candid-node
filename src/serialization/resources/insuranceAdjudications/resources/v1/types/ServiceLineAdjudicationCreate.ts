/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { DenialReasonContent } from "../../../../serviceLines/resources/v2/types/DenialReasonContent";
import { ClaimAdjustmentReasonCode } from "../../../../x12/resources/v1/types/ClaimAdjustmentReasonCode";
import { RemittanceAdviceRemarkCode } from "../../../../x12/resources/v1/types/RemittanceAdviceRemarkCode";

export const ServiceLineAdjudicationCreate: core.serialization.ObjectSchema<
    serializers.insuranceAdjudications.v1.ServiceLineAdjudicationCreate.Raw,
    CandidApi.insuranceAdjudications.v1.ServiceLineAdjudicationCreate
> = core.serialization.object({
    denialReason: core.serialization.property("denial_reason", DenialReasonContent.optional()),
    insuranceAllowedAmountCents: core.serialization.property(
        "insurance_allowed_amount_cents",
        core.serialization.number().optional(),
    ),
    insurancePaidAmountCents: core.serialization.property(
        "insurance_paid_amount_cents",
        core.serialization.number().optional(),
    ),
    deductibleAmountCents: core.serialization.property(
        "deductible_amount_cents",
        core.serialization.number().optional(),
    ),
    coinsuranceAmountCents: core.serialization.property(
        "coinsurance_amount_cents",
        core.serialization.number().optional(),
    ),
    copayAmountCents: core.serialization.property("copay_amount_cents", core.serialization.number().optional()),
    carcs: core.serialization.list(ClaimAdjustmentReasonCode),
    rarcs: core.serialization.list(RemittanceAdviceRemarkCode),
});

export declare namespace ServiceLineAdjudicationCreate {
    export interface Raw {
        denial_reason?: DenialReasonContent.Raw | null;
        insurance_allowed_amount_cents?: number | null;
        insurance_paid_amount_cents?: number | null;
        deductible_amount_cents?: number | null;
        coinsurance_amount_cents?: number | null;
        copay_amount_cents?: number | null;
        carcs: ClaimAdjustmentReasonCode.Raw[];
        rarcs: RemittanceAdviceRemarkCode.Raw[];
    }
}
