/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const Response: core.serialization.Schema<
    serializers.feeSchedules.v3.getRateHistory.Response.Raw,
    CandidApi.feeSchedules.v3.Rate[]
> = core.serialization.list(
    core.serialization.lazyObject(async () => (await import("../../../../..")).feeSchedules.v3.Rate)
);

export declare namespace Response {
    type Raw = serializers.feeSchedules.v3.Rate.Raw[];
}

export const Error: core.serialization.Schema<
    serializers.feeSchedules.v3.getRateHistory.Error.Raw,
    CandidApi.feeSchedules.v3.getRateHistory.Error
> = core.serialization
    .union("errorName", {
        EntityNotFoundError: core.serialization.object({
            content: core.serialization.lazyObject(
                async () => (await import("../../../../..")).EntityNotFoundErrorMessage
            ),
        }),
    })
    .transform<CandidApi.feeSchedules.v3.getRateHistory.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "EntityNotFoundError":
                    return CandidApi.feeSchedules.v3.getRateHistory.Error.entityNotFoundError(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    type Raw = Error.EntityNotFoundError;

    interface EntityNotFoundError {
        errorName: "EntityNotFoundError";
        content: serializers.EntityNotFoundErrorMessage.Raw;
    }
}
