/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const Error: core.serialization.Schema<
    serializers.insuranceRefunds.v1.get.Error.Raw,
    CandidApi.insuranceRefunds.v1.get.Error
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
    })
    .transform<CandidApi.insuranceRefunds.v1.get.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "EntityNotFoundError":
                    return CandidApi.insuranceRefunds.v1.get.Error.entityNotFoundError(value.content);
                case "UnauthorizedError":
                    return CandidApi.insuranceRefunds.v1.get.Error.unauthorizedError(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    type Raw = Error.EntityNotFoundError | Error.UnauthorizedError;

    interface EntityNotFoundError {
        errorName: "EntityNotFoundError";
        content: serializers.EntityNotFoundErrorMessage.Raw;
    }

    interface UnauthorizedError {
        errorName: "UnauthorizedError";
        content: serializers.UnauthorizedErrorMessage.Raw;
    }
}
