/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { RequestValidationError } from "../../../../commons/types/RequestValidationError";
import { EntityNotFoundErrorMessage } from "../../../../commons/types/EntityNotFoundErrorMessage";
import { UpdatesDisabledDueToExternalSystemIntegrationErrorMessage } from "../../../../commons/types/UpdatesDisabledDueToExternalSystemIntegrationErrorMessage";

export const Error: core.serialization.Schema<
    serializers.organizationProviders.v3.update.Error.Raw,
    CandidApi.organizationProviders.v3.update.Error
> = core.serialization
    .union("errorName", {
        HttpRequestValidationError: core.serialization.object({
            content: RequestValidationError,
        }),
        EntityNotFoundError: core.serialization.object({
            content: EntityNotFoundErrorMessage,
        }),
        UpdatesDisabledDueToExternalSystemIntegrationError: core.serialization.object({
            content: UpdatesDisabledDueToExternalSystemIntegrationErrorMessage,
        }),
    })
    .transform<CandidApi.organizationProviders.v3.update.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "HttpRequestValidationError":
                    return CandidApi.organizationProviders.v3.update.Error.httpRequestValidationError(value.content);
                case "EntityNotFoundError":
                    return CandidApi.organizationProviders.v3.update.Error.entityNotFoundError(value.content);
                case "UpdatesDisabledDueToExternalSystemIntegrationError":
                    return CandidApi.organizationProviders.v3.update.Error.updatesDisabledDueToExternalSystemIntegrationError(
                        value.content
                    );
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    type Raw =
        | Error.HttpRequestValidationError
        | Error.EntityNotFoundError
        | Error.UpdatesDisabledDueToExternalSystemIntegrationError;

    interface HttpRequestValidationError {
        errorName: "HttpRequestValidationError";
        content: RequestValidationError.Raw;
    }

    interface EntityNotFoundError {
        errorName: "EntityNotFoundError";
        content: EntityNotFoundErrorMessage.Raw;
    }

    interface UpdatesDisabledDueToExternalSystemIntegrationError {
        errorName: "UpdatesDisabledDueToExternalSystemIntegrationError";
        content: UpdatesDisabledDueToExternalSystemIntegrationErrorMessage.Raw;
    }
}
