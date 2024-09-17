/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { EntityConflictErrorMessage } from "../../../../commons/types/EntityConflictErrorMessage";
import { UnprocessableEntityErrorMessage } from "../../../../commons/types/UnprocessableEntityErrorMessage";
import { EntityNotFoundErrorMessage } from "../../../../commons/types/EntityNotFoundErrorMessage";

export const Error: core.serialization.Schema<
    serializers.encounterProviders.v2.createOrderingProvider.Error.Raw,
    CandidApi.encounterProviders.v2.createOrderingProvider.Error
> = core.serialization
    .union("errorName", {
        EntityConflictError: core.serialization.object({
            content: EntityConflictErrorMessage,
        }),
        UnprocessableEntityError: core.serialization.object({
            content: UnprocessableEntityErrorMessage,
        }),
        EntityNotFoundError: core.serialization.object({
            content: EntityNotFoundErrorMessage,
        }),
    })
    .transform<CandidApi.encounterProviders.v2.createOrderingProvider.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "EntityConflictError":
                    return CandidApi.encounterProviders.v2.createOrderingProvider.Error.entityConflictError(
                        value.content
                    );
                case "UnprocessableEntityError":
                    return CandidApi.encounterProviders.v2.createOrderingProvider.Error.unprocessableEntityError(
                        value.content
                    );
                case "EntityNotFoundError":
                    return CandidApi.encounterProviders.v2.createOrderingProvider.Error.entityNotFoundError(
                        value.content
                    );
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    type Raw = Error.EntityConflictError | Error.UnprocessableEntityError | Error.EntityNotFoundError;

    interface EntityConflictError {
        errorName: "EntityConflictError";
        content: EntityConflictErrorMessage.Raw;
    }

    interface UnprocessableEntityError {
        errorName: "UnprocessableEntityError";
        content: UnprocessableEntityErrorMessage.Raw;
    }

    interface EntityNotFoundError {
        errorName: "EntityNotFoundError";
        content: EntityNotFoundErrorMessage.Raw;
    }
}
