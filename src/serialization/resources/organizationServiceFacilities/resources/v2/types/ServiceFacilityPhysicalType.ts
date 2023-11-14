/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const ServiceFacilityPhysicalType: core.serialization.Schema<
    serializers.organizationServiceFacilities.v2.ServiceFacilityPhysicalType.Raw,
    CandidApi.organizationServiceFacilities.v2.ServiceFacilityPhysicalType
> = core.serialization.enum_(["si", "bu", "wi", "wa", "lvl", "co", "ro", "bd", "ve", "ho", "ca", "rd", "area", "jdn"]);

export declare namespace ServiceFacilityPhysicalType {
    type Raw = "si" | "bu" | "wi" | "wa" | "lvl" | "co" | "ro" | "bd" | "ve" | "ho" | "ca" | "rd" | "area" | "jdn";
}