/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";
import * as core from "../../../../../../core";

export type Error =
    | CandidApi.nonInsurancePayerRefunds.v1.delete.Error.EntityNotFoundError
    | CandidApi.nonInsurancePayerRefunds.v1.delete.Error.UnprocessableEntityError
    | CandidApi.nonInsurancePayerRefunds.v1.delete.Error._Unknown;

export declare namespace Error {
    interface EntityNotFoundError extends _Utils {
        errorName: "EntityNotFoundError";
        content: CandidApi.EntityNotFoundErrorMessage;
    }

    interface UnprocessableEntityError extends _Utils {
        errorName: "UnprocessableEntityError";
        content: CandidApi.UnprocessableEntityErrorMessage;
    }

    interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    interface _Utils {
        _visit: <_Result>(visitor: CandidApi.nonInsurancePayerRefunds.v1.delete.Error._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        entityNotFoundError: (value: CandidApi.EntityNotFoundErrorMessage) => _Result;
        unprocessableEntityError: (value: CandidApi.UnprocessableEntityErrorMessage) => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    entityNotFoundError: (
        value: CandidApi.EntityNotFoundErrorMessage
    ): CandidApi.nonInsurancePayerRefunds.v1.delete.Error.EntityNotFoundError => {
        return {
            content: value,
            errorName: "EntityNotFoundError",
            _visit: function <_Result>(
                this: CandidApi.nonInsurancePayerRefunds.v1.delete.Error.EntityNotFoundError,
                visitor: CandidApi.nonInsurancePayerRefunds.v1.delete.Error._Visitor<_Result>
            ) {
                return CandidApi.nonInsurancePayerRefunds.v1.delete.Error._visit(this, visitor);
            },
        };
    },

    unprocessableEntityError: (
        value: CandidApi.UnprocessableEntityErrorMessage
    ): CandidApi.nonInsurancePayerRefunds.v1.delete.Error.UnprocessableEntityError => {
        return {
            content: value,
            errorName: "UnprocessableEntityError",
            _visit: function <_Result>(
                this: CandidApi.nonInsurancePayerRefunds.v1.delete.Error.UnprocessableEntityError,
                visitor: CandidApi.nonInsurancePayerRefunds.v1.delete.Error._Visitor<_Result>
            ) {
                return CandidApi.nonInsurancePayerRefunds.v1.delete.Error._visit(this, visitor);
            },
        };
    },

    _unknown: (fetcherError: core.Fetcher.Error): CandidApi.nonInsurancePayerRefunds.v1.delete.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: CandidApi.nonInsurancePayerRefunds.v1.delete.Error._Unknown,
                visitor: CandidApi.nonInsurancePayerRefunds.v1.delete.Error._Visitor<_Result>
            ) {
                return CandidApi.nonInsurancePayerRefunds.v1.delete.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.nonInsurancePayerRefunds.v1.delete.Error,
        visitor: CandidApi.nonInsurancePayerRefunds.v1.delete.Error._Visitor<_Result>
    ): _Result => {
        switch (value.errorName) {
            case "EntityNotFoundError":
                return visitor.entityNotFoundError(value.content);
            case "UnprocessableEntityError":
                return visitor.unprocessableEntityError(value.content);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
