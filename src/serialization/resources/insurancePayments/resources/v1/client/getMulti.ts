/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { UnauthorizedErrorMessage } from "../../../../commons/types/UnauthorizedErrorMessage";
import { UnprocessableEntityErrorMessage } from "../../../../commons/types/UnprocessableEntityErrorMessage";

export const Error: core.serialization.Schema<
    serializers.insurancePayments.v1.getMulti.Error.Raw,
    CandidApi.insurancePayments.v1.getMulti.Error
> = core.serialization
    .union("errorName", {
        UnauthorizedError: core.serialization.object({
            content: UnauthorizedErrorMessage,
        }),
        UnprocessableEntityError: core.serialization.object({
            content: UnprocessableEntityErrorMessage,
        }),
    })
    .transform<CandidApi.insurancePayments.v1.getMulti.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "UnauthorizedError":
                    return CandidApi.insurancePayments.v1.getMulti.Error.unauthorizedError(value.content);
                case "UnprocessableEntityError":
                    return CandidApi.insurancePayments.v1.getMulti.Error.unprocessableEntityError(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    export type Raw = Error.UnauthorizedError | Error.UnprocessableEntityError;

    export interface UnauthorizedError {
        errorName: "UnauthorizedError";
        content: UnauthorizedErrorMessage.Raw;
    }

    export interface UnprocessableEntityError {
        errorName: "UnprocessableEntityError";
        content: UnprocessableEntityErrorMessage.Raw;
    }
}
