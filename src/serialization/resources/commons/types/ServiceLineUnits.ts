/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";

export const ServiceLineUnits: core.serialization.Schema<serializers.ServiceLineUnits.Raw, CandidApi.ServiceLineUnits> =
    core.serialization.enum_(["MJ", "UN"]);

export declare namespace ServiceLineUnits {
    export type Raw = "MJ" | "UN";
}
