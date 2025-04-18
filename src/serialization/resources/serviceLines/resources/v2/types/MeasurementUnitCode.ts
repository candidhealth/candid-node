/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const MeasurementUnitCode: core.serialization.Schema<
    serializers.serviceLines.v2.MeasurementUnitCode.Raw,
    CandidApi.serviceLines.v2.MeasurementUnitCode
> = core.serialization.enum_(["ML", "UN", "GR", "F2", "ME"]);

export declare namespace MeasurementUnitCode {
    export type Raw = "ML" | "UN" | "GR" | "F2" | "ME";
}
