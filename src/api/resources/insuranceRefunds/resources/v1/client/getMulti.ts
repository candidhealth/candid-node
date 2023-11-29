/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";
import * as core from "../../../../../../core";

export type Error = CandidApi.insuranceRefunds.v1.getMulti.Error._Unknown;

export declare namespace Error {
    interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    interface _Utils {
        _visit: <_Result>(visitor: CandidApi.insuranceRefunds.v1.getMulti.Error._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    _unknown: (fetcherError: core.Fetcher.Error): CandidApi.insuranceRefunds.v1.getMulti.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: CandidApi.insuranceRefunds.v1.getMulti.Error._Unknown,
                visitor: CandidApi.insuranceRefunds.v1.getMulti.Error._Visitor<_Result>
            ) {
                return CandidApi.insuranceRefunds.v1.getMulti.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.insuranceRefunds.v1.getMulti.Error,
        visitor: CandidApi.insuranceRefunds.v1.getMulti.Error._Visitor<_Result>
    ): _Result => {
        switch (value.errorName) {
            default:
                return visitor._other(value as any);
        }
    },
} as const;
