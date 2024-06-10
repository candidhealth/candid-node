/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const SynchronicityType: core.serialization.Schema<
    serializers.encounters.v4.SynchronicityType.Raw,
    CandidApi.encounters.v4.SynchronicityType
> = core.serialization.enum_(["Synchronous", "Asynchronous"]);

export declare namespace SynchronicityType {
    type Raw = "Synchronous" | "Asynchronous";
}
