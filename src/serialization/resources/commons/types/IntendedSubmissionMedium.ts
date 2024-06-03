/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";

export const IntendedSubmissionMedium: core.serialization.Schema<
    serializers.IntendedSubmissionMedium.Raw,
    CandidApi.IntendedSubmissionMedium
> = core.serialization.enum_(["paper", "electronic"]);

export declare namespace IntendedSubmissionMedium {
    type Raw = "paper" | "electronic";
}
