/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { CandidApi } from "";
import * as core from "../../../../../../core";

export const GenerateClinicalNotesPdfResponse: core.serialization.Schema<
    serializers.encounters.v3.GenerateClinicalNotesPdfResponse.Raw,
    CandidApi.encounters.v3.GenerateClinicalNotesPdfResponse
> = core.serialization
    .union("result", {
        success: core.serialization.lazyObject(
            async () => (await import("../../../../..")).encounters.v3.SuccessfulGenerateClinicalNotesPdfResponse
        ),
    })
    .transform<CandidApi.encounters.v3.GenerateClinicalNotesPdfResponse>({
        transform: (value) => {
            switch (value.result) {
                case "success":
                    return CandidApi.encounters.v3.GenerateClinicalNotesPdfResponse.success(value);
                default:
                    return CandidApi.encounters.v3.GenerateClinicalNotesPdfResponse._unknown(value);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace GenerateClinicalNotesPdfResponse {
    type Raw = GenerateClinicalNotesPdfResponse.Success;

    interface Success extends serializers.encounters.v3.SuccessfulGenerateClinicalNotesPdfResponse.Raw {
        result: "success";
    }
}
