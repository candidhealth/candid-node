/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const ProviderId: core.serialization.Schema<
    serializers.encounterProviders.v2.ProviderId.Raw,
    CandidApi.encounterProviders.v2.ProviderId
> = core.serialization.string();

export declare namespace ProviderId {
    type Raw = string;
}
