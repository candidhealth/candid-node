/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { TestResultType } from "./TestResultType";

export const TestResult: core.serialization.ObjectSchema<
    serializers.serviceLines.v2.TestResult.Raw,
    CandidApi.serviceLines.v2.TestResult
> = core.serialization.object({
    value: core.serialization.number(),
    resultType: core.serialization.property("result_type", TestResultType),
});

export declare namespace TestResult {
    interface Raw {
        value: number;
        result_type: TestResultType.Raw;
    }
}
