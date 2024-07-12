/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { NotFoundErrorBody } from "../../common/types/NotFoundErrorBody";
import { VersionConflictErrorBody } from "../../common/types/VersionConflictErrorBody";

export const Error: core.serialization.Schema<
    serializers.preEncounter.patients.update.Error.Raw,
    CandidApi.preEncounter.patients.update.Error
> = core.serialization
    .union("errorName", {
        NotFoundError: core.serialization.object({
            content: NotFoundErrorBody,
        }),
        VersionConflictError: core.serialization.object({
            content: VersionConflictErrorBody,
        }),
    })
    .transform<CandidApi.preEncounter.patients.update.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "NotFoundError":
                    return CandidApi.preEncounter.patients.update.Error.notFoundError(value.content);
                case "VersionConflictError":
                    return CandidApi.preEncounter.patients.update.Error.versionConflictError(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    type Raw = Error.NotFoundError | Error.VersionConflictError;

    interface NotFoundError {
        errorName: "NotFoundError";
        content: NotFoundErrorBody.Raw;
    }

    interface VersionConflictError {
        errorName: "VersionConflictError";
        content: VersionConflictErrorBody.Raw;
    }
}
