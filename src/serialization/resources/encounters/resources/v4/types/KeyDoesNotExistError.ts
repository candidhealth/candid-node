/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { SchemaId } from "../../../../commons/types/SchemaId";

export const KeyDoesNotExistError: core.serialization.ObjectSchema<
    serializers.encounters.v4.KeyDoesNotExistError.Raw,
    CandidApi.encounters.v4.KeyDoesNotExistError
> = core.serialization.object({
    key: core.serialization.string(),
    schemaId: core.serialization.property("schema_id", SchemaId),
});

export declare namespace KeyDoesNotExistError {
    export interface Raw {
        key: string;
        schema_id: SchemaId.Raw;
    }
}
