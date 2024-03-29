/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const ExpectedNetworkStatusSubscriberInformation: core.serialization.ObjectSchema<
    serializers.expectedNetworkStatus.v2.ExpectedNetworkStatusSubscriberInformation.Raw,
    CandidApi.expectedNetworkStatus.v2.ExpectedNetworkStatusSubscriberInformation
> = core.serialization.object({
    payerUuid: core.serialization.property(
        "payer_uuid",
        core.serialization.lazy(async () => (await import("../../../../..")).payers.v3.PayerUuid)
    ),
    memberId: core.serialization.property("member_id", core.serialization.string()),
    insuranceType: core.serialization.property(
        "insurance_type",
        core.serialization.lazyObject(
            async () => (await import("../../../../..")).expectedNetworkStatus.v2.InsuranceType
        )
    ),
});

export declare namespace ExpectedNetworkStatusSubscriberInformation {
    interface Raw {
        payer_uuid: serializers.payers.v3.PayerUuid.Raw;
        member_id: string;
        insurance_type: serializers.expectedNetworkStatus.v2.InsuranceType.Raw;
    }
}
