/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { EntityNotFoundErrorMessage } from "../../../../commons/types/EntityNotFoundErrorMessage";
import { EntityConflictErrorMessage } from "../../../../commons/types/EntityConflictErrorMessage";

export const Error: core.serialization.Schema<
    serializers.feeSchedules.v3.deleteRate.Error.Raw,
    CandidApi.feeSchedules.v3.deleteRate.Error
> = core.serialization
    .union("errorName", {
        EntityNotFoundError: core.serialization.object({
            content: EntityNotFoundErrorMessage,
        }),
        EntityConflictError: core.serialization.object({
            content: EntityConflictErrorMessage,
        }),
    })
    .transform<CandidApi.feeSchedules.v3.deleteRate.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "EntityNotFoundError":
                    return CandidApi.feeSchedules.v3.deleteRate.Error.entityNotFoundError(value.content);
                case "EntityConflictError":
                    return CandidApi.feeSchedules.v3.deleteRate.Error.entityConflictError(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    type Raw = Error.EntityNotFoundError | Error.EntityConflictError;

    interface EntityNotFoundError {
        errorName: "EntityNotFoundError";
        content: EntityNotFoundErrorMessage.Raw;
    }

    interface EntityConflictError {
        errorName: "EntityConflictError";
        content: EntityConflictErrorMessage.Raw;
    }
}
