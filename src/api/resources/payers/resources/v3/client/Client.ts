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
     * @param {CandidApi.payers.v3.PayerUuid} payerUuid
     * @param {V3.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.payers.v3.get(CandidApi.payers.v3.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async get(
        payerUuid: CandidApi.payers.v3.PayerUuid,
        requestOptions?: V3.RequestOptions
    ): Promise<core.APIResponse<CandidApi.payers.v3.Payer, CandidApi.payers.v3.get.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/payers/v3/${encodeURIComponent(serializers.payers.v3.PayerUuid.jsonOrThrow(payerUuid))}`
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
                body: serializers.payers.v3.Payer.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.payers.v3.get.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.payers.v3.GetAllPayersRequest} request
     * @param {V3.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.payers.v3.getAll({
     *         limit: 100,
     *         searchTerm: "john",
     *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9")
     *     })
     */
    public async getAll(
        request: CandidApi.payers.v3.GetAllPayersRequest = {},
        requestOptions?: V3.RequestOptions
    ): Promise<core.APIResponse<CandidApi.payers.v3.PayerPage, CandidApi.payers.v3.getAll.Error>> {
        const { limit, searchTerm, pageToken } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (searchTerm != null) {
            _queryParams["search_term"] = searchTerm;
        }

        if (pageToken != null) {
            _queryParams["page_token"] = pageToken;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/payers/v3"
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
                body: serializers.payers.v3.PayerPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.payers.v3.getAll.Error._unknown(_response.error),
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
