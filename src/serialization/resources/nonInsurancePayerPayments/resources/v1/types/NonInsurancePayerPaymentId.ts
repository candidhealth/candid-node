/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const NonInsurancePayerPaymentId: core.serialization.Schema<
    serializers.nonInsurancePayerPayments.v1.NonInsurancePayerPaymentId.Raw,
    CandidApi.nonInsurancePayerPayments.v1.NonInsurancePayerPaymentId
> = core.serialization.string().transform({
    transform: CandidApi.nonInsurancePayerPayments.v1.NonInsurancePayerPaymentId,
    untransform: (value) => value,
});

export declare namespace NonInsurancePayerPaymentId {
    export type Raw = string;
}
