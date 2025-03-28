/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const NonInsurancePayerRefundId: core.serialization.Schema<
    serializers.nonInsurancePayerRefunds.v1.NonInsurancePayerRefundId.Raw,
    CandidApi.nonInsurancePayerRefunds.v1.NonInsurancePayerRefundId
> = core.serialization.string().transform({
    transform: CandidApi.nonInsurancePayerRefunds.v1.NonInsurancePayerRefundId,
    untransform: (value) => value,
});

export declare namespace NonInsurancePayerRefundId {
    export type Raw = string;
}
