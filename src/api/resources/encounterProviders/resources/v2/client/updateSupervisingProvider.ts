/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";
import * as core from "../../../../../../core";

export type Error =
    /**
     * Cannot set first/last name without also unsetting organization_name. */
    | CandidApi.encounterProviders.v2.updateSupervisingProvider.Error.UnprocessableEntityError
    /**
     * The encounter could not be found or has no supervising provider. */
    | CandidApi.encounterProviders.v2.updateSupervisingProvider.Error.EntityNotFoundError
    | CandidApi.encounterProviders.v2.updateSupervisingProvider.Error._Unknown;

export declare namespace Error {
    interface UnprocessableEntityError extends _Utils {
        errorName: "UnprocessableEntityError";
        content: CandidApi.UnprocessableEntityErrorMessage;
    }

    interface EntityNotFoundError extends _Utils {
        errorName: "EntityNotFoundError";
        content: CandidApi.EntityNotFoundErrorMessage;
    }

    interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    interface _Utils {
        _visit: <_Result>(
            visitor: CandidApi.encounterProviders.v2.updateSupervisingProvider.Error._Visitor<_Result>
        ) => _Result;
    }

    interface _Visitor<_Result> {
        unprocessableEntityError: (value: CandidApi.UnprocessableEntityErrorMessage) => _Result;
        entityNotFoundError: (value: CandidApi.EntityNotFoundErrorMessage) => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    unprocessableEntityError: (
        value: CandidApi.UnprocessableEntityErrorMessage
    ): CandidApi.encounterProviders.v2.updateSupervisingProvider.Error.UnprocessableEntityError => {
        return {
            content: value,
            errorName: "UnprocessableEntityError",
            _visit: function <_Result>(
                this: CandidApi.encounterProviders.v2.updateSupervisingProvider.Error.UnprocessableEntityError,
                visitor: CandidApi.encounterProviders.v2.updateSupervisingProvider.Error._Visitor<_Result>
            ) {
                return CandidApi.encounterProviders.v2.updateSupervisingProvider.Error._visit(this, visitor);
            },
        };
    },

    entityNotFoundError: (
        value: CandidApi.EntityNotFoundErrorMessage
    ): CandidApi.encounterProviders.v2.updateSupervisingProvider.Error.EntityNotFoundError => {
        return {
            content: value,
            errorName: "EntityNotFoundError",
            _visit: function <_Result>(
                this: CandidApi.encounterProviders.v2.updateSupervisingProvider.Error.EntityNotFoundError,
                visitor: CandidApi.encounterProviders.v2.updateSupervisingProvider.Error._Visitor<_Result>
            ) {
                return CandidApi.encounterProviders.v2.updateSupervisingProvider.Error._visit(this, visitor);
            },
        };
    },

    _unknown: (
        fetcherError: core.Fetcher.Error
    ): CandidApi.encounterProviders.v2.updateSupervisingProvider.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: CandidApi.encounterProviders.v2.updateSupervisingProvider.Error._Unknown,
                visitor: CandidApi.encounterProviders.v2.updateSupervisingProvider.Error._Visitor<_Result>
            ) {
                return CandidApi.encounterProviders.v2.updateSupervisingProvider.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.encounterProviders.v2.updateSupervisingProvider.Error,
        visitor: CandidApi.encounterProviders.v2.updateSupervisingProvider.Error._Visitor<_Result>
    ): _Result => {
        switch (value.errorName) {
            case "UnprocessableEntityError":
                return visitor.unprocessableEntityError(value.content);
            case "EntityNotFoundError":
                return visitor.entityNotFoundError(value.content);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
