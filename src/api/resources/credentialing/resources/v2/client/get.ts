/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";
import * as core from "../../../../../../core";

export type Error =
    | CandidApi.credentialing.v2.get.Error.EntityNotFoundError
    | CandidApi.credentialing.v2.get.Error.UnauthorizedError
    | CandidApi.credentialing.v2.get.Error._Unknown;

export declare namespace Error {
    interface EntityNotFoundError extends _Utils {
        errorName: "EntityNotFoundError";
        content: CandidApi.EntityNotFoundErrorMessage;
    }

    interface UnauthorizedError extends _Utils {
        errorName: "UnauthorizedError";
        content: CandidApi.UnauthorizedErrorMessage;
    }

    interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    interface _Utils {
        _visit: <_Result>(visitor: CandidApi.credentialing.v2.get.Error._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        entityNotFoundError: (value: CandidApi.EntityNotFoundErrorMessage) => _Result;
        unauthorizedError: (value: CandidApi.UnauthorizedErrorMessage) => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    entityNotFoundError: (
        value: CandidApi.EntityNotFoundErrorMessage
    ): CandidApi.credentialing.v2.get.Error.EntityNotFoundError => {
        return {
            content: value,
            errorName: "EntityNotFoundError",
            _visit: function <_Result>(
                this: CandidApi.credentialing.v2.get.Error.EntityNotFoundError,
                visitor: CandidApi.credentialing.v2.get.Error._Visitor<_Result>
            ) {
                return CandidApi.credentialing.v2.get.Error._visit(this, visitor);
            },
        };
    },

    unauthorizedError: (
        value: CandidApi.UnauthorizedErrorMessage
    ): CandidApi.credentialing.v2.get.Error.UnauthorizedError => {
        return {
            content: value,
            errorName: "UnauthorizedError",
            _visit: function <_Result>(
                this: CandidApi.credentialing.v2.get.Error.UnauthorizedError,
                visitor: CandidApi.credentialing.v2.get.Error._Visitor<_Result>
            ) {
                return CandidApi.credentialing.v2.get.Error._visit(this, visitor);
            },
        };
    },

    _unknown: (fetcherError: core.Fetcher.Error): CandidApi.credentialing.v2.get.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: CandidApi.credentialing.v2.get.Error._Unknown,
                visitor: CandidApi.credentialing.v2.get.Error._Visitor<_Result>
            ) {
                return CandidApi.credentialing.v2.get.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.credentialing.v2.get.Error,
        visitor: CandidApi.credentialing.v2.get.Error._Visitor<_Result>
    ): _Result => {
        switch (value.errorName) {
            case "EntityNotFoundError":
                return visitor.entityNotFoundError(value.content);
            case "UnauthorizedError":
                return visitor.unauthorizedError(value.content);
            default:
                return visitor._other(value as any);
        }
    },
} as const;