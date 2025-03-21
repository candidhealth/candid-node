/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const UserId: core.serialization.Schema<serializers.preEncounter.UserId.Raw, CandidApi.preEncounter.UserId> =
    core.serialization.string().transform({
        transform: CandidApi.preEncounter.UserId,
        untransform: (value) => value,
    });

export declare namespace UserId {
    export type Raw = string;
}
