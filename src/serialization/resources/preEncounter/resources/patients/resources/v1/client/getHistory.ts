/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { Patient } from "../types/Patient";
import { ErrorBase4Xx } from "../../../../common/types/ErrorBase4Xx";

export const Response: core.serialization.Schema<
    serializers.preEncounter.patients.v1.getHistory.Response.Raw,
    CandidApi.preEncounter.patients.v1.Patient[]
> = core.serialization.list(Patient);

export declare namespace Response {
    export type Raw = Patient.Raw[];
}

export const Error: core.serialization.Schema<
    serializers.preEncounter.patients.v1.getHistory.Error.Raw,
    CandidApi.preEncounter.patients.v1.getHistory.Error
> = core.serialization
    .union("errorName", {
        NotFoundError: core.serialization.object({
            content: ErrorBase4Xx,
        }),
    })
    .transform<CandidApi.preEncounter.patients.v1.getHistory.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "NotFoundError":
                    return CandidApi.preEncounter.patients.v1.getHistory.Error.notFoundError(value.content);
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
