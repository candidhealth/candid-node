/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const TaxId: core.serialization.Schema<serializers.TaxId.Raw, CandidApi.TaxId> = core.serialization
    .string()
    .transform({
        transform: CandidApi.TaxId,
        untransform: (value) => value,
    });

export declare namespace TaxId {
    type Raw = string;
}
