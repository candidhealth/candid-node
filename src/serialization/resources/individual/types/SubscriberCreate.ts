/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const SubscriberCreate: core.serialization.ObjectSchema<
    serializers.SubscriberCreate.Raw,
    CandidApi.SubscriberCreate
> = core.serialization
    .object({
        insuranceCard: core.serialization.property(
            "insurance_card",
            core.serialization.lazyObject(async () => (await import("../../..")).InsuranceCardCreate)
        ),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).SubscriberBase));

export declare namespace SubscriberCreate {
    interface Raw extends serializers.SubscriberBase.Raw {
        insurance_card: serializers.InsuranceCardCreate.Raw;
    }
}
