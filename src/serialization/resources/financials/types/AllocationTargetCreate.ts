/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";
import { ServiceLineId } from "../../commons/types/ServiceLineId";
import { ClaimId } from "../../commons/types/ClaimId";
import { EncounterExternalId } from "../../commons/types/EncounterExternalId";
import { ProviderId } from "../../commons/types/ProviderId";
import { AppointmentId } from "../../commons/types/AppointmentId";

export const AllocationTargetCreate: core.serialization.Schema<
    serializers.AllocationTargetCreate.Raw,
    CandidApi.AllocationTargetCreate
> = core.serialization
    .union("type", {
        service_line_by_id: core.serialization.object({
            value: ServiceLineId,
        }),
        claim_by_id: core.serialization.object({
            value: ClaimId,
        }),
        claim_by_encounter_external_id: core.serialization.object({
            value: EncounterExternalId,
        }),
        billing_provider_by_id: core.serialization.object({
            value: ProviderId,
        }),
        appointment_by_id: core.serialization.object({
            value: AppointmentId,
        }),
        unattributed: core.serialization.object({}),
    })
    .transform<CandidApi.AllocationTargetCreate>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace AllocationTargetCreate {
    type Raw =
        | AllocationTargetCreate.ServiceLineById
        | AllocationTargetCreate.ClaimById
        | AllocationTargetCreate.ClaimByEncounterExternalId
        | AllocationTargetCreate.BillingProviderById
        | AllocationTargetCreate.AppointmentById
        | AllocationTargetCreate.Unattributed;

    interface ServiceLineById {
        type: "service_line_by_id";
        value: ServiceLineId.Raw;
    }

    interface ClaimById {
        type: "claim_by_id";
        value: ClaimId.Raw;
    }

    interface ClaimByEncounterExternalId {
        type: "claim_by_encounter_external_id";
        value: EncounterExternalId.Raw;
    }

    interface BillingProviderById {
        type: "billing_provider_by_id";
        value: ProviderId.Raw;
    }

    interface AppointmentById {
        type: "appointment_by_id";
        value: AppointmentId.Raw;
    }

    interface Unattributed {
        type: "unattributed";
    }
}
