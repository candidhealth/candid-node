/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const MedicareAdvantageRecommendationPayload: core.serialization.ObjectSchema<
    serializers.preEncounter.eligibilityChecks.v1.MedicareAdvantageRecommendationPayload.Raw,
    CandidApi.preEncounter.eligibilityChecks.v1.MedicareAdvantageRecommendationPayload
> = core.serialization.object({
    payerId: core.serialization.property("payer_id", core.serialization.string()),
    payerName: core.serialization.property("payer_name", core.serialization.string()),
    memberId: core.serialization.property("member_id", core.serialization.string().optional()),
});

export declare namespace MedicareAdvantageRecommendationPayload {
    export interface Raw {
        payer_id: string;
        payer_name: string;
        member_id?: string | null;
    }
}
