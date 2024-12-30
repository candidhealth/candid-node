/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { UnauthorizedErrorMessage } from "../../../../commons/types/UnauthorizedErrorMessage";
import { UnprocessableEntityErrorMessage } from "../../../../commons/types/UnprocessableEntityErrorMessage";

export const Error: core.serialization.Schema<
    serializers.credentialing.v2.getAll.Error.Raw,
    CandidApi.credentialing.v2.getAll.Error
> = core.serialization
    .union("errorName", {
        UnauthorizedError: core.serialization.object({
            content: UnauthorizedErrorMessage,
        }),
        UnprocessableEntityError: core.serialization.object({
            content: UnprocessableEntityErrorMessage,
        }),
    })
    .transform<CandidApi.credentialing.v2.getAll.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "UnauthorizedError":
                    return CandidApi.credentialing.v2.getAll.Error.unauthorizedError(value.content);
                case "UnprocessableEntityError":
                    return CandidApi.credentialing.v2.getAll.Error.unprocessableEntityError(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    type Raw = Error.UnauthorizedError | Error.UnprocessableEntityError;

    interface UnauthorizedError {
        errorName: "UnauthorizedError";
        content: UnauthorizedErrorMessage.Raw;
    }

    interface UnprocessableEntityError {
        errorName: "UnprocessableEntityError";
        content: UnprocessableEntityErrorMessage.Raw;
    }
}