/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const CanonicalProviderId: core.serialization.Schema<
    serializers.preEncounter.CanonicalProviderId.Raw,
    CandidApi.preEncounter.CanonicalProviderId
> = core.serialization.string().transform({
    transform: CandidApi.preEncounter.CanonicalProviderId,
    untransform: (value) => value,
});

export declare namespace CanonicalProviderId {
    export type Raw = string;
}
