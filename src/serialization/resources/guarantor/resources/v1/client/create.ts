/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { EncounterHasExistingGuarantorErrorType } from "../types/EncounterHasExistingGuarantorErrorType";
import { RequestValidationError } from "../../../../commons/types/RequestValidationError";

export const Error: core.serialization.Schema<
    serializers.guarantor.v1.create.Error.Raw,
    CandidApi.guarantor.v1.create.Error
> = core.serialization
    .union("errorName", {
        EncounterHasExistingGuarantorError: core.serialization.object({
            content: EncounterHasExistingGuarantorErrorType,
        }),
        HttpRequestValidationsError: core.serialization.object({
            content: core.serialization.list(RequestValidationError),
        }),
    })
    .transform<CandidApi.guarantor.v1.create.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "EncounterHasExistingGuarantorError":
                    return CandidApi.guarantor.v1.create.Error.encounterHasExistingGuarantorError(value.content);
                case "HttpRequestValidationsError":
                    return CandidApi.guarantor.v1.create.Error.httpRequestValidationsError(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    export type Raw = Error.EncounterHasExistingGuarantorError | Error.HttpRequestValidationsError;

    export interface EncounterHasExistingGuarantorError {
        errorName: "EncounterHasExistingGuarantorError";
        content: EncounterHasExistingGuarantorErrorType.Raw;
    }

    export interface HttpRequestValidationsError {
        errorName: "HttpRequestValidationsError";
        content: RequestValidationError.Raw[];
    }
}
