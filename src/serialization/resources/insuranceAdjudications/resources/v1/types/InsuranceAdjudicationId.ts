/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const InsuranceAdjudicationId: core.serialization.Schema<
    serializers.insuranceAdjudications.v1.InsuranceAdjudicationId.Raw,
    CandidApi.insuranceAdjudications.v1.InsuranceAdjudicationId
> = core.serialization.string().transform({
    transform: CandidApi.insuranceAdjudications.v1.InsuranceAdjudicationId,
    untransform: (value) => value,
});

export declare namespace InsuranceAdjudicationId {
    export type Raw = string;
}
