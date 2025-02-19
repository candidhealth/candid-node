/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ExpectedNetworkStatusCheckErrorMessage } from "../types/ExpectedNetworkStatusCheckErrorMessage";
import { OrganizationNotAuthorizedErrorMessage } from "../../../../commons/types/OrganizationNotAuthorizedErrorMessage";

export const Error: core.serialization.Schema<
    serializers.expectedNetworkStatus.v2.computeForRenderingProvider.Error.Raw,
    CandidApi.expectedNetworkStatus.v2.computeForRenderingProvider.Error
> = core.serialization
    .union("errorName", {
        ExpectedNetworkStatusCheckError: core.serialization.object({
            content: ExpectedNetworkStatusCheckErrorMessage,
        }),
        OrganizationNotAuthorizedError: core.serialization.object({
            content: OrganizationNotAuthorizedErrorMessage,
        }),
    })
    .transform<CandidApi.expectedNetworkStatus.v2.computeForRenderingProvider.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "ExpectedNetworkStatusCheckError":
                    return CandidApi.expectedNetworkStatus.v2.computeForRenderingProvider.Error.expectedNetworkStatusCheckError(
                        value.content,
                    );
                case "OrganizationNotAuthorizedError":
                    return CandidApi.expectedNetworkStatus.v2.computeForRenderingProvider.Error.organizationNotAuthorizedError(
                        value.content,
                    );
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    export type Raw = Error.ExpectedNetworkStatusCheckError | Error.OrganizationNotAuthorizedError;

    export interface ExpectedNetworkStatusCheckError {
        errorName: "ExpectedNetworkStatusCheckError";
        content: ExpectedNetworkStatusCheckErrorMessage.Raw;
    }

    export interface OrganizationNotAuthorizedError {
        errorName: "OrganizationNotAuthorizedError";
        content: OrganizationNotAuthorizedErrorMessage.Raw;
    }
}
