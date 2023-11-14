/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const ServiceFacilityStatus: core.serialization.Schema<
    serializers.organizationServiceFacilities.v2.ServiceFacilityStatus.Raw,
    CandidApi.organizationServiceFacilities.v2.ServiceFacilityStatus
> = core.serialization.enum_(["active", "inactive", "suspended"]);

export declare namespace ServiceFacilityStatus {
    type Raw = "active" | "inactive" | "suspended";
}