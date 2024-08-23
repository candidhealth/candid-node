/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../../index";
import * as core from "../../../../../../../../core";

export type Error =
    | CandidApi.preEncounter.appointments.v1.getHistory.Error.NotFoundError
    | CandidApi.preEncounter.appointments.v1.getHistory.Error._Unknown;

export declare namespace Error {
    interface NotFoundError extends _Utils {
        errorName: "NotFoundError";
        content: CandidApi.preEncounter.NotFoundErrorBody;
    }

    interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    interface _Utils {
        _visit: <_Result>(
            visitor: CandidApi.preEncounter.appointments.v1.getHistory.Error._Visitor<_Result>
        ) => _Result;
    }

    interface _Visitor<_Result> {
        notFoundError: (value: CandidApi.preEncounter.NotFoundErrorBody) => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    notFoundError: (
        value: CandidApi.preEncounter.NotFoundErrorBody
    ): CandidApi.preEncounter.appointments.v1.getHistory.Error.NotFoundError => {
        return {
            content: value,
            errorName: "NotFoundError",
            _visit: function <_Result>(
                this: CandidApi.preEncounter.appointments.v1.getHistory.Error.NotFoundError,
                visitor: CandidApi.preEncounter.appointments.v1.getHistory.Error._Visitor<_Result>
            ) {
                return CandidApi.preEncounter.appointments.v1.getHistory.Error._visit(this, visitor);
            },
        };
    },

    _unknown: (fetcherError: core.Fetcher.Error): CandidApi.preEncounter.appointments.v1.getHistory.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: CandidApi.preEncounter.appointments.v1.getHistory.Error._Unknown,
                visitor: CandidApi.preEncounter.appointments.v1.getHistory.Error._Visitor<_Result>
            ) {
                return CandidApi.preEncounter.appointments.v1.getHistory.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.preEncounter.appointments.v1.getHistory.Error,
        visitor: CandidApi.preEncounter.appointments.v1.getHistory.Error._Visitor<_Result>
    ): _Result => {
        switch (value.errorName) {
            case "NotFoundError":
                return visitor.notFoundError(value.content);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
