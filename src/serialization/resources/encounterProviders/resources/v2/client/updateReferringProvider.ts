/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { UnprocessableEntityErrorMessage } from "../../../../commons/types/UnprocessableEntityErrorMessage";
import { EntityNotFoundErrorMessage } from "../../../../commons/types/EntityNotFoundErrorMessage";

export const Error: core.serialization.Schema<
    serializers.encounterProviders.v2.updateReferringProvider.Error.Raw,
    CandidApi.encounterProviders.v2.updateReferringProvider.Error
> = core.serialization
    .union("errorName", {
        UnprocessableEntityError: core.serialization.object({
            content: UnprocessableEntityErrorMessage,
        }),
        EntityNotFoundError: core.serialization.object({
            content: EntityNotFoundErrorMessage,
        }),
    })
    .transform<CandidApi.encounterProviders.v2.updateReferringProvider.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "UnprocessableEntityError":
                    return CandidApi.encounterProviders.v2.updateReferringProvider.Error.unprocessableEntityError(
                        value.content
                    );
                case "EntityNotFoundError":
                    return CandidApi.encounterProviders.v2.updateReferringProvider.Error.entityNotFoundError(
                        value.content
                    );
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    type Raw = Error.UnprocessableEntityError | Error.EntityNotFoundError;

    interface UnprocessableEntityError {
        errorName: "UnprocessableEntityError";
        content: UnprocessableEntityErrorMessage.Raw;
    }

    interface EntityNotFoundError {
        errorName: "EntityNotFoundError";
        content: EntityNotFoundErrorMessage.Raw;
    }
}