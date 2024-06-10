/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { StreetAddressShortZip } from "../../../../commons/types/StreetAddressShortZip";

export const GuarantorBase: core.serialization.ObjectSchema<
    serializers.guarantor.v1.GuarantorBase.Raw,
    CandidApi.guarantor.v1.GuarantorBase
> = core.serialization.object({
    firstName: core.serialization.property("first_name", core.serialization.string()),
    lastName: core.serialization.property("last_name", core.serialization.string()),
    externalId: core.serialization.property("external_id", core.serialization.string()),
    dateOfBirth: core.serialization.property("date_of_birth", core.serialization.string().optional()),
    address: StreetAddressShortZip.optional(),
});

export declare namespace GuarantorBase {
    interface Raw {
        first_name: string;
        last_name: string;
        external_id: string;
        date_of_birth?: string | null;
        address?: StreetAddressShortZip.Raw | null;
    }
}
