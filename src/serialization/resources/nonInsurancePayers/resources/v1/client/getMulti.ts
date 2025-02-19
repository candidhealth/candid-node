/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { UnprocessableEntityErrorMessage } from "../../../../commons/types/UnprocessableEntityErrorMessage";

export const Error: core.serialization.Schema<
    serializers.nonInsurancePayers.v1.getMulti.Error.Raw,
    CandidApi.nonInsurancePayers.v1.getMulti.Error
> = core.serialization
    .union("errorName", {
        UnprocessableEntityError: core.serialization.object({
            content: UnprocessableEntityErrorMessage,
        }),
    })
    .transform<CandidApi.nonInsurancePayers.v1.getMulti.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "UnprocessableEntityError":
                    return CandidApi.nonInsurancePayers.v1.getMulti.Error.unprocessableEntityError(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    export type Raw = Error.UnprocessableEntityError;

    export interface UnprocessableEntityError {
        errorName: "UnprocessableEntityError";
        content: UnprocessableEntityErrorMessage.Raw;
    }
}
