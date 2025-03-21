/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";
import * as core from "../../../../../../core";

export type Error = CandidApi.auth.v2.getToken.Error.TooManyRequestsError | CandidApi.auth.v2.getToken.Error._Unknown;

export namespace Error {
    export interface TooManyRequestsError extends _Utils {
        errorName: "TooManyRequestsError";
        content: CandidApi.auth.v2.TooManyRequestsErrorType;
    }

    export interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    export interface _Utils {
        _visit: <_Result>(visitor: CandidApi.auth.v2.getToken.Error._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        tooManyRequestsError: (value: CandidApi.auth.v2.TooManyRequestsErrorType) => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    tooManyRequestsError: (
        value: CandidApi.auth.v2.TooManyRequestsErrorType,
    ): CandidApi.auth.v2.getToken.Error.TooManyRequestsError => {
        return {
            content: value,
            errorName: "TooManyRequestsError",
            _visit: function <_Result>(
                this: CandidApi.auth.v2.getToken.Error.TooManyRequestsError,
                visitor: CandidApi.auth.v2.getToken.Error._Visitor<_Result>,
            ) {
                return CandidApi.auth.v2.getToken.Error._visit(this, visitor);
            },
        };
    },

    _unknown: (fetcherError: core.Fetcher.Error): CandidApi.auth.v2.getToken.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: CandidApi.auth.v2.getToken.Error._Unknown,
                visitor: CandidApi.auth.v2.getToken.Error._Visitor<_Result>,
            ) {
                return CandidApi.auth.v2.getToken.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.auth.v2.getToken.Error,
        visitor: CandidApi.auth.v2.getToken.Error._Visitor<_Result>,
    ): _Result => {
        switch (value.errorName) {
            case "TooManyRequestsError":
                return visitor.tooManyRequestsError(value.content);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
