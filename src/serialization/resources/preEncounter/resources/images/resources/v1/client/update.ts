/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { ErrorBase4Xx } from "../../../../common/types/ErrorBase4Xx";
import { VersionConflictErrorBody } from "../../../../common/types/VersionConflictErrorBody";

export const Error: core.serialization.Schema<
    serializers.preEncounter.images.v1.update.Error.Raw,
    CandidApi.preEncounter.images.v1.update.Error
> = core.serialization
    .union("errorName", {
        NotFoundError: core.serialization.object({
            content: ErrorBase4Xx,
        }),
        VersionConflictError: core.serialization.object({
            content: VersionConflictErrorBody,
        }),
    })
    .transform<CandidApi.preEncounter.images.v1.update.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "NotFoundError":
                    return CandidApi.preEncounter.images.v1.update.Error.notFoundError(value.content);
                case "VersionConflictError":
                    return CandidApi.preEncounter.images.v1.update.Error.versionConflictError(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    export type Raw = Error.NotFoundError | Error.VersionConflictError;

    export interface NotFoundError {
        errorName: "NotFoundError";
        content: ErrorBase4Xx.Raw;
    }

    export interface VersionConflictError {
        errorName: "VersionConflictError";
        content: VersionConflictErrorBody.Raw;
    }
}
