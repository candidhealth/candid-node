/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const IdentifierCreate: core.serialization.ObjectSchema<
    serializers.IdentifierCreate.Raw,
    CandidApi.IdentifierCreate
> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).IdentifierBase));

export declare namespace IdentifierCreate {
    interface Raw extends serializers.IdentifierBase.Raw {}
}
