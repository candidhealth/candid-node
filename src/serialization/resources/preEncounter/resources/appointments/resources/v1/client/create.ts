/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { VersionConflictErrorBody } from "../../../../common/types/VersionConflictErrorBody";
import { ErrorBase4Xx } from "../../../../common/types/ErrorBase4Xx";

export const Error: core.serialization.Schema<
    serializers.preEncounter.appointments.v1.create.Error.Raw,
    CandidApi.preEncounter.appointments.v1.create.Error
> = core.serialization
    .union("errorName", {
        VersionConflictError: core.serialization.object({
            content: VersionConflictErrorBody,
        }),
        NotFoundError: core.serialization.object({
            content: ErrorBase4Xx,
        }),
    })
    .transform<CandidApi.preEncounter.appointments.v1.create.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "VersionConflictError":
                    return CandidApi.preEncounter.appointments.v1.create.Error.versionConflictError(value.content);
                case "NotFoundError":
                    return CandidApi.preEncounter.appointments.v1.create.Error.notFoundError(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    export type Raw = Error.VersionConflictError | Error.NotFoundError;

    export interface VersionConflictError {
        errorName: "VersionConflictError";
        content: VersionConflictErrorBody.Raw;
    }

    export interface NotFoundError {
        errorName: "NotFoundError";
        content: ErrorBase4Xx.Raw;
    }
}
