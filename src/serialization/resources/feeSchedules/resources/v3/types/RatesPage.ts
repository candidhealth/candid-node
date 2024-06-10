/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const RatesPage: core.serialization.ObjectSchema<
    serializers.feeSchedules.v3.RatesPage.Raw,
    CandidApi.feeSchedules.v3.RatesPage
> = core.serialization
    .object({
        rates: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../../../..")).feeSchedules.v3.Rate)
        ),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).ResourcePage));

export declare namespace RatesPage {
    interface Raw extends serializers.ResourcePage.Raw {
        rates: serializers.feeSchedules.v3.Rate.Raw[];
    }
}
