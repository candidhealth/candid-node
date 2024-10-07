/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../index";
import * as core from "../../../../core";

export type Error =
    | CandidApi.diagnoses.update.Error.DiagnosisNotFoundHttpError
    | CandidApi.diagnoses.update.Error._Unknown;

export declare namespace Error {
    interface DiagnosisNotFoundHttpError extends _Utils {
        errorName: "DiagnosisNotFoundHTTPError";
        content: CandidApi.DiagnosisNotFoundError;
    }

    interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    interface _Utils {
        _visit: <_Result>(visitor: CandidApi.diagnoses.update.Error._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        diagnosisNotFoundHttpError: (value: CandidApi.DiagnosisNotFoundError) => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    diagnosisNotFoundHttpError: (
        value: CandidApi.DiagnosisNotFoundError
    ): CandidApi.diagnoses.update.Error.DiagnosisNotFoundHttpError => {
        return {
            content: value,
            errorName: "DiagnosisNotFoundHTTPError",
            _visit: function <_Result>(
                this: CandidApi.diagnoses.update.Error.DiagnosisNotFoundHttpError,
                visitor: CandidApi.diagnoses.update.Error._Visitor<_Result>
            ) {
                return CandidApi.diagnoses.update.Error._visit(this, visitor);
            },
        };
    },

    _unknown: (fetcherError: core.Fetcher.Error): CandidApi.diagnoses.update.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: CandidApi.diagnoses.update.Error._Unknown,
                visitor: CandidApi.diagnoses.update.Error._Visitor<_Result>
            ) {
                return CandidApi.diagnoses.update.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.diagnoses.update.Error,
        visitor: CandidApi.diagnoses.update.Error._Visitor<_Result>
    ): _Result => {
        switch (value.errorName) {
            case "DiagnosisNotFoundHTTPError":
                return visitor.diagnosisNotFoundHttpError(value.content);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
