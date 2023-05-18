/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const Patient: core.serialization.ObjectSchema<serializers.Patient.Raw, CandidApi.Patient> = core.serialization
    .object({
        individualId: core.serialization.property(
            "individual_id",
            core.serialization.lazy(async () => (await import("../../..")).IndividualId)
        ),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).PatientCreate));

export declare namespace Patient {
    interface Raw extends serializers.PatientCreate.Raw {
        individual_id: serializers.IndividualId.Raw;
    }
}
