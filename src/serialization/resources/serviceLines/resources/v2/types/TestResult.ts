/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const TestResult: core.serialization.Schema<
    serializers.serviceLines.v2.TestResult.Raw,
    CandidApi.serviceLines.v2.TestResult
> = core.serialization
    .union("type", {
        hematocrit: core.serialization.object({
            value: core.serialization.number(),
        }),
        hemoglobin: core.serialization.object({
            value: core.serialization.number(),
        }),
    })
    .transform<CandidApi.serviceLines.v2.TestResult>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace TestResult {
    type Raw = TestResult.Hematocrit | TestResult.Hemoglobin;

    interface Hematocrit {
        type: "hematocrit";
        value: number;
    }

    interface Hemoglobin {
        type: "hemoglobin";
        value: number;
    }
}
