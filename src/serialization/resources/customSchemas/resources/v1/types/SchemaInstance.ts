/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { SchemaId } from "../../../../commons/types/SchemaId";

export const SchemaInstance: core.serialization.ObjectSchema<
    serializers.customSchemas.v1.SchemaInstance.Raw,
    CandidApi.customSchemas.v1.SchemaInstance
> = core.serialization.object({
    schemaId: core.serialization.property("schema_id", SchemaId),
    content: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
});

export declare namespace SchemaInstance {
    export interface Raw {
        schema_id: SchemaId.Raw;
        content: Record<string, unknown>;
    }
}
