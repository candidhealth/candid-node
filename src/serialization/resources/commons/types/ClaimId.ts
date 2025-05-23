/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";

export const ClaimId: core.serialization.Schema<serializers.ClaimId.Raw, CandidApi.ClaimId> = core.serialization
    .string()
    .transform({
        transform: CandidApi.ClaimId,
        untransform: (value) => value,
    });

export declare namespace ClaimId {
    export type Raw = string;
}
