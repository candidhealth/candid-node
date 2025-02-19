/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Relationship: core.serialization.Schema<
    serializers.preEncounter.Relationship.Raw,
    CandidApi.preEncounter.Relationship
> = core.serialization.enum_(["SELF", "SPOUSE", "CHILD", "COMMON_LAW_SPOUSE", "OTHER"]);

export declare namespace Relationship {
    export type Raw = "SELF" | "SPOUSE" | "CHILD" | "COMMON_LAW_SPOUSE" | "OTHER";
}
