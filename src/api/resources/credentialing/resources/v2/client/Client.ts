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
     * @param {CandidApi.credentialing.v2.ProviderCredentialingSpanCreate} request
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.credentialing.v2.create({
     *         renderingProviderId: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
     *         contractingProviderId: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
     *         payerUuid: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
     *         startDate: "2023-01-15",
     *         endDate: "2023-01-15",
     *         regions: {
     *             type: "states",
     *             states: ["AA"]
     *         },
     *         submittedDate: "2023-01-15",
     *         payerLoadedDate: "2023-01-15"
     *     })
     */
    public async create(
        request: CandidApi.credentialing.v2.ProviderCredentialingSpanCreate,
        requestOptions?: V2.RequestOptions,
    ): Promise<
        core.APIResponse<CandidApi.credentialing.v2.ProviderCredentialingSpan, CandidApi.credentialing.v2.create.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                "/api/provider-credentialing-span/v2",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.40.3",
                "User-Agent": "candidhealth/0.40.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.credentialing.v2.ProviderCredentialingSpanCreate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.credentialing.v2.ProviderCredentialingSpan.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.credentialing.v2.create.Error.Raw)?.errorName) {
                case "HttpRequestValidationsError":
                case "UnauthorizedError":
                    return {
                        ok: false,
                        error: serializers.credentialing.v2.create.Error.parseOrThrow(
                            _response.error.body as serializers.credentialing.v2.create.Error.Raw,
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
            error: CandidApi.credentialing.v2.create.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.ProviderCredentialingSpanId} providerCredentialingId
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.credentialing.v2.get(CandidApi.ProviderCredentialingSpanId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async get(
        providerCredentialingId: CandidApi.ProviderCredentialingSpanId,
        requestOptions?: V2.RequestOptions,
    ): Promise<
        core.APIResponse<CandidApi.credentialing.v2.ProviderCredentialingSpan, CandidApi.credentialing.v2.get.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                `/api/provider-credentialing-span/v2/${encodeURIComponent(serializers.ProviderCredentialingSpanId.jsonOrThrow(providerCredentialingId))}`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.40.3",
                "User-Agent": "candidhealth/0.40.3",
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
                body: serializers.credentialing.v2.ProviderCredentialingSpan.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.credentialing.v2.get.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                    return {
                        ok: false,
                        error: serializers.credentialing.v2.get.Error.parseOrThrow(
                            _response.error.body as serializers.credentialing.v2.get.Error.Raw,
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
            error: CandidApi.credentialing.v2.get.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.credentialing.v2.GetAllProviderCredentialingSpansRequest} request
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.credentialing.v2.getAll({
     *         limit: 1,
     *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
     *         payerUuid: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
     *         providerId: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
     *         asRenderingProvider: true,
     *         asContractingProvider: true
     *     })
     */
    public async getAll(
        request: CandidApi.credentialing.v2.GetAllProviderCredentialingSpansRequest = {},
        requestOptions?: V2.RequestOptions,
    ): Promise<
        core.APIResponse<
            CandidApi.credentialing.v2.ProviderCredentialingSpanPage,
            CandidApi.credentialing.v2.getAll.Error
        >
    > {
        const { limit, pageToken, payerUuid, providerId, asRenderingProvider, asContractingProvider } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (pageToken != null) {
            _queryParams["page_token"] = pageToken;
        }

        if (payerUuid != null) {
            _queryParams["payer_uuid"] = payerUuid;
        }

        if (providerId != null) {
            _queryParams["provider_id"] = providerId;
        }

        if (asRenderingProvider != null) {
            _queryParams["as_rendering_provider"] = asRenderingProvider.toString();
        }

        if (asContractingProvider != null) {
            _queryParams["as_contracting_provider"] = asContractingProvider.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                "/api/provider-credentialing-span/v2",
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.40.3",
                "User-Agent": "candidhealth/0.40.3",
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
                body: serializers.credentialing.v2.ProviderCredentialingSpanPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.credentialing.v2.getAll.Error.Raw)?.errorName) {
                case "UnauthorizedError":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: serializers.credentialing.v2.getAll.Error.parseOrThrow(
                            _response.error.body as serializers.credentialing.v2.getAll.Error.Raw,
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
            error: CandidApi.credentialing.v2.getAll.Error._unknown(_response.error),
        };
    }

    /**
     * Soft deletes a credentialing span rate from the system.
     *
     * @param {CandidApi.ProviderCredentialingSpanId} providerCredentialingId
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.credentialing.v2.delete(CandidApi.ProviderCredentialingSpanId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async delete(
        providerCredentialingId: CandidApi.ProviderCredentialingSpanId,
        requestOptions?: V2.RequestOptions,
    ): Promise<core.APIResponse<void, CandidApi.credentialing.v2.delete.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                `/api/provider-credentialing-span/v2/${encodeURIComponent(serializers.ProviderCredentialingSpanId.jsonOrThrow(providerCredentialingId))}`,
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.40.3",
                "User-Agent": "candidhealth/0.40.3",
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
                body: undefined,
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.credentialing.v2.delete.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                    return {
                        ok: false,
                        error: serializers.credentialing.v2.delete.Error.parseOrThrow(
                            _response.error.body as serializers.credentialing.v2.delete.Error.Raw,
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
            error: CandidApi.credentialing.v2.delete.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.ProviderCredentialingSpanId} providerCredentialingId
     * @param {CandidApi.credentialing.v2.ProviderCredentialingSpanUpdate} request
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.credentialing.v2.update(CandidApi.ProviderCredentialingSpanId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
     *         contractingProviderId: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
     *         payerUuid: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
     *         startDate: "2023-01-15",
     *         endDate: "2023-01-15",
     *         regions: {
     *             type: "states",
     *             states: ["AA"]
     *         },
     *         submittedDate: "2023-01-15",
     *         payerLoadedDate: "2023-01-15"
     *     })
     */
    public async update(
        providerCredentialingId: CandidApi.ProviderCredentialingSpanId,
        request: CandidApi.credentialing.v2.ProviderCredentialingSpanUpdate = {},
        requestOptions?: V2.RequestOptions,
    ): Promise<
        core.APIResponse<CandidApi.credentialing.v2.ProviderCredentialingSpan, CandidApi.credentialing.v2.update.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                `/api/provider-credentialing-span/v2/${encodeURIComponent(serializers.ProviderCredentialingSpanId.jsonOrThrow(providerCredentialingId))}`,
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.40.3",
                "User-Agent": "candidhealth/0.40.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.credentialing.v2.ProviderCredentialingSpanUpdate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.credentialing.v2.ProviderCredentialingSpan.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.credentialing.v2.update.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "HttpRequestValidationsError":
                case "UnauthorizedError":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: serializers.credentialing.v2.update.Error.parseOrThrow(
                            _response.error.body as serializers.credentialing.v2.update.Error.Raw,
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
            error: CandidApi.credentialing.v2.update.Error._unknown(_response.error),
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
