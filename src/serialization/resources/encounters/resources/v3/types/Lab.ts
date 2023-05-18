/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { CandidApi } from "";
import * as core from "../../../../../../core";

export const Lab: core.serialization.ObjectSchema<serializers.encounters.v3.Lab.Raw, CandidApi.encounters.v3.Lab> =
    core.serialization.object({
        name: core.serialization.string(),
        code: core.serialization.string().optional(),
        codeType: core.serialization.property(
            "code_type",
            core.serialization.lazy(async () => (await import("../../../../..")).encounters.v3.LabCodeType).optional()
        ),
    });

export declare namespace Lab {
    interface Raw {
        name: string;
        code?: string | null;
        code_type?: serializers.encounters.v3.LabCodeType.Raw | null;
    }
}
