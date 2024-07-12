/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";
import * as core from "../../../../../../core";

export type Error = CandidApi.preEncounter.coverages.get.Error._Unknown;

export declare namespace Error {
    interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    interface _Utils {
        _visit: <_Result>(visitor: CandidApi.preEncounter.coverages.get.Error._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    _unknown: (fetcherError: core.Fetcher.Error): CandidApi.preEncounter.coverages.get.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: CandidApi.preEncounter.coverages.get.Error._Unknown,
                visitor: CandidApi.preEncounter.coverages.get.Error._Visitor<_Result>
            ) {
                return CandidApi.preEncounter.coverages.get.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.preEncounter.coverages.get.Error,
        visitor: CandidApi.preEncounter.coverages.get.Error._Visitor<_Result>
    ): _Result => {
        switch (value.errorName) {
            default:
                return visitor._other(value as any);
        }
    },
} as const;
