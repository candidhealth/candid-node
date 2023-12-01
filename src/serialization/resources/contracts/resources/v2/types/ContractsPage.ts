/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const ContractsPage: core.serialization.ObjectSchema<
    serializers.contracts.v2.ContractsPage.Raw,
    CandidApi.contracts.v2.ContractsPage
> = core.serialization
    .object({
        items: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../../../..")).contracts.v2.Contract)
        ),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).ResourcePage));

export declare namespace ContractsPage {
    interface Raw extends serializers.ResourcePage.Raw {
        items: serializers.contracts.v2.Contract.Raw[];
    }
}
