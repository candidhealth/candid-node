/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { VersionConflictErrorBody } from "../../../../common/types/VersionConflictErrorBody";

export const Error: core.serialization.Schema<
    serializers.preEncounter.patients.v1.create.Error.Raw,
    CandidApi.preEncounter.patients.v1.create.Error
> = core.serialization
    .union("errorName", {
        VersionConflictError: core.serialization.object({
            content: VersionConflictErrorBody,
        }),
    })
    .transform<CandidApi.preEncounter.patients.v1.create.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "VersionConflictError":
                    return CandidApi.preEncounter.patients.v1.create.Error.versionConflictError(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    type Raw = Error.VersionConflictError;

    interface VersionConflictError {
        errorName: "VersionConflictError";
        content: VersionConflictErrorBody.Raw;
    }
}
