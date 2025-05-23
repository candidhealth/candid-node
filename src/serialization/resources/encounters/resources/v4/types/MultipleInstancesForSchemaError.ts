/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { SchemaId } from "../../../../commons/types/SchemaId";

export const MultipleInstancesForSchemaError: core.serialization.ObjectSchema<
    serializers.encounters.v4.MultipleInstancesForSchemaError.Raw,
    CandidApi.encounters.v4.MultipleInstancesForSchemaError
> = core.serialization.object({
    schemaId: core.serialization.property("schema_id", SchemaId),
});

export declare namespace MultipleInstancesForSchemaError {
    export interface Raw {
        schema_id: SchemaId.Raw;
    }
}
