/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { SchemaId } from "../../../../commons/types/SchemaId";

export const SchemaInstanceOptional: core.serialization.ObjectSchema<
    serializers.customSchemas.v1.SchemaInstanceOptional.Raw,
    CandidApi.customSchemas.v1.SchemaInstanceOptional
> = core.serialization.object({
    schemaId: core.serialization.property("schema_id", SchemaId.optional()),
    content: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace SchemaInstanceOptional {
    export interface Raw {
        schema_id?: SchemaId.Raw | null;
        content?: Record<string, unknown> | null;
    }
}
