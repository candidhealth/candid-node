/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { RateUploadWithPossibleErrors } from "../types/RateUploadWithPossibleErrors";

export const FeeScheduleValidationHttpError: core.serialization.Schema<
    serializers.feeSchedules.v3.FeeScheduleValidationHttpError.Raw,
    CandidApi.feeSchedules.v3.RateUploadWithPossibleErrors[]
> = core.serialization.list(RateUploadWithPossibleErrors);

export declare namespace FeeScheduleValidationHttpError {
    export type Raw = RateUploadWithPossibleErrors.Raw[];
}
