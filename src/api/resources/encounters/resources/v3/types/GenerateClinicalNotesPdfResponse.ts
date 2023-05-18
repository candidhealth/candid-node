/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { CandidApi } from "";

export type GenerateClinicalNotesPdfResponse =
    | CandidApi.encounters.v3.GenerateClinicalNotesPdfResponse.Success
    | CandidApi.encounters.v3.GenerateClinicalNotesPdfResponse._Unknown;

export declare namespace GenerateClinicalNotesPdfResponse {
    interface Success extends CandidApi.encounters.v3.SuccessfulGenerateClinicalNotesPdfResponse, _Utils {
        result: "success";
    }

    interface _Unknown extends _Utils {
        result: void;
    }

    interface _Utils {
        _visit: <_Result>(
            visitor: CandidApi.encounters.v3.GenerateClinicalNotesPdfResponse._Visitor<_Result>
        ) => _Result;
    }

    interface _Visitor<_Result> {
        success: (value: CandidApi.encounters.v3.SuccessfulGenerateClinicalNotesPdfResponse) => _Result;
        _other: (value: { result: string }) => _Result;
    }
}

export const GenerateClinicalNotesPdfResponse = {
    success: (
        value: CandidApi.encounters.v3.SuccessfulGenerateClinicalNotesPdfResponse
    ): CandidApi.encounters.v3.GenerateClinicalNotesPdfResponse.Success => {
        return {
            ...value,
            result: "success",
            _visit: function <_Result>(
                this: CandidApi.encounters.v3.GenerateClinicalNotesPdfResponse.Success,
                visitor: CandidApi.encounters.v3.GenerateClinicalNotesPdfResponse._Visitor<_Result>
            ) {
                return CandidApi.encounters.v3.GenerateClinicalNotesPdfResponse._visit(this, visitor);
            },
        };
    },

    _unknown: (value: { result: string }): CandidApi.encounters.v3.GenerateClinicalNotesPdfResponse._Unknown => {
        return {
            ...(value as any),
            _visit: function <_Result>(
                this: CandidApi.encounters.v3.GenerateClinicalNotesPdfResponse._Unknown,
                visitor: CandidApi.encounters.v3.GenerateClinicalNotesPdfResponse._Visitor<_Result>
            ) {
                return CandidApi.encounters.v3.GenerateClinicalNotesPdfResponse._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.encounters.v3.GenerateClinicalNotesPdfResponse,
        visitor: CandidApi.encounters.v3.GenerateClinicalNotesPdfResponse._Visitor<_Result>
    ): _Result => {
        switch (value.result) {
            case "success":
                return visitor.success(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
