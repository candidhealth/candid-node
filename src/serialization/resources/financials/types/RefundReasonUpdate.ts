/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const RefundReasonUpdate: core.serialization.Schema<
    serializers.RefundReasonUpdate.Raw,
    CandidApi.RefundReasonUpdate
> = core.serialization
    .union("type", {
        set: core.serialization.object({
            value: core.serialization.lazy(async () => (await import("../../..")).RefundReason),
        }),
        remove: core.serialization.object({}),
    })
    .transform<CandidApi.RefundReasonUpdate>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace RefundReasonUpdate {
    type Raw = RefundReasonUpdate.Set | RefundReasonUpdate.Remove;

    interface Set {
        type: "set";
        value: serializers.RefundReason.Raw;
    }

    interface Remove {
        type: "remove";
    }
}
