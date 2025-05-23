/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";
import { ClaimId } from "../../commons/types/ClaimId";

export const EraNotFullyProcessedErrorMessage: core.serialization.ObjectSchema<
    serializers.EraNotFullyProcessedErrorMessage.Raw,
    CandidApi.EraNotFullyProcessedErrorMessage
> = core.serialization.object({
    claimId: core.serialization.property("claim_id", ClaimId),
    message: core.serialization.string(),
});

export declare namespace EraNotFullyProcessedErrorMessage {
    export interface Raw {
        claim_id: ClaimId.Raw;
        message: string;
    }
}
