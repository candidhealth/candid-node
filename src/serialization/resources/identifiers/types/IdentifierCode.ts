/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";

export const IdentifierCode: core.serialization.Schema<serializers.IdentifierCode.Raw, CandidApi.IdentifierCode> =
    core.serialization.enum_(["MCR", "MCD"]);

export declare namespace IdentifierCode {
    export type Raw = "MCR" | "MCD";
}
