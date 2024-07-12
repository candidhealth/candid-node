/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const AddressUse: core.serialization.Schema<
    serializers.preEncounter.AddressUse.Raw,
    CandidApi.preEncounter.AddressUse
> = core.serialization.enum_(["HOME", "WORK", "TEMP", "OLD", "BILLING"]);

export declare namespace AddressUse {
    type Raw = "HOME" | "WORK" | "TEMP" | "OLD" | "BILLING";
}
