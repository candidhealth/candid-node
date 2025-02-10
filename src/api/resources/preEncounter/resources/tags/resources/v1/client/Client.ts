/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../../../environments";
import * as core from "../../../../../../../../core";
import * as CandidApi from "../../../../../../../index";
import * as serializers from "../../../../../../../../serialization/index";
import urlJoin from "url-join";

export declare namespace V1 {
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

export class V1 {
    constructor(protected readonly _options: V1.Options = {}) {}

    /**
     * Gets a tag by TagId.
     *
     * @param {CandidApi.preEncounter.TagId} id
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.tags.v1.get(CandidApi.preEncounter.TagId("string"))
     */
    public async get(
        id: CandidApi.preEncounter.TagId,
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<CandidApi.preEncounter.tags.v1.Tag, CandidApi.preEncounter.tags.v1.get.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                `/tags/v1/${encodeURIComponent(serializers.preEncounter.TagId.jsonOrThrow(id))}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.4",
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
                body: serializers.preEncounter.tags.v1.Tag.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.preEncounter.tags.v1.get.Error._unknown(_response.error),
        };
    }

    /**
     * Gets all tags. Defaults to page size of 1000.
     *
     * @param {CandidApi.preEncounter.tags.v1.GetAllTagsRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.tags.v1.getAll({
     *         limit: 1,
     *         pageToken: CandidApi.preEncounter.PageToken("string")
     *     })
     */
    public async getAll(
        request: CandidApi.preEncounter.tags.v1.GetAllTagsRequest = {},
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<CandidApi.preEncounter.tags.v1.TagPage, CandidApi.preEncounter.tags.v1.getAll.Error>> {
        const { limit, pageToken } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (pageToken != null) {
            _queryParams["page_token"] = pageToken;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                "/tags/v1"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.4",
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
                body: serializers.preEncounter.tags.v1.TagPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.preEncounter.tags.v1.getAll.Error._unknown(_response.error),
        };
    }

    /**
     * Adds a new tag if it does not already exist, otherwise, returns the existing tag.
     *
     * @param {CandidApi.preEncounter.tags.v1.MutableTag} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.tags.v1.create({
     *         value: "string"
     *     })
     */
    public async create(
        request: CandidApi.preEncounter.tags.v1.MutableTag,
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<CandidApi.preEncounter.tags.v1.Tag, CandidApi.preEncounter.tags.v1.create.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                "/tags/v1"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.4",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.preEncounter.tags.v1.MutableTag.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.preEncounter.tags.v1.Tag.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.preEncounter.tags.v1.create.Error._unknown(_response.error),
        };
    }

    /**
     * Updates a tag. The path must contain the most recent version to prevent races.
     *
     * @param {CandidApi.preEncounter.TagId} id
     * @param {string} version
     * @param {CandidApi.preEncounter.tags.v1.MutableTag} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.tags.v1.update(CandidApi.preEncounter.TagId("string"), "string", {
     *         value: "string"
     *     })
     */
    public async update(
        id: CandidApi.preEncounter.TagId,
        version: string,
        request: CandidApi.preEncounter.tags.v1.MutableTag,
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<CandidApi.preEncounter.tags.v1.Tag, CandidApi.preEncounter.tags.v1.update.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                `/tags/v1/${encodeURIComponent(serializers.preEncounter.TagId.jsonOrThrow(id))}/${encodeURIComponent(
                    version
                )}`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.4",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.preEncounter.tags.v1.MutableTag.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.preEncounter.tags.v1.Tag.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.preEncounter.tags.v1.update.Error._unknown(_response.error),
        };
    }

    /**
     * Sets a tag as deactivated. The path must contain the most recent version to prevent races.
     *
     * @param {CandidApi.preEncounter.TagId} id
     * @param {string} version
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.tags.v1.deactivate(CandidApi.preEncounter.TagId("string"), "string")
     */
    public async deactivate(
        id: CandidApi.preEncounter.TagId,
        version: string,
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<void, CandidApi.preEncounter.tags.v1.deactivate.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                `/tags/v1/${encodeURIComponent(serializers.preEncounter.TagId.jsonOrThrow(id))}/${encodeURIComponent(
                    version
                )}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.4",
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
                body: undefined,
            };
        }

        return {
            ok: false,
            error: CandidApi.preEncounter.tags.v1.deactivate.Error._unknown(_response.error),
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
