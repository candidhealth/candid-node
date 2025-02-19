/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { NotImplementedErrorMessage } from "../../../../commons/types/NotImplementedErrorMessage";

export const Error: core.serialization.Schema<
    serializers.chargeCaptureBundles.v1.getAll.Error.Raw,
    CandidApi.chargeCaptureBundles.v1.getAll.Error
> = core.serialization
    .union("errorName", {
        NotImplementedError: core.serialization.object({
            content: NotImplementedErrorMessage,
        }),
    })
    .transform<CandidApi.chargeCaptureBundles.v1.getAll.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "NotImplementedError":
                    return CandidApi.chargeCaptureBundles.v1.getAll.Error.notImplementedError(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    export type Raw = Error.NotImplementedError;

    export interface NotImplementedError {
        errorName: "NotImplementedError";
        content: NotImplementedErrorMessage.Raw;
    }
}
