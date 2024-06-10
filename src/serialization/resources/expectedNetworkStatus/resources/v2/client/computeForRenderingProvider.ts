/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const Error: core.serialization.Schema<
    serializers.expectedNetworkStatus.v2.computeForRenderingProvider.Error.Raw,
    CandidApi.expectedNetworkStatus.v2.computeForRenderingProvider.Error
> = core.serialization
    .union("errorName", {
        ExpectedNetworkStatusCheckError: core.serialization.object({
            content: core.serialization.lazyObject(
                async () =>
                    (await import("../../../../..")).expectedNetworkStatus.v2.ExpectedNetworkStatusCheckErrorMessage
            ),
        }),
        OrganizationNotAuthorizedError: core.serialization.object({
            content: core.serialization.lazyObject(
                async () => (await import("../../../../..")).OrganizationNotAuthorizedErrorMessage
            ),
        }),
    })
    .transform<CandidApi.expectedNetworkStatus.v2.computeForRenderingProvider.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "ExpectedNetworkStatusCheckError":
                    return CandidApi.expectedNetworkStatus.v2.computeForRenderingProvider.Error.expectedNetworkStatusCheckError(
                        value.content
                    );
                case "OrganizationNotAuthorizedError":
                    return CandidApi.expectedNetworkStatus.v2.computeForRenderingProvider.Error.organizationNotAuthorizedError(
                        value.content
                    );
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    type Raw = Error.ExpectedNetworkStatusCheckError | Error.OrganizationNotAuthorizedError;

    interface ExpectedNetworkStatusCheckError {
        errorName: "ExpectedNetworkStatusCheckError";
        content: serializers.expectedNetworkStatus.v2.ExpectedNetworkStatusCheckErrorMessage.Raw;
    }

    interface OrganizationNotAuthorizedError {
        errorName: "OrganizationNotAuthorizedError";
        content: serializers.OrganizationNotAuthorizedErrorMessage.Raw;
    }
}
