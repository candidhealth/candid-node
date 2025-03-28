/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";
import * as core from "../../../../../../core";

export type Error =
    | CandidApi.credentialing.v2.getAll.Error.UnauthorizedError
    | CandidApi.credentialing.v2.getAll.Error.UnprocessableEntityError
    | CandidApi.credentialing.v2.getAll.Error._Unknown;

export namespace Error {
    export interface UnauthorizedError extends _Utils {
        errorName: "UnauthorizedError";
        content: CandidApi.UnauthorizedErrorMessage;
    }

    export interface UnprocessableEntityError extends _Utils {
        errorName: "UnprocessableEntityError";
        content: CandidApi.UnprocessableEntityErrorMessage;
    }

    export interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    export interface _Utils {
        _visit: <_Result>(visitor: CandidApi.credentialing.v2.getAll.Error._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        unauthorizedError: (value: CandidApi.UnauthorizedErrorMessage) => _Result;
        unprocessableEntityError: (value: CandidApi.UnprocessableEntityErrorMessage) => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    unauthorizedError: (
        value: CandidApi.UnauthorizedErrorMessage,
    ): CandidApi.credentialing.v2.getAll.Error.UnauthorizedError => {
        return {
            content: value,
            errorName: "UnauthorizedError",
            _visit: function <_Result>(
                this: CandidApi.credentialing.v2.getAll.Error.UnauthorizedError,
                visitor: CandidApi.credentialing.v2.getAll.Error._Visitor<_Result>,
            ) {
                return CandidApi.credentialing.v2.getAll.Error._visit(this, visitor);
            },
        };
    },

    unprocessableEntityError: (
        value: CandidApi.UnprocessableEntityErrorMessage,
    ): CandidApi.credentialing.v2.getAll.Error.UnprocessableEntityError => {
        return {
            content: value,
            errorName: "UnprocessableEntityError",
            _visit: function <_Result>(
                this: CandidApi.credentialing.v2.getAll.Error.UnprocessableEntityError,
                visitor: CandidApi.credentialing.v2.getAll.Error._Visitor<_Result>,
            ) {
                return CandidApi.credentialing.v2.getAll.Error._visit(this, visitor);
            },
        };
    },

    _unknown: (fetcherError: core.Fetcher.Error): CandidApi.credentialing.v2.getAll.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: CandidApi.credentialing.v2.getAll.Error._Unknown,
                visitor: CandidApi.credentialing.v2.getAll.Error._Visitor<_Result>,
            ) {
                return CandidApi.credentialing.v2.getAll.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.credentialing.v2.getAll.Error,
        visitor: CandidApi.credentialing.v2.getAll.Error._Visitor<_Result>,
    ): _Result => {
        switch (value.errorName) {
            case "UnauthorizedError":
                return visitor.unauthorizedError(value.content);
            case "UnprocessableEntityError":
                return visitor.unprocessableEntityError(value.content);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
