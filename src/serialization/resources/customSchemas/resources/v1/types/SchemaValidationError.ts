/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { SchemaWithNameAlreadyExistsError } from "./SchemaWithNameAlreadyExistsError";
import { KeyWithNameAlreadyExistsError } from "./KeyWithNameAlreadyExistsError";

export const SchemaValidationError: core.serialization.Schema<
    serializers.customSchemas.v1.SchemaValidationError.Raw,
    CandidApi.customSchemas.v1.SchemaValidationError
> = core.serialization
    .union("type", {
        schema_name_already_exists: SchemaWithNameAlreadyExistsError,
        key_name_already_exists: KeyWithNameAlreadyExistsError,
    })
    .transform<CandidApi.customSchemas.v1.SchemaValidationError>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace SchemaValidationError {
    export type Raw = SchemaValidationError.SchemaNameAlreadyExists | SchemaValidationError.KeyNameAlreadyExists;

    export interface SchemaNameAlreadyExists extends SchemaWithNameAlreadyExistsError.Raw {
        type: "schema_name_already_exists";
    }

    export interface KeyNameAlreadyExists extends KeyWithNameAlreadyExistsError.Raw {
        type: "key_name_already_exists";
    }
}
