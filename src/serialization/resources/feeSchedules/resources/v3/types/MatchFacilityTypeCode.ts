/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { FacilityTypeCode } from "../../../../commons/types/FacilityTypeCode";

export const MatchFacilityTypeCode: core.serialization.ObjectSchema<
    serializers.feeSchedules.v3.MatchFacilityTypeCode.Raw,
    CandidApi.feeSchedules.v3.MatchFacilityTypeCode
> = core.serialization.object({
    value: FacilityTypeCode.optional(),
    match: core.serialization.boolean(),
    explanation: core.serialization.string(),
});

export declare namespace MatchFacilityTypeCode {
    export interface Raw {
        value?: FacilityTypeCode.Raw | null;
        match: boolean;
        explanation: string;
    }
}
