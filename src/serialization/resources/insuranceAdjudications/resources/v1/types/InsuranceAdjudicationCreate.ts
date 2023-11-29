/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const InsuranceAdjudicationCreate: core.serialization.ObjectSchema<
    serializers.insuranceAdjudications.v1.InsuranceAdjudicationCreate.Raw,
    CandidApi.insuranceAdjudications.v1.InsuranceAdjudicationCreate
> = core.serialization.object({
    payerIdentifier: core.serialization.property(
        "payer_identifier",
        core.serialization.lazy(async () => (await import("../../../../..")).payers.v3.PayerIdentifier)
    ),
    payee: core.serialization.lazyObject(async () => (await import("../../../../..")).remits.v1.Payee),
    postDate: core.serialization.property("post_date", core.serialization.string().optional()),
    checkNumber: core.serialization.property("check_number", core.serialization.string().optional()),
    checkDate: core.serialization.property("check_date", core.serialization.string()),
    note: core.serialization.string().optional(),
    claims: core.serialization.record(
        core.serialization.lazy(async () => (await import("../../../../..")).ClaimId),
        core.serialization.lazyObject(
            async () => (await import("../../../../..")).insuranceAdjudications.v1.ClaimAdjudicationCreate
        )
    ),
});

export declare namespace InsuranceAdjudicationCreate {
    interface Raw {
        payer_identifier: serializers.payers.v3.PayerIdentifier.Raw;
        payee: serializers.remits.v1.Payee.Raw;
        post_date?: string | null;
        check_number?: string | null;
        check_date: string;
        note?: string | null;
        claims: Record<serializers.ClaimId.Raw, serializers.insuranceAdjudications.v1.ClaimAdjudicationCreate.Raw>;
    }
}
