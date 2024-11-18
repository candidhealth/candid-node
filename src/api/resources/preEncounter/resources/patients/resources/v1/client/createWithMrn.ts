/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../../index";
import * as core from "../../../../../../../../core";

export type Error =
    | CandidApi.preEncounter.patients.v1.createWithMrn.Error.VersionConflictError
    | CandidApi.preEncounter.patients.v1.createWithMrn.Error.PotentialDuplicatePatients
    | CandidApi.preEncounter.patients.v1.createWithMrn.Error.InvalidMrnError
    | CandidApi.preEncounter.patients.v1.createWithMrn.Error._Unknown;

export declare namespace Error {
    interface VersionConflictError extends _Utils {
        errorName: "VersionConflictError";
        content: CandidApi.preEncounter.VersionConflictErrorBody;
    }

    interface PotentialDuplicatePatients extends _Utils {
        errorName: "PotentialDuplicatePatients";
        content: CandidApi.preEncounter.patients.v1.PotentialDuplicatePatientsErrorBody;
    }

    interface InvalidMrnError extends _Utils {
        errorName: "InvalidMRNError";
        content: CandidApi.preEncounter.patients.v1.InvalidMrnErrorBody;
    }

    interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    interface _Utils {
        _visit: <_Result>(visitor: CandidApi.preEncounter.patients.v1.createWithMrn.Error._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        versionConflictError: (value: CandidApi.preEncounter.VersionConflictErrorBody) => _Result;
        potentialDuplicatePatients: (
            value: CandidApi.preEncounter.patients.v1.PotentialDuplicatePatientsErrorBody
        ) => _Result;
        invalidMrnError: (value: CandidApi.preEncounter.patients.v1.InvalidMrnErrorBody) => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    versionConflictError: (
        value: CandidApi.preEncounter.VersionConflictErrorBody
    ): CandidApi.preEncounter.patients.v1.createWithMrn.Error.VersionConflictError => {
        return {
            content: value,
            errorName: "VersionConflictError",
            _visit: function <_Result>(
                this: CandidApi.preEncounter.patients.v1.createWithMrn.Error.VersionConflictError,
                visitor: CandidApi.preEncounter.patients.v1.createWithMrn.Error._Visitor<_Result>
            ) {
                return CandidApi.preEncounter.patients.v1.createWithMrn.Error._visit(this, visitor);
            },
        };
    },

    potentialDuplicatePatients: (
        value: CandidApi.preEncounter.patients.v1.PotentialDuplicatePatientsErrorBody
    ): CandidApi.preEncounter.patients.v1.createWithMrn.Error.PotentialDuplicatePatients => {
        return {
            content: value,
            errorName: "PotentialDuplicatePatients",
            _visit: function <_Result>(
                this: CandidApi.preEncounter.patients.v1.createWithMrn.Error.PotentialDuplicatePatients,
                visitor: CandidApi.preEncounter.patients.v1.createWithMrn.Error._Visitor<_Result>
            ) {
                return CandidApi.preEncounter.patients.v1.createWithMrn.Error._visit(this, visitor);
            },
        };
    },

    invalidMrnError: (
        value: CandidApi.preEncounter.patients.v1.InvalidMrnErrorBody
    ): CandidApi.preEncounter.patients.v1.createWithMrn.Error.InvalidMrnError => {
        return {
            content: value,
            errorName: "InvalidMRNError",
            _visit: function <_Result>(
                this: CandidApi.preEncounter.patients.v1.createWithMrn.Error.InvalidMrnError,
                visitor: CandidApi.preEncounter.patients.v1.createWithMrn.Error._Visitor<_Result>
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
                visitor: CandidApi.preEncounter.patients.v1.createWithMrn.Error._Visitor<_Result>
            ) {
                return CandidApi.preEncounter.patients.v1.createWithMrn.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.preEncounter.patients.v1.createWithMrn.Error,
        visitor: CandidApi.preEncounter.patients.v1.createWithMrn.Error._Visitor<_Result>
    ): _Result => {
        switch (value.errorName) {
            case "VersionConflictError":
                return visitor.versionConflictError(value.content);
            case "PotentialDuplicatePatients":
                return visitor.potentialDuplicatePatients(value.content);
            case "InvalidMRNError":
                return visitor.invalidMrnError(value.content);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
