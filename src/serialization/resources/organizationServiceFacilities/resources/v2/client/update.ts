/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const Error: core.serialization.Schema<
    serializers.organizationServiceFacilities.v2.update.Error.Raw,
    CandidApi.organizationServiceFacilities.v2.update.Error
> = core.serialization
    .union("errorName", {
        HttpRequestValidationError: core.serialization.object({
            content: core.serialization.lazyObject(async () => (await import("../../../../..")).RequestValidationError),
        }),
        EntityNotFoundError: core.serialization.object({
            content: core.serialization.lazyObject(
                async () => (await import("../../../../..")).EntityNotFoundErrorMessage
            ),
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
        content: serializers.RequestValidationError.Raw;
    }

    interface EntityNotFoundError {
        errorName: "EntityNotFoundError";
        content: serializers.EntityNotFoundErrorMessage.Raw;
    }
}
