/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import urlJoin from "url-join";

export declare namespace V1 {
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

export class V1 {
    constructor(protected readonly _options: V1.Options = {}) {}

    /**
     * @param {CandidApi.nonInsurancePayers.v1.CreateNonInsurancePayerRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.nonInsurancePayers.v1.create({
     *         name: "string",
     *         description: "string",
     *         category: "string",
     *         address: {
     *             address1: "123 Main St",
     *             address2: "Apt 1",
     *             city: "New York",
     *             state: "NY",
     *             zipCode: "10001",
     *             zipPlusFourCode: "1234"
     *         },
     *         clinicalTrials: [{
     *                 name: "string",
     *                 clinicalTrialNumber: "string",
     *                 clinicalTrialPhase: "Phase 1"
     *             }]
     *     })
     */
    public async create(
        request: CandidApi.nonInsurancePayers.v1.CreateNonInsurancePayerRequest,
        requestOptions?: V1.RequestOptions,
    ): Promise<
        core.APIResponse<
            CandidApi.nonInsurancePayers.v1.NonInsurancePayer,
            CandidApi.nonInsurancePayers.v1.create.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                "/api/non-insurance-payers/v1",
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
            body: serializers.nonInsurancePayers.v1.CreateNonInsurancePayerRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.nonInsurancePayers.v1.NonInsurancePayer.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.nonInsurancePayers.v1.create.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "EntityConflictError":
                    return {
                        ok: false,
                        error: serializers.nonInsurancePayers.v1.create.Error.parseOrThrow(
                            _response.error.body as serializers.nonInsurancePayers.v1.create.Error.Raw,
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
            error: CandidApi.nonInsurancePayers.v1.create.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.nonInsurancePayers.v1.NonInsurancePayerId} nonInsurancePayerId
     * @param {CandidApi.nonInsurancePayers.v1.ToggleNonInsurancePayerEnablementRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.nonInsurancePayers.v1.toggleEnablement(CandidApi.nonInsurancePayers.v1.NonInsurancePayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
     *         enabled: true
     *     })
     */
    public async toggleEnablement(
        nonInsurancePayerId: CandidApi.nonInsurancePayers.v1.NonInsurancePayerId,
        request: CandidApi.nonInsurancePayers.v1.ToggleNonInsurancePayerEnablementRequest,
        requestOptions?: V1.RequestOptions,
    ): Promise<
        core.APIResponse<
            CandidApi.nonInsurancePayers.v1.NonInsurancePayer,
            CandidApi.nonInsurancePayers.v1.toggleEnablement.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                `/api/non-insurance-payers/v1/${encodeURIComponent(serializers.nonInsurancePayers.v1.NonInsurancePayerId.jsonOrThrow(nonInsurancePayerId))}/toggle_enablement`,
            ),
            method: "PATCH",
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
            body: serializers.nonInsurancePayers.v1.ToggleNonInsurancePayerEnablementRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.nonInsurancePayers.v1.NonInsurancePayer.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.nonInsurancePayers.v1.toggleEnablement.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                    return {
                        ok: false,
                        error: serializers.nonInsurancePayers.v1.toggleEnablement.Error.parseOrThrow(
                            _response.error.body as serializers.nonInsurancePayers.v1.toggleEnablement.Error.Raw,
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
            error: CandidApi.nonInsurancePayers.v1.toggleEnablement.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.nonInsurancePayers.v1.GetMultiNonInsurancePayersRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.nonInsurancePayers.v1.getMulti({
     *         name: "string",
     *         category: "string",
     *         enabled: true,
     *         sort: "NAME",
     *         sortDirection: "asc",
     *         limit: 1,
     *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9")
     *     })
     */
    public async getMulti(
        request: CandidApi.nonInsurancePayers.v1.GetMultiNonInsurancePayersRequest = {},
        requestOptions?: V1.RequestOptions,
    ): Promise<
        core.APIResponse<
            CandidApi.nonInsurancePayers.v1.NonInsurancePayerPage,
            CandidApi.nonInsurancePayers.v1.getMulti.Error
        >
    > {
        const { name, category, enabled, sort, sortDirection, limit, pageToken } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (name != null) {
            _queryParams["name"] = name;
        }

        if (category != null) {
            _queryParams["category"] = category;
        }

        if (enabled != null) {
            _queryParams["enabled"] = enabled.toString();
        }

        if (sort != null) {
            _queryParams["sort"] = serializers.nonInsurancePayers.v1.NonInsurancePayerSortField.jsonOrThrow(sort, {
                unrecognizedObjectKeys: "strip",
            });
        }

        if (sortDirection != null) {
            _queryParams["sort_direction"] = serializers.SortDirection.jsonOrThrow(sortDirection, {
                unrecognizedObjectKeys: "strip",
            });
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (pageToken != null) {
            _queryParams["page_token"] = pageToken;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                "/api/non-insurance-payers/v1",
            ),
            method: "GET",
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
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.nonInsurancePayers.v1.NonInsurancePayerPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.nonInsurancePayers.v1.getMulti.Error.Raw)?.errorName) {
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: serializers.nonInsurancePayers.v1.getMulti.Error.parseOrThrow(
                            _response.error.body as serializers.nonInsurancePayers.v1.getMulti.Error.Raw,
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
            error: CandidApi.nonInsurancePayers.v1.getMulti.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.nonInsurancePayers.v1.NonInsurancePayerId} nonInsurancePayerId
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.nonInsurancePayers.v1.get(CandidApi.nonInsurancePayers.v1.NonInsurancePayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async get(
        nonInsurancePayerId: CandidApi.nonInsurancePayers.v1.NonInsurancePayerId,
        requestOptions?: V1.RequestOptions,
    ): Promise<
        core.APIResponse<CandidApi.nonInsurancePayers.v1.NonInsurancePayer, CandidApi.nonInsurancePayers.v1.get.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                `/api/non-insurance-payers/v1/${encodeURIComponent(serializers.nonInsurancePayers.v1.NonInsurancePayerId.jsonOrThrow(nonInsurancePayerId))}`,
            ),
            method: "GET",
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
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.nonInsurancePayers.v1.NonInsurancePayer.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.nonInsurancePayers.v1.get.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                    return {
                        ok: false,
                        error: serializers.nonInsurancePayers.v1.get.Error.parseOrThrow(
                            _response.error.body as serializers.nonInsurancePayers.v1.get.Error.Raw,
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
            error: CandidApi.nonInsurancePayers.v1.get.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.nonInsurancePayers.v1.NonInsurancePayerId} nonInsurancePayerId
     * @param {CandidApi.nonInsurancePayers.v1.NonInsurancePayerUpdateRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.nonInsurancePayers.v1.update(CandidApi.nonInsurancePayers.v1.NonInsurancePayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
     *         name: "string",
     *         description: {
     *             type: "remove"
     *         },
     *         category: {
     *             type: "remove"
     *         },
     *         address: {
     *             type: "remove"
     *         }
     *     })
     */
    public async update(
        nonInsurancePayerId: CandidApi.nonInsurancePayers.v1.NonInsurancePayerId,
        request: CandidApi.nonInsurancePayers.v1.NonInsurancePayerUpdateRequest,
        requestOptions?: V1.RequestOptions,
    ): Promise<
        core.APIResponse<
            CandidApi.nonInsurancePayers.v1.NonInsurancePayer,
            CandidApi.nonInsurancePayers.v1.update.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                `/api/non-insurance-payers/v1/${encodeURIComponent(serializers.nonInsurancePayers.v1.NonInsurancePayerId.jsonOrThrow(nonInsurancePayerId))}`,
            ),
            method: "PATCH",
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
            body: serializers.nonInsurancePayers.v1.NonInsurancePayerUpdateRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.nonInsurancePayers.v1.NonInsurancePayer.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.nonInsurancePayers.v1.update.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "EntityConflictError":
                    return {
                        ok: false,
                        error: serializers.nonInsurancePayers.v1.update.Error.parseOrThrow(
                            _response.error.body as serializers.nonInsurancePayers.v1.update.Error.Raw,
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
            error: CandidApi.nonInsurancePayers.v1.update.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.nonInsurancePayers.v1.NonInsurancePayerId} nonInsurancePayerId
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.nonInsurancePayers.v1.delete(CandidApi.nonInsurancePayers.v1.NonInsurancePayerId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async delete(
        nonInsurancePayerId: CandidApi.nonInsurancePayers.v1.NonInsurancePayerId,
        requestOptions?: V1.RequestOptions,
    ): Promise<core.APIResponse<void, CandidApi.nonInsurancePayers.v1.delete.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                `/api/non-insurance-payers/v1/${encodeURIComponent(serializers.nonInsurancePayers.v1.NonInsurancePayerId.jsonOrThrow(nonInsurancePayerId))}`,
            ),
            method: "DELETE",
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
            switch ((_response.error.body as serializers.nonInsurancePayers.v1.delete.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                    return {
                        ok: false,
                        error: serializers.nonInsurancePayers.v1.delete.Error.parseOrThrow(
                            _response.error.body as serializers.nonInsurancePayers.v1.delete.Error.Raw,
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
            error: CandidApi.nonInsurancePayers.v1.delete.Error._unknown(_response.error),
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
