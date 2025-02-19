/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";
import * as core from "../../../../../../core";

export type Error =
    | CandidApi.encounters.v4.update.Error.EncounterExternalIdUniquenessError
    | CandidApi.encounters.v4.update.Error.EntityNotFoundError
    | CandidApi.encounters.v4.update.Error.UnauthorizedError
    | CandidApi.encounters.v4.update.Error.HttpRequestValidationsError
    | CandidApi.encounters.v4.update.Error.SchemaInstanceValidationHttpFailure
    | CandidApi.encounters.v4.update.Error.UnprocessableEntityError
    | CandidApi.encounters.v4.update.Error.InvalidTagNamesError
    | CandidApi.encounters.v4.update.Error.PayerPlanGroupPayerDoesNotMatchInsuranceCardHttpError
    | CandidApi.encounters.v4.update.Error._Unknown;

export namespace Error {
    export interface EncounterExternalIdUniquenessError extends _Utils {
        errorName: "EncounterExternalIdUniquenessError";
        content: CandidApi.encounters.v4.EncounterExternalIdUniquenessErrorType;
    }

    export interface EntityNotFoundError extends _Utils {
        errorName: "EntityNotFoundError";
        content: CandidApi.EntityNotFoundErrorMessage;
    }

    export interface UnauthorizedError extends _Utils {
        errorName: "UnauthorizedError";
        content: CandidApi.UnauthorizedErrorMessage;
    }

    export interface HttpRequestValidationsError extends _Utils {
        errorName: "HttpRequestValidationsError";
        content: CandidApi.RequestValidationError[];
    }

    export interface SchemaInstanceValidationHttpFailure extends _Utils {
        errorName: "SchemaInstanceValidationHttpFailure";
        content: CandidApi.encounters.v4.SchemaInstanceValidationFailure;
    }

    export interface UnprocessableEntityError extends _Utils {
        errorName: "UnprocessableEntityError";
        content: CandidApi.UnprocessableEntityErrorMessage;
    }

    export interface InvalidTagNamesError extends _Utils {
        errorName: "InvalidTagNamesError";
        content: CandidApi.encounters.v4.InvalidTagNamesErrorType;
    }

    export interface PayerPlanGroupPayerDoesNotMatchInsuranceCardHttpError extends _Utils {
        errorName: "PayerPlanGroupPayerDoesNotMatchInsuranceCardHttpError";
        content: CandidApi.encounters.v4.PayerPlanGroupPayerDoesNotMatchInsuranceCardError;
    }

    export interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    export interface _Utils {
        _visit: <_Result>(visitor: CandidApi.encounters.v4.update.Error._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        encounterExternalIdUniquenessError: (
            value: CandidApi.encounters.v4.EncounterExternalIdUniquenessErrorType,
        ) => _Result;
        entityNotFoundError: (value: CandidApi.EntityNotFoundErrorMessage) => _Result;
        unauthorizedError: (value: CandidApi.UnauthorizedErrorMessage) => _Result;
        httpRequestValidationsError: (value: CandidApi.RequestValidationError[]) => _Result;
        schemaInstanceValidationHttpFailure: (
            value: CandidApi.encounters.v4.SchemaInstanceValidationFailure,
        ) => _Result;
        unprocessableEntityError: (value: CandidApi.UnprocessableEntityErrorMessage) => _Result;
        invalidTagNamesError: (value: CandidApi.encounters.v4.InvalidTagNamesErrorType) => _Result;
        payerPlanGroupPayerDoesNotMatchInsuranceCardHttpError: (
            value: CandidApi.encounters.v4.PayerPlanGroupPayerDoesNotMatchInsuranceCardError,
        ) => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    encounterExternalIdUniquenessError: (
        value: CandidApi.encounters.v4.EncounterExternalIdUniquenessErrorType,
    ): CandidApi.encounters.v4.update.Error.EncounterExternalIdUniquenessError => {
        return {
            content: value,
            errorName: "EncounterExternalIdUniquenessError",
            _visit: function <_Result>(
                this: CandidApi.encounters.v4.update.Error.EncounterExternalIdUniquenessError,
                visitor: CandidApi.encounters.v4.update.Error._Visitor<_Result>,
            ) {
                return CandidApi.encounters.v4.update.Error._visit(this, visitor);
            },
        };
    },

    entityNotFoundError: (
        value: CandidApi.EntityNotFoundErrorMessage,
    ): CandidApi.encounters.v4.update.Error.EntityNotFoundError => {
        return {
            content: value,
            errorName: "EntityNotFoundError",
            _visit: function <_Result>(
                this: CandidApi.encounters.v4.update.Error.EntityNotFoundError,
                visitor: CandidApi.encounters.v4.update.Error._Visitor<_Result>,
            ) {
                return CandidApi.encounters.v4.update.Error._visit(this, visitor);
            },
        };
    },

    unauthorizedError: (
        value: CandidApi.UnauthorizedErrorMessage,
    ): CandidApi.encounters.v4.update.Error.UnauthorizedError => {
        return {
            content: value,
            errorName: "UnauthorizedError",
            _visit: function <_Result>(
                this: CandidApi.encounters.v4.update.Error.UnauthorizedError,
                visitor: CandidApi.encounters.v4.update.Error._Visitor<_Result>,
            ) {
                return CandidApi.encounters.v4.update.Error._visit(this, visitor);
            },
        };
    },

    httpRequestValidationsError: (
        value: CandidApi.RequestValidationError[],
    ): CandidApi.encounters.v4.update.Error.HttpRequestValidationsError => {
        return {
            content: value,
            errorName: "HttpRequestValidationsError",
            _visit: function <_Result>(
                this: CandidApi.encounters.v4.update.Error.HttpRequestValidationsError,
                visitor: CandidApi.encounters.v4.update.Error._Visitor<_Result>,
            ) {
                return CandidApi.encounters.v4.update.Error._visit(this, visitor);
            },
        };
    },

    schemaInstanceValidationHttpFailure: (
        value: CandidApi.encounters.v4.SchemaInstanceValidationFailure,
    ): CandidApi.encounters.v4.update.Error.SchemaInstanceValidationHttpFailure => {
        return {
            content: value,
            errorName: "SchemaInstanceValidationHttpFailure",
            _visit: function <_Result>(
                this: CandidApi.encounters.v4.update.Error.SchemaInstanceValidationHttpFailure,
                visitor: CandidApi.encounters.v4.update.Error._Visitor<_Result>,
            ) {
                return CandidApi.encounters.v4.update.Error._visit(this, visitor);
            },
        };
    },

    unprocessableEntityError: (
        value: CandidApi.UnprocessableEntityErrorMessage,
    ): CandidApi.encounters.v4.update.Error.UnprocessableEntityError => {
        return {
            content: value,
            errorName: "UnprocessableEntityError",
            _visit: function <_Result>(
                this: CandidApi.encounters.v4.update.Error.UnprocessableEntityError,
                visitor: CandidApi.encounters.v4.update.Error._Visitor<_Result>,
            ) {
                return CandidApi.encounters.v4.update.Error._visit(this, visitor);
            },
        };
    },

    invalidTagNamesError: (
        value: CandidApi.encounters.v4.InvalidTagNamesErrorType,
    ): CandidApi.encounters.v4.update.Error.InvalidTagNamesError => {
        return {
            content: value,
            errorName: "InvalidTagNamesError",
            _visit: function <_Result>(
                this: CandidApi.encounters.v4.update.Error.InvalidTagNamesError,
                visitor: CandidApi.encounters.v4.update.Error._Visitor<_Result>,
            ) {
                return CandidApi.encounters.v4.update.Error._visit(this, visitor);
            },
        };
    },

    payerPlanGroupPayerDoesNotMatchInsuranceCardHttpError: (
        value: CandidApi.encounters.v4.PayerPlanGroupPayerDoesNotMatchInsuranceCardError,
    ): CandidApi.encounters.v4.update.Error.PayerPlanGroupPayerDoesNotMatchInsuranceCardHttpError => {
        return {
            content: value,
            errorName: "PayerPlanGroupPayerDoesNotMatchInsuranceCardHttpError",
            _visit: function <_Result>(
                this: CandidApi.encounters.v4.update.Error.PayerPlanGroupPayerDoesNotMatchInsuranceCardHttpError,
                visitor: CandidApi.encounters.v4.update.Error._Visitor<_Result>,
            ) {
                return CandidApi.encounters.v4.update.Error._visit(this, visitor);
            },
        };
    },

    _unknown: (fetcherError: core.Fetcher.Error): CandidApi.encounters.v4.update.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: CandidApi.encounters.v4.update.Error._Unknown,
                visitor: CandidApi.encounters.v4.update.Error._Visitor<_Result>,
            ) {
                return CandidApi.encounters.v4.update.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.encounters.v4.update.Error,
        visitor: CandidApi.encounters.v4.update.Error._Visitor<_Result>,
    ): _Result => {
        switch (value.errorName) {
            case "EncounterExternalIdUniquenessError":
                return visitor.encounterExternalIdUniquenessError(value.content);
            case "EntityNotFoundError":
                return visitor.entityNotFoundError(value.content);
            case "UnauthorizedError":
                return visitor.unauthorizedError(value.content);
            case "HttpRequestValidationsError":
                return visitor.httpRequestValidationsError(value.content);
            case "SchemaInstanceValidationHttpFailure":
                return visitor.schemaInstanceValidationHttpFailure(value.content);
            case "UnprocessableEntityError":
                return visitor.unprocessableEntityError(value.content);
            case "InvalidTagNamesError":
                return visitor.invalidTagNamesError(value.content);
            case "PayerPlanGroupPayerDoesNotMatchInsuranceCardHttpError":
                return visitor.payerPlanGroupPayerDoesNotMatchInsuranceCardHttpError(value.content);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
