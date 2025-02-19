/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";
import * as core from "../../../../../../core";

export type Error =
    | CandidApi.nonInsurancePayerRefunds.v1.update.Error.EntityNotFoundError
    | CandidApi.nonInsurancePayerRefunds.v1.update.Error.UnprocessableEntityError
    | CandidApi.nonInsurancePayerRefunds.v1.update.Error._Unknown;

export namespace Error {
    export interface EntityNotFoundError extends _Utils {
        errorName: "EntityNotFoundError";
        content: CandidApi.EntityNotFoundErrorMessage;
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
        _visit: <_Result>(visitor: CandidApi.nonInsurancePayerRefunds.v1.update.Error._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        entityNotFoundError: (value: CandidApi.EntityNotFoundErrorMessage) => _Result;
        unprocessableEntityError: (value: CandidApi.UnprocessableEntityErrorMessage) => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    entityNotFoundError: (
        value: CandidApi.EntityNotFoundErrorMessage,
    ): CandidApi.nonInsurancePayerRefunds.v1.update.Error.EntityNotFoundError => {
        return {
            content: value,
            errorName: "EntityNotFoundError",
            _visit: function <_Result>(
                this: CandidApi.nonInsurancePayerRefunds.v1.update.Error.EntityNotFoundError,
                visitor: CandidApi.nonInsurancePayerRefunds.v1.update.Error._Visitor<_Result>,
            ) {
                return CandidApi.nonInsurancePayerRefunds.v1.update.Error._visit(this, visitor);
            },
        };
    },

    unprocessableEntityError: (
        value: CandidApi.UnprocessableEntityErrorMessage,
    ): CandidApi.nonInsurancePayerRefunds.v1.update.Error.UnprocessableEntityError => {
        return {
            content: value,
            errorName: "UnprocessableEntityError",
            _visit: function <_Result>(
                this: CandidApi.nonInsurancePayerRefunds.v1.update.Error.UnprocessableEntityError,
                visitor: CandidApi.nonInsurancePayerRefunds.v1.update.Error._Visitor<_Result>,
            ) {
                return CandidApi.nonInsurancePayerRefunds.v1.update.Error._visit(this, visitor);
            },
        };
    },

    _unknown: (fetcherError: core.Fetcher.Error): CandidApi.nonInsurancePayerRefunds.v1.update.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: CandidApi.nonInsurancePayerRefunds.v1.update.Error._Unknown,
                visitor: CandidApi.nonInsurancePayerRefunds.v1.update.Error._Visitor<_Result>,
            ) {
                return CandidApi.nonInsurancePayerRefunds.v1.update.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.nonInsurancePayerRefunds.v1.update.Error,
        visitor: CandidApi.nonInsurancePayerRefunds.v1.update.Error._Visitor<_Result>,
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
