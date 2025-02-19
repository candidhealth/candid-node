/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";
import * as core from "../../../../../../core";

export type Error =
    | CandidApi.tasks.v3.update.Error.EntityNotFoundError
    | CandidApi.tasks.v3.update.Error.UnauthorizedError
    | CandidApi.tasks.v3.update.Error.TaskUpdatedToDeprecatedStatusError
    | CandidApi.tasks.v3.update.Error._Unknown;

export namespace Error {
    export interface EntityNotFoundError extends _Utils {
        errorName: "EntityNotFoundError";
        content: CandidApi.EntityNotFoundErrorMessage;
    }

    export interface UnauthorizedError extends _Utils {
        errorName: "UnauthorizedError";
        content: CandidApi.UnauthorizedErrorMessage;
    }

    export interface TaskUpdatedToDeprecatedStatusError extends _Utils {
        errorName: "TaskUpdatedToDeprecatedStatusError";
        content: CandidApi.tasks.v3.TaskUpdatedToDeprecatedStatusErrorType;
    }

    export interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    export interface _Utils {
        _visit: <_Result>(visitor: CandidApi.tasks.v3.update.Error._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        entityNotFoundError: (value: CandidApi.EntityNotFoundErrorMessage) => _Result;
        unauthorizedError: (value: CandidApi.UnauthorizedErrorMessage) => _Result;
        taskUpdatedToDeprecatedStatusError: (
            value: CandidApi.tasks.v3.TaskUpdatedToDeprecatedStatusErrorType,
        ) => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    entityNotFoundError: (
        value: CandidApi.EntityNotFoundErrorMessage,
    ): CandidApi.tasks.v3.update.Error.EntityNotFoundError => {
        return {
            content: value,
            errorName: "EntityNotFoundError",
            _visit: function <_Result>(
                this: CandidApi.tasks.v3.update.Error.EntityNotFoundError,
                visitor: CandidApi.tasks.v3.update.Error._Visitor<_Result>,
            ) {
                return CandidApi.tasks.v3.update.Error._visit(this, visitor);
            },
        };
    },

    unauthorizedError: (
        value: CandidApi.UnauthorizedErrorMessage,
    ): CandidApi.tasks.v3.update.Error.UnauthorizedError => {
        return {
            content: value,
            errorName: "UnauthorizedError",
            _visit: function <_Result>(
                this: CandidApi.tasks.v3.update.Error.UnauthorizedError,
                visitor: CandidApi.tasks.v3.update.Error._Visitor<_Result>,
            ) {
                return CandidApi.tasks.v3.update.Error._visit(this, visitor);
            },
        };
    },

    taskUpdatedToDeprecatedStatusError: (
        value: CandidApi.tasks.v3.TaskUpdatedToDeprecatedStatusErrorType,
    ): CandidApi.tasks.v3.update.Error.TaskUpdatedToDeprecatedStatusError => {
        return {
            content: value,
            errorName: "TaskUpdatedToDeprecatedStatusError",
            _visit: function <_Result>(
                this: CandidApi.tasks.v3.update.Error.TaskUpdatedToDeprecatedStatusError,
                visitor: CandidApi.tasks.v3.update.Error._Visitor<_Result>,
            ) {
                return CandidApi.tasks.v3.update.Error._visit(this, visitor);
            },
        };
    },

    _unknown: (fetcherError: core.Fetcher.Error): CandidApi.tasks.v3.update.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: CandidApi.tasks.v3.update.Error._Unknown,
                visitor: CandidApi.tasks.v3.update.Error._Visitor<_Result>,
            ) {
                return CandidApi.tasks.v3.update.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.tasks.v3.update.Error,
        visitor: CandidApi.tasks.v3.update.Error._Visitor<_Result>,
    ): _Result => {
        switch (value.errorName) {
            case "EntityNotFoundError":
                return visitor.entityNotFoundError(value.content);
            case "UnauthorizedError":
                return visitor.unauthorizedError(value.content);
            case "TaskUpdatedToDeprecatedStatusError":
                return visitor.taskUpdatedToDeprecatedStatusError(value.content);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
