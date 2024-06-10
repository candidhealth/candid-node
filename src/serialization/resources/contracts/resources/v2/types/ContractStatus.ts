/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const ContractStatus: core.serialization.Schema<
    serializers.contracts.v2.ContractStatus.Raw,
    CandidApi.contracts.v2.ContractStatus
> = core.serialization.enum_(["pending", "effective", "cancelled"]);

export declare namespace ContractStatus {
    type Raw = "pending" | "effective" | "cancelled";
}
