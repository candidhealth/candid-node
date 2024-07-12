/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";

export const QualifierCode: core.serialization.Schema<serializers.QualifierCode.Raw, CandidApi.QualifierCode> =
    core.serialization.enum_(["DQ", "DN", "DK", "P3"]);

export declare namespace QualifierCode {
    type Raw = "DQ" | "DN" | "DK" | "P3";
}
