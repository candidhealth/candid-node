/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";
import * as core from "../../../../../../core";

export type Error =
    | CandidApi.insuranceAdjudications.v1.create.Error.EraNotFullyProcessedError
    | CandidApi.insuranceAdjudications.v1.create.Error._Unknown;

export declare namespace Error {
    interface EraNotFullyProcessedError extends _Utils {
        errorName: "EraNotFullyProcessedError";
        content: CandidApi.EraNotFullyProcessedErrorMessage;
    }

    interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    interface _Utils {
        _visit: <_Result>(visitor: CandidApi.insuranceAdjudications.v1.create.Error._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        eraNotFullyProcessedError: (value: CandidApi.EraNotFullyProcessedErrorMessage) => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    eraNotFullyProcessedError: (
        value: CandidApi.EraNotFullyProcessedErrorMessage
    ): CandidApi.insuranceAdjudications.v1.create.Error.EraNotFullyProcessedError => {
        return {
            content: value,
            errorName: "EraNotFullyProcessedError",
            _visit: function <_Result>(
                this: CandidApi.insuranceAdjudications.v1.create.Error.EraNotFullyProcessedError,
                visitor: CandidApi.insuranceAdjudications.v1.create.Error._Visitor<_Result>
            ) {
                return CandidApi.insuranceAdjudications.v1.create.Error._visit(this, visitor);
            },
        };
    },

    _unknown: (fetcherError: core.Fetcher.Error): CandidApi.insuranceAdjudications.v1.create.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: CandidApi.insuranceAdjudications.v1.create.Error._Unknown,
                visitor: CandidApi.insuranceAdjudications.v1.create.Error._Visitor<_Result>
            ) {
                return CandidApi.insuranceAdjudications.v1.create.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.insuranceAdjudications.v1.create.Error,
        visitor: CandidApi.insuranceAdjudications.v1.create.Error._Visitor<_Result>
    ): _Result => {
        switch (value.errorName) {
            case "EraNotFullyProcessedError":
                return visitor.eraNotFullyProcessedError(value.content);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
