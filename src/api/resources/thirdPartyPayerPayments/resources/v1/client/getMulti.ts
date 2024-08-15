/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";
import * as core from "../../../../../../core";

export type Error =
    | CandidApi.thirdPartyPayerPayments.v1.getMulti.Error.UnprocessableEntityError
    | CandidApi.thirdPartyPayerPayments.v1.getMulti.Error._Unknown;

export declare namespace Error {
    interface UnprocessableEntityError extends _Utils {
        errorName: "UnprocessableEntityError";
        content: CandidApi.UnprocessableEntityErrorMessage;
    }

    interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    interface _Utils {
        _visit: <_Result>(visitor: CandidApi.thirdPartyPayerPayments.v1.getMulti.Error._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        unprocessableEntityError: (value: CandidApi.UnprocessableEntityErrorMessage) => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    unprocessableEntityError: (
        value: CandidApi.UnprocessableEntityErrorMessage
    ): CandidApi.thirdPartyPayerPayments.v1.getMulti.Error.UnprocessableEntityError => {
        return {
            content: value,
            errorName: "UnprocessableEntityError",
            _visit: function <_Result>(
                this: CandidApi.thirdPartyPayerPayments.v1.getMulti.Error.UnprocessableEntityError,
                visitor: CandidApi.thirdPartyPayerPayments.v1.getMulti.Error._Visitor<_Result>
            ) {
                return CandidApi.thirdPartyPayerPayments.v1.getMulti.Error._visit(this, visitor);
            },
        };
    },

    _unknown: (fetcherError: core.Fetcher.Error): CandidApi.thirdPartyPayerPayments.v1.getMulti.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: CandidApi.thirdPartyPayerPayments.v1.getMulti.Error._Unknown,
                visitor: CandidApi.thirdPartyPayerPayments.v1.getMulti.Error._Visitor<_Result>
            ) {
                return CandidApi.thirdPartyPayerPayments.v1.getMulti.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.thirdPartyPayerPayments.v1.getMulti.Error,
        visitor: CandidApi.thirdPartyPayerPayments.v1.getMulti.Error._Visitor<_Result>
    ): _Result => {
        switch (value.errorName) {
            case "UnprocessableEntityError":
                return visitor.unprocessableEntityError(value.content);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
