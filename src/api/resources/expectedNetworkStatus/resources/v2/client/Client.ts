/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import urlJoin from "url-join";

export declare namespace V2 {
    export interface Options {
        environment?: core.Supplier<environments.CandidApiEnvironment | environments.CandidApiEnvironmentUrls>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class V2 {
    constructor(protected readonly _options: V2.Options = {}) {}

    /**
     * Computes the expected network status for a given rendering provider.
     * This endpoint is not available to all customers. Reach out to the Candid sales team
     * to discuss enabling this endpoint if it is not available for your organization.
     *
     * @param {CandidApi.organizationProviders.v2.OrganizationProviderId} renderingProviderId
     * @param {CandidApi.expectedNetworkStatus.v2.ExpectedNetworkStatusRequestV2} request
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.expectedNetworkStatus.v2.computeForRenderingProvider(CandidApi.organizationProviders.v2.OrganizationProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
     *         serviceType: "new_patient_video_appt",
     *         placeOfServiceCode: "01",
     *         subscriberInformation: {
     *             payerUuid: CandidApi.payers.v3.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *             memberId: "string",
     *             insuranceType: {
     *                 lineOfBusiness: "medicare",
     *                 insuranceTypeCodes: {
     *                     type: "insurance_type_code",
     *                     value: "01"
     *                 }
     *             }
     *         },
     *         patientAddress: {
     *             address1: "123 Main St",
     *             address2: "Apt 1",
     *             city: "New York",
     *             state: "NY",
     *             zipCode: "10001",
     *             zipPlusFourCode: "1234"
     *         },
     *         billingProviderId: CandidApi.organizationProviders.v2.OrganizationProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         organizationServiceFacilityId: CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacilityId("30F55EE6-8C0E-43FC-A7FC-DAC00D5BF569"),
     *         dateOfService: "2023-01-15"
     *     })
     */
    public async computeForRenderingProvider(
        renderingProviderId: CandidApi.organizationProviders.v2.OrganizationProviderId,
        request: CandidApi.expectedNetworkStatus.v2.ExpectedNetworkStatusRequestV2,
        requestOptions?: V2.RequestOptions,
    ): Promise<
        core.APIResponse<
            CandidApi.expectedNetworkStatus.v2.ExpectedNetworkStatusResponseV2,
            CandidApi.expectedNetworkStatus.v2.computeForRenderingProvider.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                `/api/expected-network-status/v2/compute/${encodeURIComponent(serializers.organizationProviders.v2.OrganizationProviderId.jsonOrThrow(renderingProviderId))}`,
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.41.0",
                "User-Agent": "candidhealth/0.41.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.expectedNetworkStatus.v2.ExpectedNetworkStatusRequestV2.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.expectedNetworkStatus.v2.ExpectedNetworkStatusResponseV2.parseOrThrow(
                    _response.body,
                    {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        breadcrumbsPrefix: ["response"],
                    },
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
                        error: serializers.expectedNetworkStatus.v2.computeForRenderingProvider.Error.parseOrThrow(
                            _response.error
                                .body as serializers.expectedNetworkStatus.v2.computeForRenderingProvider.Error.Raw,
                            {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                breadcrumbsPrefix: ["response"],
                            },
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
     *
     * @param {CandidApi.expectedNetworkStatus.v2.ComputeAllInNetworkProvidersRequest} request
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.expectedNetworkStatus.v2.computeAllInNetworkProviders({
     *         serviceType: "new_patient_video_appt",
     *         placeOfServiceCode: "01",
     *         subscriberInformation: {
     *             payerUuid: CandidApi.payers.v3.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *             memberId: "string",
     *             insuranceType: {
     *                 lineOfBusiness: "medicare",
     *                 insuranceTypeCodes: {
     *                     type: "insurance_type_code",
     *                     value: "01"
     *                 }
     *             }
     *         },
     *         patientAddress: {
     *             address1: "123 Main St",
     *             address2: "Apt 1",
     *             city: "New York",
     *             state: "NY",
     *             zipCode: "10001",
     *             zipPlusFourCode: "1234"
     *         },
     *         billingProviderId: CandidApi.organizationProviders.v2.OrganizationProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         organizationServiceFacilityId: CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacilityId("30F55EE6-8C0E-43FC-A7FC-DAC00D5BF569"),
     *         dateOfService: "2023-01-15"
     *     })
     */
    public async computeAllInNetworkProviders(
        request: CandidApi.expectedNetworkStatus.v2.ComputeAllInNetworkProvidersRequest,
        requestOptions?: V2.RequestOptions,
    ): Promise<
        core.APIResponse<
            CandidApi.expectedNetworkStatus.v2.ComputeAllInNetworkProvidersResponse,
            CandidApi.expectedNetworkStatus.v2.computeAllInNetworkProviders.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                "/api/expected-network-status/v2/compute",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.41.0",
                "User-Agent": "candidhealth/0.41.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.expectedNetworkStatus.v2.ComputeAllInNetworkProvidersRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.expectedNetworkStatus.v2.ComputeAllInNetworkProvidersResponse.parseOrThrow(
                    _response.body,
                    {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        breadcrumbsPrefix: ["response"],
                    },
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
                        error: serializers.expectedNetworkStatus.v2.computeAllInNetworkProviders.Error.parseOrThrow(
                            _response.error
                                .body as serializers.expectedNetworkStatus.v2.computeAllInNetworkProviders.Error.Raw,
                            {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                breadcrumbsPrefix: ["response"],
                            },
                        ),
                    };
            }
        }

        return {
            ok: false,
            error: CandidApi.expectedNetworkStatus.v2.computeAllInNetworkProviders.Error._unknown(_response.error),
        };
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
