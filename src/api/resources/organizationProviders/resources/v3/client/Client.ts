/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import urlJoin from "url-join";

export declare namespace V3 {
    interface Options {
        environment?: core.Supplier<environments.CandidApiEnvironment | environments.CandidApiEnvironmentUrls>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class V3 {
    constructor(protected readonly _options: V3.Options = {}) {}

    /**
     * @param {CandidApi.organizationProviders.v2.OrganizationProviderId} organizationProviderId
     * @param {V3.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.organizationProviders.v3.get(CandidApi.organizationProviders.v2.OrganizationProviderId("965A563A-0285-4910-9569-E3739C0F6EAB"))
     */
    public async get(
        organizationProviderId: CandidApi.organizationProviders.v2.OrganizationProviderId,
        requestOptions?: V3.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.organizationProviders.v3.OrganizationProviderV2,
            CandidApi.organizationProviders.v3.get.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/organization-providers/v3/${encodeURIComponent(
                    serializers.organizationProviders.v2.OrganizationProviderId.jsonOrThrow(organizationProviderId)
                )}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.34.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.organizationProviders.v3.OrganizationProviderV2.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.organizationProviders.v3.get.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                    return {
                        ok: false,
                        error: serializers.organizationProviders.v3.get.Error.parseOrThrow(
                            _response.error.body as serializers.organizationProviders.v3.get.Error.Raw,
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
            error: CandidApi.organizationProviders.v3.get.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.organizationProviders.v3.GetAllOrganizationProvidersRequestV2} request
     * @param {V3.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.organizationProviders.v3.getMulti({
     *         limit: 100,
     *         searchTerm: "john",
     *         npi: "1234567890",
     *         isRendering: true,
     *         isBilling: true,
     *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
     *         sort: CandidApi.organizationProviders.v2.OrganizationProviderSortOptions.ProviderNameAsc
     *     })
     */
    public async getMulti(
        request: CandidApi.organizationProviders.v3.GetAllOrganizationProvidersRequestV2 = {},
        requestOptions?: V3.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.organizationProviders.v3.OrganizationProviderPageV2,
            CandidApi.organizationProviders.v3.getMulti.Error
        >
    > {
        const { limit, searchTerm, npi, isRendering, isBilling, pageToken, sort } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (searchTerm != null) {
            _queryParams["search_term"] = searchTerm;
        }

        if (npi != null) {
            _queryParams["npi"] = npi;
        }

        if (isRendering != null) {
            _queryParams["is_rendering"] = isRendering.toString();
        }

        if (isBilling != null) {
            _queryParams["is_billing"] = isBilling.toString();
        }

        if (pageToken != null) {
            _queryParams["page_token"] = pageToken;
        }

        if (sort != null) {
            _queryParams["sort"] = sort;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/organization-providers/v3"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.34.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.organizationProviders.v3.OrganizationProviderPageV2.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.organizationProviders.v3.getMulti.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.organizationProviders.v3.OrganizationProviderCreateV2} request
     * @param {V3.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.organizationProviders.v3.create({
     *         npi: "string",
     *         isRendering: true,
     *         isBilling: true,
     *         firstName: "string",
     *         lastName: "string",
     *         organizationName: "string",
     *         providerType: CandidApi.organizationProviders.v2.ProviderType.Individual,
     *         taxId: "string",
     *         taxonomyCode: "string",
     *         licenseType: CandidApi.organizationProviders.v2.LicenseType.Md,
     *         addresses: [{
     *                 address: {
     *                     address1: "123 Main St",
     *                     address2: "Apt 1",
     *                     city: "New York",
     *                     state: CandidApi.State.Ny,
     *                     zipCode: "10001",
     *                     zipPlusFourCode: "1234"
     *                 },
     *                 addressType: CandidApi.organizationProviders.v2.AddressType.Default
     *             }],
     *         employmentStartDate: "2023-01-15",
     *         employmentTerminationDate: "2023-01-15",
     *         qualifications: [{
     *                 period: {
     *                     startDate: CandidApi.Date_("string"),
     *                     endDate: {
     *                         "key": "value"
     *                     }
     *                 },
     *                 identifierCode: CandidApi.IdentifierCode.Mcr,
     *                 identifierValue: {
     *                     type: "medicare_provider_identifier"
     *                 }
     *             }]
     *     })
     */
    public async create(
        request: CandidApi.organizationProviders.v3.OrganizationProviderCreateV2,
        requestOptions?: V3.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.organizationProviders.v3.OrganizationProviderV2,
            CandidApi.organizationProviders.v3.create.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/organization-providers/v3"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.34.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.organizationProviders.v3.OrganizationProviderCreateV2.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.organizationProviders.v3.OrganizationProviderV2.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.organizationProviders.v3.create.Error.Raw)?.errorName) {
                case "HttpRequestValidationError":
                case "UpdatesDisabledDueToExternalSystemIntegrationError":
                    return {
                        ok: false,
                        error: serializers.organizationProviders.v3.create.Error.parseOrThrow(
                            _response.error.body as serializers.organizationProviders.v3.create.Error.Raw,
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
            error: CandidApi.organizationProviders.v3.create.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.organizationProviders.v2.OrganizationProviderId} organizationProviderId
     * @param {CandidApi.organizationProviders.v3.OrganizationProviderUpdateV2} request
     * @param {V3.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.organizationProviders.v3.update(CandidApi.organizationProviders.v2.OrganizationProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
     *         npi: "string",
     *         isRendering: true,
     *         isBilling: true,
     *         firstName: "string",
     *         lastName: "string",
     *         organizationName: "string",
     *         providerType: CandidApi.organizationProviders.v2.ProviderType.Individual,
     *         taxId: "string",
     *         taxonomyCode: "string",
     *         licenseType: CandidApi.organizationProviders.v2.LicenseType.Md,
     *         addresses: [{
     *                 address: {
     *                     address1: "123 Main St",
     *                     address2: "Apt 1",
     *                     city: "New York",
     *                     state: CandidApi.State.Ny,
     *                     zipCode: "10001",
     *                     zipPlusFourCode: "1234"
     *                 },
     *                 addressType: CandidApi.organizationProviders.v2.AddressType.Default
     *             }],
     *         employmentStartDate: CandidApi.Date_("string"),
     *         employmentTerminationDate: CandidApi.Date_("string"),
     *         qualifications: [{
     *                 type: "add",
     *                 period: {
     *                     startDate: CandidApi.Date_("string"),
     *                     endDate: {
     *                         "key": "value"
     *                     }
     *                 },
     *                 identifierCode: CandidApi.IdentifierCode.Mcr,
     *                 identifierValue: {
     *                     type: "medicare_provider_identifier"
     *                 }
     *             }]
     *     })
     */
    public async update(
        organizationProviderId: CandidApi.organizationProviders.v2.OrganizationProviderId,
        request: CandidApi.organizationProviders.v3.OrganizationProviderUpdateV2,
        requestOptions?: V3.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.organizationProviders.v3.OrganizationProviderV2,
            CandidApi.organizationProviders.v3.update.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/organization-providers/v3/${encodeURIComponent(
                    serializers.organizationProviders.v2.OrganizationProviderId.jsonOrThrow(organizationProviderId)
                )}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.34.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.organizationProviders.v3.OrganizationProviderUpdateV2.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.organizationProviders.v3.OrganizationProviderV2.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.organizationProviders.v3.update.Error.Raw)?.errorName) {
                case "HttpRequestValidationError":
                case "EntityNotFoundError":
                case "UpdatesDisabledDueToExternalSystemIntegrationError":
                    return {
                        ok: false,
                        error: serializers.organizationProviders.v3.update.Error.parseOrThrow(
                            _response.error.body as serializers.organizationProviders.v3.update.Error.Raw,
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
            error: CandidApi.organizationProviders.v3.update.Error._unknown(_response.error),
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
