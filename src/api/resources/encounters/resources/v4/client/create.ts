/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";
import * as core from "../../../../../../core";

export type Error =
    | CandidApi.encounters.v4.create.Error.EncounterExternalIdUniquenessError
    | CandidApi.encounters.v4.create.Error._Unknown;

export declare namespace Error {
    interface EncounterExternalIdUniquenessError extends _Utils {
        errorName: "EncounterExternalIdUniquenessError";
        content: CandidApi.encounters.v4.EncounterExternalIdUniquenessErrorType;
    }

    interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    interface _Utils {
        _visit: <_Result>(visitor: CandidApi.encounters.v4.create.Error._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        encounterExternalIdUniquenessError: (
            value: CandidApi.encounters.v4.EncounterExternalIdUniquenessErrorType
        ) => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    encounterExternalIdUniquenessError: (
        value: CandidApi.encounters.v4.EncounterExternalIdUniquenessErrorType
    ): CandidApi.encounters.v4.create.Error.EncounterExternalIdUniquenessError => {
        return {
            content: value,
            errorName: "EncounterExternalIdUniquenessError",
            _visit: function <_Result>(
                this: CandidApi.encounters.v4.create.Error.EncounterExternalIdUniquenessError,
                visitor: CandidApi.encounters.v4.create.Error._Visitor<_Result>
            ) {
                return CandidApi.encounters.v4.create.Error._visit(this, visitor);
            },
        };
    },

    _unknown: (fetcherError: core.Fetcher.Error): CandidApi.encounters.v4.create.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: CandidApi.encounters.v4.create.Error._Unknown,
                visitor: CandidApi.encounters.v4.create.Error._Visitor<_Result>
            ) {
                return CandidApi.encounters.v4.create.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.encounters.v4.create.Error,
        visitor: CandidApi.encounters.v4.create.Error._Visitor<_Result>
    ): _Result => {
        switch (value.errorName) {
            case "EncounterExternalIdUniquenessError":
                return visitor.encounterExternalIdUniquenessError(value.content);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
