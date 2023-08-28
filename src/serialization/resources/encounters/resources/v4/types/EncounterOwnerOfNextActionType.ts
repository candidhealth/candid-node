/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const EncounterOwnerOfNextActionType: core.serialization.Schema<
    serializers.encounters.v4.EncounterOwnerOfNextActionType.Raw,
    CandidApi.encounters.v4.EncounterOwnerOfNextActionType
> = core.serialization.enum_(["CANDID", "CUSTOMER", "CODER", "NONE"]);

export declare namespace EncounterOwnerOfNextActionType {
    type Raw = "CANDID" | "CUSTOMER" | "CODER" | "NONE";
}