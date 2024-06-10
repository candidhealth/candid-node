/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const ServiceFacilityOperationalStatus: core.serialization.Schema<
    serializers.organizationServiceFacilities.v2.ServiceFacilityOperationalStatus.Raw,
    CandidApi.organizationServiceFacilities.v2.ServiceFacilityOperationalStatus
> = core.serialization.enum_(["C", "H", "I", "K", "O", "U"]);

export declare namespace ServiceFacilityOperationalStatus {
    type Raw = "C" | "H" | "I" | "K" | "O" | "U";
}
