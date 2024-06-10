/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { RequestValidationError } from "../../../../commons/types/RequestValidationError";
import { EntityNotFoundErrorMessage } from "../../../../commons/types/EntityNotFoundErrorMessage";

export const Error: core.serialization.Schema<
    serializers.organizationServiceFacilities.v2.update.Error.Raw,
    CandidApi.organizationServiceFacilities.v2.update.Error
> = core.serialization
    .union("errorName", {
        HttpRequestValidationError: core.serialization.object({
            content: RequestValidationError,
        }),
        EntityNotFoundError: core.serialization.object({
            content: EntityNotFoundErrorMessage,
        }),
    })
    .transform<CandidApi.organizationServiceFacilities.v2.update.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "HttpRequestValidationError":
                    return CandidApi.organizationServiceFacilities.v2.update.Error.httpRequestValidationError(
                        value.content
                    );
                case "EntityNotFoundError":
                    return CandidApi.organizationServiceFacilities.v2.update.Error.entityNotFoundError(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    type Raw = Error.HttpRequestValidationError | Error.EntityNotFoundError;

    interface HttpRequestValidationError {
        errorName: "HttpRequestValidationError";
        content: RequestValidationError.Raw;
    }

    interface EntityNotFoundError {
        errorName: "EntityNotFoundError";
        content: EntityNotFoundErrorMessage.Raw;
    }
}
