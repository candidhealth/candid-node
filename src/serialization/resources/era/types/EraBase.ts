/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CandidApi } from "";
import * as core from "../../../../core";

export const EraBase: core.serialization.ObjectSchema<serializers.EraBase.Raw, CandidApi.EraBase> =
    core.serialization.object({
        checkNumber: core.serialization.property("check_number", core.serialization.string()),
        checkDate: core.serialization.property(
            "check_date",
            core.serialization.lazy(async () => (await import("../../..")).Date)
        ),
    });

export declare namespace EraBase {
    interface Raw {
        check_number: string;
        check_date: serializers.Date.Raw;
    }
}
