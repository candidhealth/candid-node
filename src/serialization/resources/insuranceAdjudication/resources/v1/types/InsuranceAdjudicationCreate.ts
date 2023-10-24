/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const InsuranceAdjudicationCreate: core.serialization.ObjectSchema<
    serializers.insuranceAdjudication.v1.InsuranceAdjudicationCreate.Raw,
    CandidApi.insuranceAdjudication.v1.InsuranceAdjudicationCreate
> = core.serialization.object({
    payerUuid: core.serialization.property(
        "payer_uuid",
        core.serialization.lazy(async () => (await import("../../../../..")).payers.v3.PayerUuid)
    ),
    postDate: core.serialization.property("post_date", core.serialization.string().optional()),
    payerClaimNumber: core.serialization.property("payer_claim_number", core.serialization.string()),
    checkNumber: core.serialization.property("check_number", core.serialization.string().optional()),
    checkDate: core.serialization.property("check_date", core.serialization.string()),
    note: core.serialization.string().optional(),
    claims: core.serialization.record(
        core.serialization.lazy(async () => (await import("../../../../..")).ServiceLineId),
        core.serialization.lazyObject(
            async () => (await import("../../../../..")).insuranceAdjudication.v1.ClaimAdjudicationCreate
        )
    ),
});

export declare namespace InsuranceAdjudicationCreate {
    interface Raw {
        payer_uuid: serializers.payers.v3.PayerUuid.Raw;
        post_date?: string | null;
        payer_claim_number: string;
        check_number?: string | null;
        check_date: string;
        note?: string | null;
        claims: Record<serializers.ServiceLineId.Raw, serializers.insuranceAdjudication.v1.ClaimAdjudicationCreate.Raw>;
    }
}
