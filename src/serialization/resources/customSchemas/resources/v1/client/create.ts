/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { SchemaValidationFailure } from "../types/SchemaValidationFailure";

export const Error: core.serialization.Schema<
    serializers.customSchemas.v1.create.Error.Raw,
    CandidApi.customSchemas.v1.create.Error
> = core.serialization
    .union("errorName", {
        SchemaValidationHttpFailure: core.serialization.object({
            content: SchemaValidationFailure,
        }),
    })
    .transform<CandidApi.customSchemas.v1.create.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "SchemaValidationHttpFailure":
                    return CandidApi.customSchemas.v1.create.Error.schemaValidationHttpFailure(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    export type Raw = Error.SchemaValidationHttpFailure;

    export interface SchemaValidationHttpFailure {
        errorName: "SchemaValidationHttpFailure";
        content: SchemaValidationFailure.Raw;
    }
}
