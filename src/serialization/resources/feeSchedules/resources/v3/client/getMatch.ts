/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const Response: core.serialization.Schema<
    serializers.feeSchedules.v3.getMatch.Response.Raw,
    CandidApi.feeSchedules.v3.MatchResult | undefined
> = core.serialization.lazyObject(async () => (await import("../../../../..")).feeSchedules.v3.MatchResult).optional();

export declare namespace Response {
    type Raw = serializers.feeSchedules.v3.MatchResult.Raw | null | undefined;
}

export const Error: core.serialization.Schema<
    serializers.feeSchedules.v3.getMatch.Error.Raw,
    CandidApi.feeSchedules.v3.getMatch.Error
> = core.serialization
    .union("errorName", {
        EntityNotFoundError: core.serialization.object({
            content: core.serialization.lazyObject(
                async () => (await import("../../../../..")).EntityNotFoundErrorMessage
            ),
        }),
        FailedToBuildServiceLineDimensions: core.serialization.object({
            content: core.serialization.lazy(async () => (await import("../../../../..")).ErrorMessage),
        }),
    })
    .transform<CandidApi.feeSchedules.v3.getMatch.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "EntityNotFoundError":
                    return CandidApi.feeSchedules.v3.getMatch.Error.entityNotFoundError(value.content);
                case "FailedToBuildServiceLineDimensions":
                    return CandidApi.feeSchedules.v3.getMatch.Error.failedToBuildServiceLineDimensions(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    type Raw = Error.EntityNotFoundError | Error.FailedToBuildServiceLineDimensions;

    interface EntityNotFoundError {
        errorName: "EntityNotFoundError";
        content: serializers.EntityNotFoundErrorMessage.Raw;
    }

    interface FailedToBuildServiceLineDimensions {
        errorName: "FailedToBuildServiceLineDimensions";
        content: serializers.ErrorMessage.Raw;
    }
}
