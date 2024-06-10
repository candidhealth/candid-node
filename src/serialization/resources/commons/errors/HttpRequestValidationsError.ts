/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";
import { RequestValidationError } from "../types/RequestValidationError";

export const HttpRequestValidationsError: core.serialization.Schema<
    serializers.HttpRequestValidationsError.Raw,
    CandidApi.RequestValidationError[]
> = core.serialization.list(RequestValidationError);

export declare namespace HttpRequestValidationsError {
    type Raw = RequestValidationError.Raw[];
}
