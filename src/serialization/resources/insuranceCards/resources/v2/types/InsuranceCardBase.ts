/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const InsuranceCardBase: core.serialization.ObjectSchema<
    serializers.insuranceCards.v2.InsuranceCardBase.Raw,
    CandidApi.insuranceCards.v2.InsuranceCardBase
> = core.serialization.object({
    groupNumber: core.serialization.property("group_number", core.serialization.string().optional()),
    planName: core.serialization.property("plan_name", core.serialization.string().optional()),
    planType: core.serialization.property(
        "plan_type",
        core.serialization.lazy(async () => (await import("../../../../..")).SourceOfPaymentCode).optional()
    ),
    insuranceType: core.serialization.property(
        "insurance_type",
        core.serialization.lazy(async () => (await import("../../../../..")).InsuranceTypeCode).optional()
    ),
});

export declare namespace InsuranceCardBase {
    interface Raw {
        group_number?: string | null;
        plan_name?: string | null;
        plan_type?: serializers.SourceOfPaymentCode.Raw | null;
        insurance_type?: serializers.InsuranceTypeCode.Raw | null;
    }
}
