/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";
import { ServiceLineId } from "../../commons/types/ServiceLineId";
import { ClaimId } from "../../commons/types/ClaimId";
import { EncounterId } from "../../commons/types/EncounterId";

export const ServiceLineAllocationTarget: core.serialization.ObjectSchema<
    serializers.ServiceLineAllocationTarget.Raw,
    CandidApi.ServiceLineAllocationTarget
> = core.serialization.object({
    serviceLineId: core.serialization.property("service_line_id", ServiceLineId),
    claimId: core.serialization.property("claim_id", ClaimId),
    encounterId: core.serialization.property("encounter_id", EncounterId),
});

export declare namespace ServiceLineAllocationTarget {
    export interface Raw {
        service_line_id: ServiceLineId.Raw;
        claim_id: ClaimId.Raw;
        encounter_id: EncounterId.Raw;
    }
}
