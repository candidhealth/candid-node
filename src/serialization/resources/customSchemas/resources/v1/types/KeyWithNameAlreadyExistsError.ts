/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Primitive } from "../../../../commons/types/Primitive";

export const KeyWithNameAlreadyExistsError: core.serialization.ObjectSchema<
    serializers.customSchemas.v1.KeyWithNameAlreadyExistsError.Raw,
    CandidApi.customSchemas.v1.KeyWithNameAlreadyExistsError
> = core.serialization.object({
    key: core.serialization.string(),
    valueType: core.serialization.property("value_type", Primitive),
});

export declare namespace KeyWithNameAlreadyExistsError {
    export interface Raw {
        key: string;
        value_type: Primitive.Raw;
    }
}
