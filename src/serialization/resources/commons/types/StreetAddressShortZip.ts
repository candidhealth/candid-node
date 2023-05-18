/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const StreetAddressShortZip: core.serialization.ObjectSchema<
    serializers.StreetAddressShortZip.Raw,
    CandidApi.StreetAddressShortZip
> = core.serialization
    .object({
        zipPlusFourCode: core.serialization.property("zip_plus_four_code", core.serialization.string().optional()),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).StreetAddressBase));

export declare namespace StreetAddressShortZip {
    interface Raw extends serializers.StreetAddressBase.Raw {
        zip_plus_four_code?: string | null;
    }
}
