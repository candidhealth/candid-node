/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const PayerThreshold: core.serialization.ObjectSchema<
    serializers.feeSchedules.v3.PayerThreshold.Raw,
    CandidApi.feeSchedules.v3.PayerThreshold
> = core.serialization.object({
    upperThresholdCents: core.serialization.property("upper_threshold_cents", core.serialization.number().optional()),
    lowerThresholdCents: core.serialization.property("lower_threshold_cents", core.serialization.number().optional()),
    disablePaidIncorrectly: core.serialization.property("disable_paid_incorrectly", core.serialization.boolean()),
});

export declare namespace PayerThreshold {
    export interface Raw {
        upper_threshold_cents?: number | null;
        lower_threshold_cents?: number | null;
        disable_paid_incorrectly: boolean;
    }
}
