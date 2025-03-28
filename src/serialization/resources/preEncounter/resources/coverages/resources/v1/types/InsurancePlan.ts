/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { PayerId } from "../../../../common/types/PayerId";
import { AdditionalPayerInformation } from "../../../../common/types/AdditionalPayerInformation";
import { NetworkType } from "./NetworkType";
import { InsuranceTypeCode } from "./InsuranceTypeCode";
import { Period } from "../../../../common/types/Period";
import { PayerPlanGroupId } from "../../../../common/types/PayerPlanGroupId";

export const InsurancePlan: core.serialization.ObjectSchema<
    serializers.preEncounter.coverages.v1.InsurancePlan.Raw,
    CandidApi.preEncounter.coverages.v1.InsurancePlan
> = core.serialization.object({
    memberId: core.serialization.property("member_id", core.serialization.string()),
    payerId: core.serialization.property("payer_id", PayerId),
    payerName: core.serialization.property("payer_name", core.serialization.string()),
    additionalPayerInformation: core.serialization.property(
        "additional_payer_information",
        AdditionalPayerInformation.optional(),
    ),
    groupNumber: core.serialization.property("group_number", core.serialization.string().optional()),
    name: core.serialization.string().optional(),
    planType: core.serialization.property("plan_type", NetworkType.optional()),
    type: InsuranceTypeCode.optional(),
    period: Period.optional(),
    insuranceCardImageLocator: core.serialization.property(
        "insurance_card_image_locator",
        core.serialization.string().optional(),
    ),
    payerPlanGroupId: core.serialization.property("payer_plan_group_id", PayerPlanGroupId.optional()),
});

export declare namespace InsurancePlan {
    export interface Raw {
        member_id: string;
        payer_id: PayerId.Raw;
        payer_name: string;
        additional_payer_information?: AdditionalPayerInformation.Raw | null;
        group_number?: string | null;
        name?: string | null;
        plan_type?: NetworkType.Raw | null;
        type?: InsuranceTypeCode.Raw | null;
        period?: Period.Raw | null;
        insurance_card_image_locator?: string | null;
        payer_plan_group_id?: PayerPlanGroupId.Raw | null;
    }
}
