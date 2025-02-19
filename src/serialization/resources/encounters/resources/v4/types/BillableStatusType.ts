/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const BillableStatusType: core.serialization.Schema<
    serializers.encounters.v4.BillableStatusType.Raw,
    CandidApi.encounters.v4.BillableStatusType
> = core.serialization.enum_(["BILLABLE", "NOT_BILLABLE"]);

export declare namespace BillableStatusType {
    export type Raw = "BILLABLE" | "NOT_BILLABLE";
}
