/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { CandidApi } from "";
import * as core from "../../../../../../core";

export const EmploymentStatus: core.serialization.Schema<
    serializers.organizationProviders.v2.EmploymentStatus.Raw,
    CandidApi.organizationProviders.v2.EmploymentStatus
> = core.serialization.enum_(["ACTIVE", "TERMINATED"]);

export declare namespace EmploymentStatus {
    type Raw = "ACTIVE" | "TERMINATED";
}
