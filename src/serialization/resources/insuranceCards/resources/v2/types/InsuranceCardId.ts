/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const InsuranceCardId: core.serialization.Schema<
    serializers.insuranceCards.v2.InsuranceCardId.Raw,
    CandidApi.insuranceCards.v2.InsuranceCardId
> = core.serialization.string().transform({
    transform: CandidApi.insuranceCards.v2.InsuranceCardId,
    untransform: (value) => value,
});

export declare namespace InsuranceCardId {
    type Raw = string;
}
