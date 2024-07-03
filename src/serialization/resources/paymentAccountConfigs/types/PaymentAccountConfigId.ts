/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";

export const PaymentAccountConfigId: core.serialization.Schema<
    serializers.PaymentAccountConfigId.Raw,
    CandidApi.PaymentAccountConfigId
> = core.serialization.string().transform({
    transform: CandidApi.PaymentAccountConfigId,
    untransform: (value) => value,
});

export declare namespace PaymentAccountConfigId {
    type Raw = string;
}
