/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { EntityNotFoundErrorMessage } from "../../../../commons/types/EntityNotFoundErrorMessage";
import { UnprocessableEntityErrorMessage } from "../../../../commons/types/UnprocessableEntityErrorMessage";

export const Error: core.serialization.Schema<
    serializers.thirdPartyPayerPayments.v1.delete.Error.Raw,
    CandidApi.thirdPartyPayerPayments.v1.delete.Error
> = core.serialization
    .union("errorName", {
        EntityNotFoundError: core.serialization.object({
            content: EntityNotFoundErrorMessage,
        }),
        UnprocessableEntityError: core.serialization.object({
            content: UnprocessableEntityErrorMessage,
        }),
    })
    .transform<CandidApi.thirdPartyPayerPayments.v1.delete.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "EntityNotFoundError":
                    return CandidApi.thirdPartyPayerPayments.v1.delete.Error.entityNotFoundError(value.content);
                case "UnprocessableEntityError":
                    return CandidApi.thirdPartyPayerPayments.v1.delete.Error.unprocessableEntityError(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    type Raw = Error.EntityNotFoundError | Error.UnprocessableEntityError;

    interface EntityNotFoundError {
        errorName: "EntityNotFoundError";
        content: EntityNotFoundErrorMessage.Raw;
    }

    interface UnprocessableEntityError {
        errorName: "UnprocessableEntityError";
        content: UnprocessableEntityErrorMessage.Raw;
    }
}
