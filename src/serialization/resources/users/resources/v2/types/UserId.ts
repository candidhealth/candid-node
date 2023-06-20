/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const UserId: core.serialization.Schema<serializers.users.v2.UserId.Raw, CandidApi.users.v2.UserId> =
    core.serialization.string().transform({
        transform: CandidApi.users.v2.UserId,
        untransform: (value) => value,
    });

export declare namespace UserId {
    type Raw = string;
}