/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { CandidApi } from "";
import * as core from "../../../../../../core";

export const CodingAttributionType: core.serialization.Schema<
    serializers.encounters.v3.CodingAttributionType.Raw,
    CandidApi.encounters.v3.CodingAttributionType
> = core.serialization.enum_(["CANDID", "CUSTOMER", "TCN"]);

export declare namespace CodingAttributionType {
    type Raw = "CANDID" | "CUSTOMER" | "TCN";
}
