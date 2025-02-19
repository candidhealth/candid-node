/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";
import * as core from "../../../../../../core";

export type Error =
    | CandidApi.billingNotes.v2.update.Error.EntityNotFoundError
    | CandidApi.billingNotes.v2.update.Error.OrganizationNotAuthorizedError
    | CandidApi.billingNotes.v2.update.Error.HttpRequestValidationError
    | CandidApi.billingNotes.v2.update.Error.UnauthorizedError
    | CandidApi.billingNotes.v2.update.Error._Unknown;

export namespace Error {
    export interface EntityNotFoundError extends _Utils {
        errorName: "EntityNotFoundError";
        content: CandidApi.EntityNotFoundErrorMessage;
    }

    export interface OrganizationNotAuthorizedError extends _Utils {
        errorName: "OrganizationNotAuthorizedError";
        content: CandidApi.OrganizationNotAuthorizedErrorMessage;
    }

    export interface HttpRequestValidationError extends _Utils {
        errorName: "HttpRequestValidationError";
        content: CandidApi.RequestValidationError;
    }

    export interface UnauthorizedError extends _Utils {
        errorName: "UnauthorizedError";
        content: CandidApi.UnauthorizedErrorMessage;
    }

    export interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    export interface _Utils {
        _visit: <_Result>(visitor: CandidApi.billingNotes.v2.update.Error._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        entityNotFoundError: (value: CandidApi.EntityNotFoundErrorMessage) => _Result;
        organizationNotAuthorizedError: (value: CandidApi.OrganizationNotAuthorizedErrorMessage) => _Result;
        httpRequestValidationError: (value: CandidApi.RequestValidationError) => _Result;
        unauthorizedError: (value: CandidApi.UnauthorizedErrorMessage) => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    entityNotFoundError: (
        value: CandidApi.EntityNotFoundErrorMessage,
    ): CandidApi.billingNotes.v2.update.Error.EntityNotFoundError => {
        return {
            content: value,
            errorName: "EntityNotFoundError",
            _visit: function <_Result>(
                this: CandidApi.billingNotes.v2.update.Error.EntityNotFoundError,
                visitor: CandidApi.billingNotes.v2.update.Error._Visitor<_Result>,
            ) {
                return CandidApi.billingNotes.v2.update.Error._visit(this, visitor);
            },
        };
    },

    organizationNotAuthorizedError: (
        value: CandidApi.OrganizationNotAuthorizedErrorMessage,
    ): CandidApi.billingNotes.v2.update.Error.OrganizationNotAuthorizedError => {
        return {
            content: value,
            errorName: "OrganizationNotAuthorizedError",
            _visit: function <_Result>(
                this: CandidApi.billingNotes.v2.update.Error.OrganizationNotAuthorizedError,
                visitor: CandidApi.billingNotes.v2.update.Error._Visitor<_Result>,
            ) {
                return CandidApi.billingNotes.v2.update.Error._visit(this, visitor);
            },
        };
    },

    httpRequestValidationError: (
        value: CandidApi.RequestValidationError,
    ): CandidApi.billingNotes.v2.update.Error.HttpRequestValidationError => {
        return {
            content: value,
            errorName: "HttpRequestValidationError",
            _visit: function <_Result>(
                this: CandidApi.billingNotes.v2.update.Error.HttpRequestValidationError,
                visitor: CandidApi.billingNotes.v2.update.Error._Visitor<_Result>,
            ) {
                return CandidApi.billingNotes.v2.update.Error._visit(this, visitor);
            },
        };
    },

    unauthorizedError: (
        value: CandidApi.UnauthorizedErrorMessage,
    ): CandidApi.billingNotes.v2.update.Error.UnauthorizedError => {
        return {
            content: value,
            errorName: "UnauthorizedError",
            _visit: function <_Result>(
                this: CandidApi.billingNotes.v2.update.Error.UnauthorizedError,
                visitor: CandidApi.billingNotes.v2.update.Error._Visitor<_Result>,
            ) {
                return CandidApi.billingNotes.v2.update.Error._visit(this, visitor);
            },
        };
    },

    _unknown: (fetcherError: core.Fetcher.Error): CandidApi.billingNotes.v2.update.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: CandidApi.billingNotes.v2.update.Error._Unknown,
                visitor: CandidApi.billingNotes.v2.update.Error._Visitor<_Result>,
            ) {
                return CandidApi.billingNotes.v2.update.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.billingNotes.v2.update.Error,
        visitor: CandidApi.billingNotes.v2.update.Error._Visitor<_Result>,
    ): _Result => {
        switch (value.errorName) {
            case "EntityNotFoundError":
                return visitor.entityNotFoundError(value.content);
            case "OrganizationNotAuthorizedError":
                return visitor.organizationNotAuthorizedError(value.content);
            case "HttpRequestValidationError":
                return visitor.httpRequestValidationError(value.content);
            case "UnauthorizedError":
                return visitor.unauthorizedError(value.content);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
