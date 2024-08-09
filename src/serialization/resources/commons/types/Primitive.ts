/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";

export const Primitive: core.serialization.Schema<serializers.Primitive.Raw, CandidApi.Primitive> =
    core.serialization.enum_(["BOOLEAN", "DOUBLE", "INTEGER", "STRING"]);

export declare namespace Primitive {
    type Raw = "BOOLEAN" | "DOUBLE" | "INTEGER" | "STRING";
}