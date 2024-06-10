/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";
import * as core from "../../../../../../core";

export type Error =
    | CandidApi.feeSchedules.v3.getRateHistory.Error.EntityNotFoundError
    | CandidApi.feeSchedules.v3.getRateHistory.Error._Unknown;

export declare namespace Error {
    interface EntityNotFoundError extends _Utils {
        errorName: "EntityNotFoundError";
        content: CandidApi.EntityNotFoundErrorMessage;
    }

    interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    interface _Utils {
        _visit: <_Result>(visitor: CandidApi.feeSchedules.v3.getRateHistory.Error._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        entityNotFoundError: (value: CandidApi.EntityNotFoundErrorMessage) => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    entityNotFoundError: (
        value: CandidApi.EntityNotFoundErrorMessage
    ): CandidApi.feeSchedules.v3.getRateHistory.Error.EntityNotFoundError => {
        return {
            content: value,
            errorName: "EntityNotFoundError",
            _visit: function <_Result>(
                this: CandidApi.feeSchedules.v3.getRateHistory.Error.EntityNotFoundError,
                visitor: CandidApi.feeSchedules.v3.getRateHistory.Error._Visitor<_Result>
            ) {
                return CandidApi.feeSchedules.v3.getRateHistory.Error._visit(this, visitor);
            },
        };
    },

    _unknown: (fetcherError: core.Fetcher.Error): CandidApi.feeSchedules.v3.getRateHistory.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: CandidApi.feeSchedules.v3.getRateHistory.Error._Unknown,
                visitor: CandidApi.feeSchedules.v3.getRateHistory.Error._Visitor<_Result>
            ) {
                return CandidApi.feeSchedules.v3.getRateHistory.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.feeSchedules.v3.getRateHistory.Error,
        visitor: CandidApi.feeSchedules.v3.getRateHistory.Error._Visitor<_Result>
    ): _Result => {
        switch (value.errorName) {
            case "EntityNotFoundError":
                return visitor.entityNotFoundError(value.content);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
