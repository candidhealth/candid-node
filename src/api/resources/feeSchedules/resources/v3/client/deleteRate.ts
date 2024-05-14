/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";
import * as core from "../../../../../../core";

export type Error =
    | CandidApi.feeSchedules.v3.deleteRate.Error.EntityNotFoundError
    | CandidApi.feeSchedules.v3.deleteRate.Error.EntityConflictError
    | CandidApi.feeSchedules.v3.deleteRate.Error._Unknown;

export declare namespace Error {
    interface EntityNotFoundError extends _Utils {
        errorName: "EntityNotFoundError";
        content: CandidApi.EntityNotFoundErrorMessage;
    }

    interface EntityConflictError extends _Utils {
        errorName: "EntityConflictError";
        content: CandidApi.EntityConflictErrorMessage;
    }

    interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    interface _Utils {
        _visit: <_Result>(visitor: CandidApi.feeSchedules.v3.deleteRate.Error._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        entityNotFoundError: (value: CandidApi.EntityNotFoundErrorMessage) => _Result;
        entityConflictError: (value: CandidApi.EntityConflictErrorMessage) => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    entityNotFoundError: (
        value: CandidApi.EntityNotFoundErrorMessage
    ): CandidApi.feeSchedules.v3.deleteRate.Error.EntityNotFoundError => {
        return {
            content: value,
            errorName: "EntityNotFoundError",
            _visit: function <_Result>(
                this: CandidApi.feeSchedules.v3.deleteRate.Error.EntityNotFoundError,
                visitor: CandidApi.feeSchedules.v3.deleteRate.Error._Visitor<_Result>
            ) {
                return CandidApi.feeSchedules.v3.deleteRate.Error._visit(this, visitor);
            },
        };
    },

    entityConflictError: (
        value: CandidApi.EntityConflictErrorMessage
    ): CandidApi.feeSchedules.v3.deleteRate.Error.EntityConflictError => {
        return {
            content: value,
            errorName: "EntityConflictError",
            _visit: function <_Result>(
                this: CandidApi.feeSchedules.v3.deleteRate.Error.EntityConflictError,
                visitor: CandidApi.feeSchedules.v3.deleteRate.Error._Visitor<_Result>
            ) {
                return CandidApi.feeSchedules.v3.deleteRate.Error._visit(this, visitor);
            },
        };
    },

    _unknown: (fetcherError: core.Fetcher.Error): CandidApi.feeSchedules.v3.deleteRate.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: CandidApi.feeSchedules.v3.deleteRate.Error._Unknown,
                visitor: CandidApi.feeSchedules.v3.deleteRate.Error._Visitor<_Result>
            ) {
                return CandidApi.feeSchedules.v3.deleteRate.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.feeSchedules.v3.deleteRate.Error,
        visitor: CandidApi.feeSchedules.v3.deleteRate.Error._Visitor<_Result>
    ): _Result => {
        switch (value.errorName) {
            case "EntityNotFoundError":
                return visitor.entityNotFoundError(value.content);
            case "EntityConflictError":
                return visitor.entityConflictError(value.content);
            default:
                return visitor._other(value as any);
        }
    },
} as const;