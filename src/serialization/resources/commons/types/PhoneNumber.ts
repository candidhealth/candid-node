/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const PhoneNumber: core.serialization.ObjectSchema<serializers.PhoneNumber.Raw, CandidApi.PhoneNumber> =
    core.serialization.object({
        number: core.serialization.string(),
        type: core.serialization.lazy(async () => (await import("../../..")).PhoneNumberType),
    });

export declare namespace PhoneNumber {
    interface Raw {
        number: string;
        type: serializers.PhoneNumberType.Raw;
    }
}
