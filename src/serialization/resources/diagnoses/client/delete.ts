/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";
import { DiagnosisNotFoundError } from "../types/DiagnosisNotFoundError";

export const Error: core.serialization.Schema<
    serializers.diagnoses.delete.Error.Raw,
    CandidApi.diagnoses.delete.Error
> = core.serialization
    .union("errorName", {
        DiagnosisNotFoundHTTPError: core.serialization.object({
            content: DiagnosisNotFoundError,
        }),
    })
    .transform<CandidApi.diagnoses.delete.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "DiagnosisNotFoundHTTPError":
                    return CandidApi.diagnoses.delete.Error.diagnosisNotFoundHttpError(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    type Raw = Error.DiagnosisNotFoundHttpError;

    interface DiagnosisNotFoundHttpError {
        errorName: "DiagnosisNotFoundHTTPError";
        content: DiagnosisNotFoundError.Raw;
    }
}