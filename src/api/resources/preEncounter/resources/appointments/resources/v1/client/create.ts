/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../../index";
import * as core from "../../../../../../../../core";

export type Error =
    | CandidApi.preEncounter.appointments.v1.create.Error.VersionConflictError
    | CandidApi.preEncounter.appointments.v1.create.Error.NotFoundError
    | CandidApi.preEncounter.appointments.v1.create.Error._Unknown;

export declare namespace Error {
    interface VersionConflictError extends _Utils {
        errorName: "VersionConflictError";
        content: CandidApi.preEncounter.VersionConflictErrorBody;
    }

    interface NotFoundError extends _Utils {
        errorName: "NotFoundError";
        content: CandidApi.preEncounter.ErrorBase4Xx;
    }

    interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    interface _Utils {
        _visit: <_Result>(visitor: CandidApi.preEncounter.appointments.v1.create.Error._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        versionConflictError: (value: CandidApi.preEncounter.VersionConflictErrorBody) => _Result;
        notFoundError: (value: CandidApi.preEncounter.ErrorBase4Xx) => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    versionConflictError: (
        value: CandidApi.preEncounter.VersionConflictErrorBody
    ): CandidApi.preEncounter.appointments.v1.create.Error.VersionConflictError => {
        return {
            content: value,
            errorName: "VersionConflictError",
            _visit: function <_Result>(
                this: CandidApi.preEncounter.appointments.v1.create.Error.VersionConflictError,
                visitor: CandidApi.preEncounter.appointments.v1.create.Error._Visitor<_Result>
            ) {
                return CandidApi.preEncounter.appointments.v1.create.Error._visit(this, visitor);
            },
        };
    },

    notFoundError: (
        value: CandidApi.preEncounter.ErrorBase4Xx
    ): CandidApi.preEncounter.appointments.v1.create.Error.NotFoundError => {
        return {
            content: value,
            errorName: "NotFoundError",
            _visit: function <_Result>(
                this: CandidApi.preEncounter.appointments.v1.create.Error.NotFoundError,
                visitor: CandidApi.preEncounter.appointments.v1.create.Error._Visitor<_Result>
            ) {
                return CandidApi.preEncounter.appointments.v1.create.Error._visit(this, visitor);
            },
        };
    },

    _unknown: (fetcherError: core.Fetcher.Error): CandidApi.preEncounter.appointments.v1.create.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: CandidApi.preEncounter.appointments.v1.create.Error._Unknown,
                visitor: CandidApi.preEncounter.appointments.v1.create.Error._Visitor<_Result>
            ) {
                return CandidApi.preEncounter.appointments.v1.create.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.preEncounter.appointments.v1.create.Error,
        visitor: CandidApi.preEncounter.appointments.v1.create.Error._Visitor<_Result>
    ): _Result => {
        switch (value.errorName) {
            case "VersionConflictError":
                return visitor.versionConflictError(value.content);
            case "NotFoundError":
                return visitor.notFoundError(value.content);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
