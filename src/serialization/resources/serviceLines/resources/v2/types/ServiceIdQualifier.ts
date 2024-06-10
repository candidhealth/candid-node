/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const ServiceIdQualifier: core.serialization.Schema<
    serializers.serviceLines.v2.ServiceIdQualifier.Raw,
    CandidApi.serviceLines.v2.ServiceIdQualifier
> = core.serialization.enum_(["EN", "EO", "HI", "N4", "ON", "UK", "UP"]);

export declare namespace ServiceIdQualifier {
    type Raw = "EN" | "EO" | "HI" | "N4" | "ON" | "UK" | "UP";
}
