/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";
import * as core from "../../../../../../core";

export type Error =
    | CandidApi.importInvoice.v1.importInvoice.Error.UnprocessableEntityError
    | CandidApi.importInvoice.v1.importInvoice.Error.EntityConflictError
    | CandidApi.importInvoice.v1.importInvoice.Error._Unknown;

export namespace Error {
    export interface UnprocessableEntityError extends _Utils {
        errorName: "UnprocessableEntityError";
        content: CandidApi.UnprocessableEntityErrorMessage;
    }

    export interface EntityConflictError extends _Utils {
        errorName: "EntityConflictError";
        content: CandidApi.EntityConflictErrorMessage;
    }

    export interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    export interface _Utils {
        _visit: <_Result>(visitor: CandidApi.importInvoice.v1.importInvoice.Error._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        unprocessableEntityError: (value: CandidApi.UnprocessableEntityErrorMessage) => _Result;
        entityConflictError: (value: CandidApi.EntityConflictErrorMessage) => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    unprocessableEntityError: (
        value: CandidApi.UnprocessableEntityErrorMessage,
    ): CandidApi.importInvoice.v1.importInvoice.Error.UnprocessableEntityError => {
        return {
            content: value,
            errorName: "UnprocessableEntityError",
            _visit: function <_Result>(
                this: CandidApi.importInvoice.v1.importInvoice.Error.UnprocessableEntityError,
                visitor: CandidApi.importInvoice.v1.importInvoice.Error._Visitor<_Result>,
            ) {
                return CandidApi.importInvoice.v1.importInvoice.Error._visit(this, visitor);
            },
        };
    },

    entityConflictError: (
        value: CandidApi.EntityConflictErrorMessage,
    ): CandidApi.importInvoice.v1.importInvoice.Error.EntityConflictError => {
        return {
            content: value,
            errorName: "EntityConflictError",
            _visit: function <_Result>(
                this: CandidApi.importInvoice.v1.importInvoice.Error.EntityConflictError,
                visitor: CandidApi.importInvoice.v1.importInvoice.Error._Visitor<_Result>,
            ) {
                return CandidApi.importInvoice.v1.importInvoice.Error._visit(this, visitor);
            },
        };
    },

    _unknown: (fetcherError: core.Fetcher.Error): CandidApi.importInvoice.v1.importInvoice.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: CandidApi.importInvoice.v1.importInvoice.Error._Unknown,
                visitor: CandidApi.importInvoice.v1.importInvoice.Error._Visitor<_Result>,
            ) {
                return CandidApi.importInvoice.v1.importInvoice.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.importInvoice.v1.importInvoice.Error,
        visitor: CandidApi.importInvoice.v1.importInvoice.Error._Visitor<_Result>,
    ): _Result => {
        switch (value.errorName) {
            case "UnprocessableEntityError":
                return visitor.unprocessableEntityError(value.content);
            case "EntityConflictError":
                return visitor.entityConflictError(value.content);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
