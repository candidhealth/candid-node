/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { PayerUuid } from "../../../../payers/resources/v3/types/PayerUuid";
import { SourceOfPaymentCode } from "../../../../commons/types/SourceOfPaymentCode";

export const MutablePayerPlanGroup: core.serialization.ObjectSchema<
    serializers.payerPlanGroups.v1.MutablePayerPlanGroup.Raw,
    CandidApi.payerPlanGroups.v1.MutablePayerPlanGroup
> = core.serialization.object({
    planGroupName: core.serialization.property("plan_group_name", core.serialization.string()),
    payerUuid: core.serialization.property("payer_uuid", PayerUuid),
    planType: core.serialization.property("plan_type", SourceOfPaymentCode),
});

export declare namespace MutablePayerPlanGroup {
    export interface Raw {
        plan_group_name: string;
        payer_uuid: PayerUuid.Raw;
        plan_type: SourceOfPaymentCode.Raw;
    }
}
