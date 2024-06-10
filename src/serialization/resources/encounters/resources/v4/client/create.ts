/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { EncounterExternalIdUniquenessErrorType } from "../types/EncounterExternalIdUniquenessErrorType";
import { EncounterPatientControlNumberUniquenessErrorType } from "../types/EncounterPatientControlNumberUniquenessErrorType";
import { EntityNotFoundErrorMessage } from "../../../../commons/types/EntityNotFoundErrorMessage";
import { EncounterGuarantorMissingContactInfoErrorType } from "../types/EncounterGuarantorMissingContactInfoErrorType";
import { RequestValidationError } from "../../../../commons/types/RequestValidationError";
import { CashPayPayerErrorMessage } from "../types/CashPayPayerErrorMessage";

export const Error: core.serialization.Schema<
    serializers.encounters.v4.create.Error.Raw,
    CandidApi.encounters.v4.create.Error
> = core.serialization
    .union("errorName", {
        EncounterExternalIdUniquenessError: core.serialization.object({
            content: EncounterExternalIdUniquenessErrorType,
        }),
        EncounterPatientControlNumberUniquenessError: core.serialization.object({
            content: EncounterPatientControlNumberUniquenessErrorType,
        }),
        EntityNotFoundError: core.serialization.object({
            content: EntityNotFoundErrorMessage,
        }),
        EncounterGuarantorMissingContactInfoError: core.serialization.object({
            content: EncounterGuarantorMissingContactInfoErrorType,
        }),
        HttpRequestValidationsError: core.serialization.object({
            content: core.serialization.list(RequestValidationError),
        }),
        CashPayPayerError: core.serialization.object({
            content: CashPayPayerErrorMessage,
        }),
    })
    .transform<CandidApi.encounters.v4.create.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "EncounterExternalIdUniquenessError":
                    return CandidApi.encounters.v4.create.Error.encounterExternalIdUniquenessError(value.content);
                case "EncounterPatientControlNumberUniquenessError":
                    return CandidApi.encounters.v4.create.Error.encounterPatientControlNumberUniquenessError(
                        value.content
                    );
                case "EntityNotFoundError":
                    return CandidApi.encounters.v4.create.Error.entityNotFoundError(value.content);
                case "EncounterGuarantorMissingContactInfoError":
                    return CandidApi.encounters.v4.create.Error.encounterGuarantorMissingContactInfoError(
                        value.content
                    );
                case "HttpRequestValidationsError":
                    return CandidApi.encounters.v4.create.Error.httpRequestValidationsError(value.content);
                case "CashPayPayerError":
                    return CandidApi.encounters.v4.create.Error.cashPayPayerError(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    type Raw =
        | Error.EncounterExternalIdUniquenessError
        | Error.EncounterPatientControlNumberUniquenessError
        | Error.EntityNotFoundError
        | Error.EncounterGuarantorMissingContactInfoError
        | Error.HttpRequestValidationsError
        | Error.CashPayPayerError;

    interface EncounterExternalIdUniquenessError {
        errorName: "EncounterExternalIdUniquenessError";
        content: EncounterExternalIdUniquenessErrorType.Raw;
    }

    interface EncounterPatientControlNumberUniquenessError {
        errorName: "EncounterPatientControlNumberUniquenessError";
        content: EncounterPatientControlNumberUniquenessErrorType.Raw;
    }

    interface EntityNotFoundError {
        errorName: "EntityNotFoundError";
        content: EntityNotFoundErrorMessage.Raw;
    }

    interface EncounterGuarantorMissingContactInfoError {
        errorName: "EncounterGuarantorMissingContactInfoError";
        content: EncounterGuarantorMissingContactInfoErrorType.Raw;
    }

    interface HttpRequestValidationsError {
        errorName: "HttpRequestValidationsError";
        content: RequestValidationError.Raw[];
    }

    interface CashPayPayerError {
        errorName: "CashPayPayerError";
        content: CashPayPayerErrorMessage.Raw;
    }
}
