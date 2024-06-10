/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { RequestValidationError } from "../../../../commons/types/RequestValidationError";

export const Error: core.serialization.Schema<
    serializers.eligibility.v2.submitEligibilityCheckAvailityPost.Error.Raw,
    CandidApi.eligibility.v2.submitEligibilityCheckAvailityPost.Error
> = core.serialization
    .union("errorName", {
        HttpRequestValidationError: core.serialization.object({
            content: RequestValidationError,
        }),
    })
    .transform<CandidApi.eligibility.v2.submitEligibilityCheckAvailityPost.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "HttpRequestValidationError":
                    return CandidApi.eligibility.v2.submitEligibilityCheckAvailityPost.Error.httpRequestValidationError(
                        value.content
                    );
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    type Raw = Error.HttpRequestValidationError;

    interface HttpRequestValidationError {
        errorName: "HttpRequestValidationError";
        content: RequestValidationError.Raw;
    }
}
