/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { EntityNotFoundErrorMessage } from "../../../../commons/types/EntityNotFoundErrorMessage";
import { UnauthorizedErrorMessage } from "../../../../commons/types/UnauthorizedErrorMessage";

export const Error: core.serialization.Schema<
    serializers.credentialing.v2.delete.Error.Raw,
    CandidApi.credentialing.v2.delete.Error
> = core.serialization
    .union("errorName", {
        EntityNotFoundError: core.serialization.object({
            content: EntityNotFoundErrorMessage,
        }),
        UnauthorizedError: core.serialization.object({
            content: UnauthorizedErrorMessage,
        }),
    })
    .transform<CandidApi.credentialing.v2.delete.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "EntityNotFoundError":
                    return CandidApi.credentialing.v2.delete.Error.entityNotFoundError(value.content);
                case "UnauthorizedError":
                    return CandidApi.credentialing.v2.delete.Error.unauthorizedError(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    export type Raw = Error.EntityNotFoundError | Error.UnauthorizedError;

    export interface EntityNotFoundError {
        errorName: "EntityNotFoundError";
        content: EntityNotFoundErrorMessage.Raw;
    }

    export interface UnauthorizedError {
        errorName: "UnauthorizedError";
        content: UnauthorizedErrorMessage.Raw;
    }
}
