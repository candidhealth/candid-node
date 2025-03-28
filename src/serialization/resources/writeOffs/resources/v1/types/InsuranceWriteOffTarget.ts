/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ServiceLineId } from "../../../../commons/types/ServiceLineId";
import { ClaimId } from "../../../../commons/types/ClaimId";
import { ProviderId } from "../../../../commons/types/ProviderId";

export const InsuranceWriteOffTarget: core.serialization.Schema<
    serializers.writeOffs.v1.InsuranceWriteOffTarget.Raw,
    CandidApi.writeOffs.v1.InsuranceWriteOffTarget
> = core.serialization
    .union("type", {
        service_line_id: core.serialization.object({
            value: ServiceLineId,
        }),
        claim_id: core.serialization.object({
            value: ClaimId,
        }),
        billing_provider_id: core.serialization.object({
            value: ProviderId,
        }),
    })
    .transform<CandidApi.writeOffs.v1.InsuranceWriteOffTarget>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace InsuranceWriteOffTarget {
    export type Raw =
        | InsuranceWriteOffTarget.ServiceLineId
        | InsuranceWriteOffTarget.ClaimId
        | InsuranceWriteOffTarget.BillingProviderId;

    export interface ServiceLineId {
        type: "service_line_id";
        value: ServiceLineId.Raw;
    }

    export interface ClaimId {
        type: "claim_id";
        value: ClaimId.Raw;
    }

    export interface BillingProviderId {
        type: "billing_provider_id";
        value: ProviderId.Raw;
    }
}
