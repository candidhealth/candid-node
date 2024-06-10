/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";

export const ServiceFacilityId: core.serialization.Schema<
    serializers.ServiceFacilityId.Raw,
    CandidApi.ServiceFacilityId
> = core.serialization.string().transform({
    transform: CandidApi.ServiceFacilityId,
    untransform: (value) => value,
});

export declare namespace ServiceFacilityId {
    type Raw = string;
}
