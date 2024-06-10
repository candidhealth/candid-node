/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const Era: core.serialization.ObjectSchema<serializers.Era.Raw, CandidApi.Era> = core.serialization
    .object({
        eraId: core.serialization.property(
            "era_id",
            core.serialization.lazy(async () => (await import("../../..")).EraId)
        ),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).EraBase));

export declare namespace Era {
    interface Raw extends serializers.EraBase.Raw {
        era_id: serializers.EraId.Raw;
    }
}
