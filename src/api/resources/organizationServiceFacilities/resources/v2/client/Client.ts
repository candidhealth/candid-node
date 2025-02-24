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
     * @param {CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacilityId} organizationServiceFacilityId
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.organizationServiceFacilities.v2.get(CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacilityId("30F55EE6-8C0E-43FC-A7FC-DAC00D5BF569"))
     */
    public async get(
        organizationServiceFacilityId: CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacilityId,
        requestOptions?: V2.RequestOptions,
    ): Promise<
        core.APIResponse<
            CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacility,
            CandidApi.organizationServiceFacilities.v2.get.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                `/api/organization-service-facilities/v2/${encodeURIComponent(serializers.organizationServiceFacilities.v2.OrganizationServiceFacilityId.jsonOrThrow(organizationServiceFacilityId))}`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.9",
                "User-Agent": "candidhealth/0.39.9",
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
                body: serializers.organizationServiceFacilities.v2.OrganizationServiceFacility.parseOrThrow(
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
            switch ((_response.error.body as serializers.organizationServiceFacilities.v2.get.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                    return {
                        ok: false,
                        error: serializers.organizationServiceFacilities.v2.get.Error.parseOrThrow(
                            _response.error.body as serializers.organizationServiceFacilities.v2.get.Error.Raw,
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
            error: CandidApi.organizationServiceFacilities.v2.get.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.organizationServiceFacilities.v2.GetAllOrganizationServiceFacilitiesRequest} request
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.organizationServiceFacilities.v2.getMulti({
     *         limit: 100,
     *         name: "Test Service Facility",
     *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9")
     *     })
     */
    public async getMulti(
        request: CandidApi.organizationServiceFacilities.v2.GetAllOrganizationServiceFacilitiesRequest = {},
        requestOptions?: V2.RequestOptions,
    ): Promise<
        core.APIResponse<
            CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacilityPage,
            CandidApi.organizationServiceFacilities.v2.getMulti.Error
        >
    > {
        const { limit, name, pageToken } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (name != null) {
            _queryParams["name"] = name;
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
                "/api/organization-service-facilities/v2",
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.9",
                "User-Agent": "candidhealth/0.39.9",
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
                body: serializers.organizationServiceFacilities.v2.OrganizationServiceFacilityPage.parseOrThrow(
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

        return {
            ok: false,
            error: CandidApi.organizationServiceFacilities.v2.getMulti.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacilityCreate} request
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.organizationServiceFacilities.v2.create({
     *         name: "Test Service Facility",
     *         aliases: ["Test Service Facility Alias"],
     *         description: "Test Service Facility Description",
     *         status: "active",
     *         operationalStatus: "C",
     *         mode: "instance",
     *         type: "DX",
     *         physicalType: "si",
     *         telecoms: ["555-555-5555"],
     *         address: {
     *             address1: "123 Main St",
     *             address2: "Apt 1",
     *             city: "New York",
     *             state: "NY",
     *             zipCode: "10001",
     *             zipPlusFourCode: "1234"
     *         }
     *     })
     */
    public async create(
        request: CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacilityCreate,
        requestOptions?: V2.RequestOptions,
    ): Promise<
        core.APIResponse<
            CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacility,
            CandidApi.organizationServiceFacilities.v2.create.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                "/api/organization-service-facilities/v2",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.9",
                "User-Agent": "candidhealth/0.39.9",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.organizationServiceFacilities.v2.OrganizationServiceFacilityCreate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.organizationServiceFacilities.v2.OrganizationServiceFacility.parseOrThrow(
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
                (_response.error.body as serializers.organizationServiceFacilities.v2.create.Error.Raw)?.errorName
            ) {
                case "HttpRequestValidationError":
                    return {
                        ok: false,
                        error: serializers.organizationServiceFacilities.v2.create.Error.parseOrThrow(
                            _response.error.body as serializers.organizationServiceFacilities.v2.create.Error.Raw,
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
            error: CandidApi.organizationServiceFacilities.v2.create.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacilityId} organizationServiceFacilityId
     * @param {CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacilityUpdate} request
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.organizationServiceFacilities.v2.update(CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacilityId("30F55EE6-8C0E-43FC-A7FC-DAC00D5BF569"), {
     *         name: "Test Service Facility",
     *         aliases: ["Test Service Facility Alias"],
     *         description: "Test Service Facility Description",
     *         status: "active",
     *         operationalStatus: "C",
     *         mode: "instance",
     *         type: "DX",
     *         physicalType: "si",
     *         telecoms: ["555-555-5555"],
     *         address: {
     *             address1: "123 Main St",
     *             address2: "Apt 1",
     *             city: "New York",
     *             state: "NY",
     *             zipCode: "10001",
     *             zipPlusFourCode: "1234"
     *         }
     *     })
     */
    public async update(
        organizationServiceFacilityId: CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacilityId,
        request: CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacilityUpdate,
        requestOptions?: V2.RequestOptions,
    ): Promise<
        core.APIResponse<
            CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacility,
            CandidApi.organizationServiceFacilities.v2.update.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                `/api/organization-service-facilities/v2/${encodeURIComponent(serializers.organizationServiceFacilities.v2.OrganizationServiceFacilityId.jsonOrThrow(organizationServiceFacilityId))}`,
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.9",
                "User-Agent": "candidhealth/0.39.9",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.organizationServiceFacilities.v2.OrganizationServiceFacilityUpdate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.organizationServiceFacilities.v2.OrganizationServiceFacility.parseOrThrow(
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
                (_response.error.body as serializers.organizationServiceFacilities.v2.update.Error.Raw)?.errorName
            ) {
                case "HttpRequestValidationError":
                case "EntityNotFoundError":
                    return {
                        ok: false,
                        error: serializers.organizationServiceFacilities.v2.update.Error.parseOrThrow(
                            _response.error.body as serializers.organizationServiceFacilities.v2.update.Error.Raw,
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
            error: CandidApi.organizationServiceFacilities.v2.update.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacilityId} organizationServiceFacilityId
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.organizationServiceFacilities.v2.delete(CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacilityId("30F55EE6-8C0E-43FC-A7FC-DAC00D5BF569"))
     */
    public async delete(
        organizationServiceFacilityId: CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacilityId,
        requestOptions?: V2.RequestOptions,
    ): Promise<core.APIResponse<void, CandidApi.organizationServiceFacilities.v2.delete.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                `/api/organization-service-facilities/v2/${encodeURIComponent(serializers.organizationServiceFacilities.v2.OrganizationServiceFacilityId.jsonOrThrow(organizationServiceFacilityId))}`,
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.9",
                "User-Agent": "candidhealth/0.39.9",
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
            switch (
                (_response.error.body as serializers.organizationServiceFacilities.v2.delete.Error.Raw)?.errorName
            ) {
                case "EntityNotFoundError":
                    return {
                        ok: false,
                        error: serializers.organizationServiceFacilities.v2.delete.Error.parseOrThrow(
                            _response.error.body as serializers.organizationServiceFacilities.v2.delete.Error.Raw,
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
            error: CandidApi.organizationServiceFacilities.v2.delete.Error._unknown(_response.error),
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
