/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { ErrorBase4Xx } from "../../../../common/types/ErrorBase4Xx";

export const Error: core.serialization.Schema<
    serializers.preEncounter.images.v1.get.Error.Raw,
    CandidApi.preEncounter.images.v1.get.Error
> = core.serialization
    .union("errorName", {
        NotFoundError: core.serialization.object({
            content: ErrorBase4Xx,
        }),
    })
    .transform<CandidApi.preEncounter.images.v1.get.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "NotFoundError":
                    return CandidApi.preEncounter.images.v1.get.Error.notFoundError(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    export type Raw = Error.NotFoundError;

    export interface NotFoundError {
        errorName: "NotFoundError";
        content: ErrorBase4Xx.Raw;
    }
}
