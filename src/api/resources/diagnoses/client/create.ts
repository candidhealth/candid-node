/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../index";
import * as core from "../../../../core";

export type Error = CandidApi.diagnoses.create.Error._Unknown;

export namespace Error {
    export interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    export interface _Utils {
        _visit: <_Result>(visitor: CandidApi.diagnoses.create.Error._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    _unknown: (fetcherError: core.Fetcher.Error): CandidApi.diagnoses.create.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: CandidApi.diagnoses.create.Error._Unknown,
                visitor: CandidApi.diagnoses.create.Error._Visitor<_Result>,
            ) {
                return CandidApi.diagnoses.create.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.diagnoses.create.Error,
        visitor: CandidApi.diagnoses.create.Error._Visitor<_Result>,
    ): _Result => {
        switch (value.errorName) {
            default:
                return visitor._other(value as any);
        }
    },
} as const;
