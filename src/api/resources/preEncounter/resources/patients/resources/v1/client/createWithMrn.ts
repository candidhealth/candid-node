/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../../index";
import * as core from "../../../../../../../../core";

export type Error =
    | CandidApi.preEncounter.patients.v1.createWithMrn.Error.VersionConflictError
    | CandidApi.preEncounter.patients.v1.createWithMrn.Error.BadRequestError
    | CandidApi.preEncounter.patients.v1.createWithMrn.Error._Unknown;

export namespace Error {
    export interface VersionConflictError extends _Utils {
        errorName: "VersionConflictError";
        content: CandidApi.preEncounter.VersionConflictErrorBody;
    }

    export interface BadRequestError extends _Utils {
        errorName: "BadRequestError";
        content: CandidApi.preEncounter.ErrorBase4Xx;
    }

    export interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    export interface _Utils {
        _visit: <_Result>(visitor: CandidApi.preEncounter.patients.v1.createWithMrn.Error._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        versionConflictError: (value: CandidApi.preEncounter.VersionConflictErrorBody) => _Result;
        badRequestError: (value: CandidApi.preEncounter.ErrorBase4Xx) => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    versionConflictError: (
        value: CandidApi.preEncounter.VersionConflictErrorBody,
    ): CandidApi.preEncounter.patients.v1.createWithMrn.Error.VersionConflictError => {
        return {
            content: value,
            errorName: "VersionConflictError",
            _visit: function <_Result>(
                this: CandidApi.preEncounter.patients.v1.createWithMrn.Error.VersionConflictError,
                visitor: CandidApi.preEncounter.patients.v1.createWithMrn.Error._Visitor<_Result>,
            ) {
                return CandidApi.preEncounter.patients.v1.createWithMrn.Error._visit(this, visitor);
            },
        };
    },

    badRequestError: (
        value: CandidApi.preEncounter.ErrorBase4Xx,
    ): CandidApi.preEncounter.patients.v1.createWithMrn.Error.BadRequestError => {
        return {
            content: value,
            errorName: "BadRequestError",
            _visit: function <_Result>(
                this: CandidApi.preEncounter.patients.v1.createWithMrn.Error.BadRequestError,
                visitor: CandidApi.preEncounter.patients.v1.createWithMrn.Error._Visitor<_Result>,
            ) {
                return CandidApi.preEncounter.patients.v1.createWithMrn.Error._visit(this, visitor);
            },
        };
    },

    _unknown: (fetcherError: core.Fetcher.Error): CandidApi.preEncounter.patients.v1.createWithMrn.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: CandidApi.preEncounter.patients.v1.createWithMrn.Error._Unknown,
                visitor: CandidApi.preEncounter.patients.v1.createWithMrn.Error._Visitor<_Result>,
            ) {
                return CandidApi.preEncounter.patients.v1.createWithMrn.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.preEncounter.patients.v1.createWithMrn.Error,
        visitor: CandidApi.preEncounter.patients.v1.createWithMrn.Error._Visitor<_Result>,
    ): _Result => {
        switch (value.errorName) {
            case "VersionConflictError":
                return visitor.versionConflictError(value.content);
            case "BadRequestError":
                return visitor.badRequestError(value.content);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
