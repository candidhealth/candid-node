/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";
import * as core from "../../../../../../core";

export type Error =
    | CandidApi.patientPayments.v4.create.Error.EntityNotFoundError
    | CandidApi.patientPayments.v4.create.Error.UnauthorizedError
    | CandidApi.patientPayments.v4.create.Error.UnprocessableEntityError
    | CandidApi.patientPayments.v4.create.Error._Unknown;

export declare namespace Error {
    interface EntityNotFoundError extends _Utils {
        errorName: "EntityNotFoundError";
        content: CandidApi.EntityNotFoundErrorMessage;
    }

    interface UnauthorizedError extends _Utils {
        errorName: "UnauthorizedError";
        content: CandidApi.UnauthorizedErrorMessage;
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
        _visit: <_Result>(visitor: CandidApi.patientPayments.v4.create.Error._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        entityNotFoundError: (value: CandidApi.EntityNotFoundErrorMessage) => _Result;
        unauthorizedError: (value: CandidApi.UnauthorizedErrorMessage) => _Result;
        unprocessableEntityError: (value: CandidApi.UnprocessableEntityErrorMessage) => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    entityNotFoundError: (
        value: CandidApi.EntityNotFoundErrorMessage
    ): CandidApi.patientPayments.v4.create.Error.EntityNotFoundError => {
        return {
            content: value,
            errorName: "EntityNotFoundError",
            _visit: function <_Result>(
                this: CandidApi.patientPayments.v4.create.Error.EntityNotFoundError,
                visitor: CandidApi.patientPayments.v4.create.Error._Visitor<_Result>
            ) {
                return CandidApi.patientPayments.v4.create.Error._visit(this, visitor);
            },
        };
    },

    unauthorizedError: (
        value: CandidApi.UnauthorizedErrorMessage
    ): CandidApi.patientPayments.v4.create.Error.UnauthorizedError => {
        return {
            content: value,
            errorName: "UnauthorizedError",
            _visit: function <_Result>(
                this: CandidApi.patientPayments.v4.create.Error.UnauthorizedError,
                visitor: CandidApi.patientPayments.v4.create.Error._Visitor<_Result>
            ) {
                return CandidApi.patientPayments.v4.create.Error._visit(this, visitor);
            },
        };
    },

    unprocessableEntityError: (
        value: CandidApi.UnprocessableEntityErrorMessage
    ): CandidApi.patientPayments.v4.create.Error.UnprocessableEntityError => {
        return {
            content: value,
            errorName: "UnprocessableEntityError",
            _visit: function <_Result>(
                this: CandidApi.patientPayments.v4.create.Error.UnprocessableEntityError,
                visitor: CandidApi.patientPayments.v4.create.Error._Visitor<_Result>
            ) {
                return CandidApi.patientPayments.v4.create.Error._visit(this, visitor);
            },
        };
    },

    _unknown: (fetcherError: core.Fetcher.Error): CandidApi.patientPayments.v4.create.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: CandidApi.patientPayments.v4.create.Error._Unknown,
                visitor: CandidApi.patientPayments.v4.create.Error._Visitor<_Result>
            ) {
                return CandidApi.patientPayments.v4.create.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.patientPayments.v4.create.Error,
        visitor: CandidApi.patientPayments.v4.create.Error._Visitor<_Result>
    ): _Result => {
        switch (value.errorName) {
            case "EntityNotFoundError":
                return visitor.entityNotFoundError(value.content);
            case "UnauthorizedError":
                return visitor.unauthorizedError(value.content);
            case "UnprocessableEntityError":
                return visitor.unprocessableEntityError(value.content);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
