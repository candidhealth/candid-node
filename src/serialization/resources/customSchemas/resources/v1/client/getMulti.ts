/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { UnauthorizedErrorMessage } from "../../../../commons/types/UnauthorizedErrorMessage";

export const Error: core.serialization.Schema<
    serializers.customSchemas.v1.getMulti.Error.Raw,
    CandidApi.customSchemas.v1.getMulti.Error
> = core.serialization
    .union("errorName", {
        UnauthorizedError: core.serialization.object({
            content: UnauthorizedErrorMessage,
        }),
    })
    .transform<CandidApi.customSchemas.v1.getMulti.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "UnauthorizedError":
                    return CandidApi.customSchemas.v1.getMulti.Error.unauthorizedError(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    export type Raw = Error.UnauthorizedError;

    export interface UnauthorizedError {
        errorName: "UnauthorizedError";
        content: UnauthorizedErrorMessage.Raw;
    }
}
