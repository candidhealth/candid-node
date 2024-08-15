/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const ThirdPartyPayerId: core.serialization.Schema<
    serializers.thirdPartyPayers.v1.ThirdPartyPayerId.Raw,
    CandidApi.thirdPartyPayers.v1.ThirdPartyPayerId
> = core.serialization.string().transform({
    transform: CandidApi.thirdPartyPayers.v1.ThirdPartyPayerId,
    untransform: (value) => value,
});

export declare namespace ThirdPartyPayerId {
    type Raw = string;
}
