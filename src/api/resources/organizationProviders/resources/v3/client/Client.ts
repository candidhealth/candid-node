/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import urlJoin from "url-join";

export declare namespace V3 {
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
        requestOptions?: V3.RequestOptions,
    ): Promise<
        core.APIResponse<
            CandidApi.organizationProviders.v3.OrganizationProviderV2,
            CandidApi.organizationProviders.v3.get.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                `/api/organization-providers/v3/${encodeURIComponent(serializers.organizationProviders.v2.OrganizationProviderId.jsonOrThrow(organizationProviderId))}`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "1.4.0",
                "User-Agent": "candidhealth/1.4.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
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
                            },
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
     *         sort: "provider_name:asc"
     *     })
     */
    public async getMulti(
        request: CandidApi.organizationProviders.v3.GetAllOrganizationProvidersRequestV2 = {},
        requestOptions?: V3.RequestOptions,
    ): Promise<
        core.APIResponse<
            CandidApi.organizationProviders.v3.OrganizationProviderPageV2,
            CandidApi.organizationProviders.v3.getMulti.Error
        >
    > {
        const { limit, searchTerm, npi, isRendering, isBilling, pageToken, sort } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
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
            _queryParams["sort"] = serializers.organizationProviders.v2.OrganizationProviderSortOptions.jsonOrThrow(
                sort,
                { unrecognizedObjectKeys: "strip" },
            );
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                "/api/organization-providers/v3",
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "1.4.0",
                "User-Agent": "candidhealth/1.4.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
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
     *         npi: "npi",
     *         isRendering: true,
     *         isBilling: true,
     *         providerType: "INDIVIDUAL",
     *         licenseType: "MD",
     *         qualifications: [{
     *                 identifierCode: "MCR",
     *                 identifierValue: {
     *                     type: "medicare_provider_identifier",
     *                     state: "AA",
     *                     providerNumber: "provider_number"
     *                 }
     *             }, {
     *                 identifierCode: "MCR",
     *                 identifierValue: {
     *                     type: "medicare_provider_identifier",
     *                     state: "AA",
     *                     providerNumber: "provider_number"
     *                 }
     *             }]
     *     })
     */
    public async create(
        request: CandidApi.organizationProviders.v3.OrganizationProviderCreateV2,
        requestOptions?: V3.RequestOptions,
    ): Promise<
        core.APIResponse<
            CandidApi.organizationProviders.v3.OrganizationProviderV2,
            CandidApi.organizationProviders.v3.create.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                "/api/organization-providers/v3",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "1.4.0",
                "User-Agent": "candidhealth/1.4.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
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
                            },
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
     *     await client.organizationProviders.v3.update(CandidApi.organizationProviders.v2.OrganizationProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {})
     */
    public async update(
        organizationProviderId: CandidApi.organizationProviders.v2.OrganizationProviderId,
        request: CandidApi.organizationProviders.v3.OrganizationProviderUpdateV2,
        requestOptions?: V3.RequestOptions,
    ): Promise<
        core.APIResponse<
            CandidApi.organizationProviders.v3.OrganizationProviderV2,
            CandidApi.organizationProviders.v3.update.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                `/api/organization-providers/v3/${encodeURIComponent(serializers.organizationProviders.v2.OrganizationProviderId.jsonOrThrow(organizationProviderId))}`,
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "1.4.0",
                "User-Agent": "candidhealth/1.4.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
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
                            },
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
