/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../..";
import * as serializers from "../../../../../../serialization";
import urlJoin from "url-join";

export declare namespace V2 {
    interface Options {
        environment?: environments.CandidApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class V2 {
    constructor(protected readonly options: V2.Options) {}

    /**
     * Computes the expected network status for a given rendering provider.
     * This endpoint is not available to all customers. Reach out to the Candid sales team
     * to discuss enabling this endpoint if it is not available for your organization.
     */
    public async computeForRenderingProvider(
        renderingProviderId: CandidApi.organizationProviders.v2.OrganizationProviderId,
        request: CandidApi.expectedNetworkStatus.v2.ExpectedNetworkStatusRequestV2
    ): Promise<
        core.APIResponse<
            CandidApi.expectedNetworkStatus.v2.ExpectedNetworkStatusResponseV2,
            CandidApi.expectedNetworkStatus.v2.computeForRenderingProvider.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/expected-network-status/v2/compute/${await serializers.organizationProviders.v2.OrganizationProviderId.jsonOrThrow(
                    renderingProviderId
                )}`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.17.3",
            },
            contentType: "application/json",
            body: await serializers.expectedNetworkStatus.v2.ExpectedNetworkStatusRequestV2.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.expectedNetworkStatus.v2.ExpectedNetworkStatusResponseV2.parseOrThrow(
                    _response.body,
                    {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        breadcrumbsPrefix: ["response"],
                    }
                ),
            };
        }

        if (_response.error.reason === "status-code") {
            switch (
                (_response.error.body as serializers.expectedNetworkStatus.v2.computeForRenderingProvider.Error.Raw)
                    ?.errorName
            ) {
                case "ExpectedNetworkStatusCheckError":
                case "OrganizationNotAuthorizedError":
                    return {
                        ok: false,
                        error: await serializers.expectedNetworkStatus.v2.computeForRenderingProvider.Error.parseOrThrow(
                            _response.error
                                .body as serializers.expectedNetworkStatus.v2.computeForRenderingProvider.Error.Raw,
                            {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                breadcrumbsPrefix: ["response"],
                            }
                        ),
                    };
            }
        }

        return {
            ok: false,
            error: CandidApi.expectedNetworkStatus.v2.computeForRenderingProvider.Error._unknown(_response.error),
        };
    }

    /**
     * Computes all the in network providers for a given set of inputs.
     * This endpoint is not available to all customers. Reach out to the Candid sales team
     * to discuss enabling this endpoint if it is not available for your organization.
     */
    public async computeAllInNetworkProviders(
        request: CandidApi.expectedNetworkStatus.v2.ComputeAllInNetworkProvidersRequest
    ): Promise<
        core.APIResponse<
            CandidApi.expectedNetworkStatus.v2.ComputeAllInNetworkProvidersResponse,
            CandidApi.expectedNetworkStatus.v2.computeAllInNetworkProviders.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                "/api/expected-network-status/v2/compute"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.17.3",
            },
            contentType: "application/json",
            body: await serializers.expectedNetworkStatus.v2.ComputeAllInNetworkProvidersRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.expectedNetworkStatus.v2.ComputeAllInNetworkProvidersResponse.parseOrThrow(
                    _response.body,
                    {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        breadcrumbsPrefix: ["response"],
                    }
                ),
            };
        }

        if (_response.error.reason === "status-code") {
            switch (
                (_response.error.body as serializers.expectedNetworkStatus.v2.computeAllInNetworkProviders.Error.Raw)
                    ?.errorName
            ) {
                case "ExpectedNetworkStatusCheckError":
                case "OrganizationNotAuthorizedError":
                    return {
                        ok: false,
                        error: await serializers.expectedNetworkStatus.v2.computeAllInNetworkProviders.Error.parseOrThrow(
                            _response.error
                                .body as serializers.expectedNetworkStatus.v2.computeAllInNetworkProviders.Error.Raw,
                            {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                breadcrumbsPrefix: ["response"],
                            }
                        ),
                    };
            }
        }

        return {
            ok: false,
            error: CandidApi.expectedNetworkStatus.v2.computeAllInNetworkProviders.Error._unknown(_response.error),
        };
    }

    protected async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this.options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
