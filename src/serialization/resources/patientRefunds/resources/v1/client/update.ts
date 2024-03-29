/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const Error: core.serialization.Schema<
    serializers.patientRefunds.v1.update.Error.Raw,
    CandidApi.patientRefunds.v1.update.Error
> = core.serialization
    .union("errorName", {
        EntityNotFoundError: core.serialization.object({
            content: core.serialization.lazyObject(
                async () => (await import("../../../../..")).EntityNotFoundErrorMessage
            ),
        }),
        UnauthorizedError: core.serialization.object({
            content: core.serialization.lazyObject(
                async () => (await import("../../../../..")).UnauthorizedErrorMessage
            ),
        }),
        UnprocessableEntityError: core.serialization.object({
            content: core.serialization.lazyObject(
                async () => (await import("../../../../..")).UnprocessableEntityErrorMessage
            ),
        }),
    })
    .transform<CandidApi.patientRefunds.v1.update.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "EntityNotFoundError":
                    return CandidApi.patientRefunds.v1.update.Error.entityNotFoundError(value.content);
                case "UnauthorizedError":
                    return CandidApi.patientRefunds.v1.update.Error.unauthorizedError(value.content);
                case "UnprocessableEntityError":
                    return CandidApi.patientRefunds.v1.update.Error.unprocessableEntityError(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    type Raw = Error.EntityNotFoundError | Error.UnauthorizedError | Error.UnprocessableEntityError;

    interface EntityNotFoundError {
        errorName: "EntityNotFoundError";
        content: serializers.EntityNotFoundErrorMessage.Raw;
    }

    interface UnauthorizedError {
        errorName: "UnauthorizedError";
        content: serializers.UnauthorizedErrorMessage.Raw;
    }

    interface UnprocessableEntityError {
        errorName: "UnprocessableEntityError";
        content: serializers.UnprocessableEntityErrorMessage.Raw;
    }
}
