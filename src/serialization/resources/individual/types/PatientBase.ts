/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";
import { Date_ } from "../../commons/types/Date_";
import { StreetAddressShortZip } from "../../commons/types/StreetAddressShortZip";
import { IndividualBase } from "./IndividualBase";

export const PatientBase: core.serialization.ObjectSchema<serializers.PatientBase.Raw, CandidApi.PatientBase> =
    core.serialization
        .object({
            externalId: core.serialization.property("external_id", core.serialization.string()),
            dateOfBirth: core.serialization.property("date_of_birth", Date_),
            address: StreetAddressShortZip,
        })
        .extend(IndividualBase);

export declare namespace PatientBase {
    interface Raw extends IndividualBase.Raw {
        external_id: string;
        date_of_birth: Date_.Raw;
        address: StreetAddressShortZip.Raw;
    }
}
