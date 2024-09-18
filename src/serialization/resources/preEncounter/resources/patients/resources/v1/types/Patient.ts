/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { PatientId } from "../../../../common/types/PatientId";
import { OrganizationId } from "../../../../common/types/OrganizationId";
import { UserId } from "../../../../common/types/UserId";
import { MutablePatient } from "./MutablePatient";

export const Patient: core.serialization.ObjectSchema<
    serializers.preEncounter.patients.v1.Patient.Raw,
    CandidApi.preEncounter.patients.v1.Patient
> = core.serialization
    .object({
        id: PatientId,
        mrn: core.serialization.string(),
        organizationId: core.serialization.property("organization_id", OrganizationId),
        deactivated: core.serialization.boolean(),
        version: core.serialization.number(),
        updatedAt: core.serialization.property("updated_at", core.serialization.date()),
        updatingUserId: core.serialization.property("updating_user_id", UserId),
    })
    .extend(MutablePatient);

export declare namespace Patient {
    interface Raw extends MutablePatient.Raw {
        id: PatientId.Raw;
        mrn: string;
        organization_id: OrganizationId.Raw;
        deactivated: boolean;
        version: number;
        updated_at: string;
        updating_user_id: UserId.Raw;
    }
}
