/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";
import { DiagnosisId } from "./DiagnosisId";

export const DiagnosisNotFoundError: core.serialization.ObjectSchema<
    serializers.DiagnosisNotFoundError.Raw,
    CandidApi.DiagnosisNotFoundError
> = core.serialization.object({
    diagnosisId: core.serialization.property("diagnosis_id", DiagnosisId.optional()),
    message: core.serialization.string(),
});

export declare namespace DiagnosisNotFoundError {
    export interface Raw {
        diagnosis_id?: DiagnosisId.Raw | null;
        message: string;
    }
}
