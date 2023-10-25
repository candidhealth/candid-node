/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";
import * as core from "../../../../../../core";

export type Error =
    | CandidApi.organizationProviders.v3.update.Error.HttpRequestValidationError
    | CandidApi.organizationProviders.v3.update.Error.EntityNotFoundError
    | CandidApi.organizationProviders.v3.update.Error.UpdatesDisabledDueToExternalSystemIntegrationError
    | CandidApi.organizationProviders.v3.update.Error._Unknown;

export declare namespace Error {
    interface HttpRequestValidationError extends _Utils {
        errorName: "HttpRequestValidationError";
        content: CandidApi.RequestValidationError;
    }

    interface EntityNotFoundError extends _Utils {
        errorName: "EntityNotFoundError";
        content: CandidApi.EntityNotFoundErrorMessage;
    }

    interface UpdatesDisabledDueToExternalSystemIntegrationError extends _Utils {
        errorName: "UpdatesDisabledDueToExternalSystemIntegrationError";
        content: CandidApi.UpdatesDisabledDueToExternalSystemIntegrationErrorMessage;
    }

    interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    interface _Utils {
        _visit: <_Result>(visitor: CandidApi.organizationProviders.v3.update.Error._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        httpRequestValidationError: (value: CandidApi.RequestValidationError) => _Result;
        entityNotFoundError: (value: CandidApi.EntityNotFoundErrorMessage) => _Result;
        updatesDisabledDueToExternalSystemIntegrationError: (
            value: CandidApi.UpdatesDisabledDueToExternalSystemIntegrationErrorMessage
        ) => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    httpRequestValidationError: (
        value: CandidApi.RequestValidationError
    ): CandidApi.organizationProviders.v3.update.Error.HttpRequestValidationError => {
        return {
            content: value,
            errorName: "HttpRequestValidationError",
            _visit: function <_Result>(
                this: CandidApi.organizationProviders.v3.update.Error.HttpRequestValidationError,
                visitor: CandidApi.organizationProviders.v3.update.Error._Visitor<_Result>
            ) {
                return CandidApi.organizationProviders.v3.update.Error._visit(this, visitor);
            },
        };
    },

    entityNotFoundError: (
        value: CandidApi.EntityNotFoundErrorMessage
    ): CandidApi.organizationProviders.v3.update.Error.EntityNotFoundError => {
        return {
            content: value,
            errorName: "EntityNotFoundError",
            _visit: function <_Result>(
                this: CandidApi.organizationProviders.v3.update.Error.EntityNotFoundError,
                visitor: CandidApi.organizationProviders.v3.update.Error._Visitor<_Result>
            ) {
                return CandidApi.organizationProviders.v3.update.Error._visit(this, visitor);
            },
        };
    },

    updatesDisabledDueToExternalSystemIntegrationError: (
        value: CandidApi.UpdatesDisabledDueToExternalSystemIntegrationErrorMessage
    ): CandidApi.organizationProviders.v3.update.Error.UpdatesDisabledDueToExternalSystemIntegrationError => {
        return {
            content: value,
            errorName: "UpdatesDisabledDueToExternalSystemIntegrationError",
            _visit: function <_Result>(
                this: CandidApi.organizationProviders.v3.update.Error.UpdatesDisabledDueToExternalSystemIntegrationError,
                visitor: CandidApi.organizationProviders.v3.update.Error._Visitor<_Result>
            ) {
                return CandidApi.organizationProviders.v3.update.Error._visit(this, visitor);
            },
        };
    },

    _unknown: (fetcherError: core.Fetcher.Error): CandidApi.organizationProviders.v3.update.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: CandidApi.organizationProviders.v3.update.Error._Unknown,
                visitor: CandidApi.organizationProviders.v3.update.Error._Visitor<_Result>
            ) {
                return CandidApi.organizationProviders.v3.update.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.organizationProviders.v3.update.Error,
        visitor: CandidApi.organizationProviders.v3.update.Error._Visitor<_Result>
    ): _Result => {
        switch (value.errorName) {
            case "HttpRequestValidationError":
                return visitor.httpRequestValidationError(value.content);
            case "EntityNotFoundError":
                return visitor.entityNotFoundError(value.content);
            case "UpdatesDisabledDueToExternalSystemIntegrationError":
                return visitor.updatesDisabledDueToExternalSystemIntegrationError(value.content);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
