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
     * <Callout intent="info">
     * Candid Health SDKs automatically handle authentication workflows after configuring them with the `client_id` and
     * `client_secret`.
     * </Callout>
     *
     * Candid Health utilizes the [OAuth 2.0 bearer token authentication scheme](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) in our auth flow. You obtain the bearer token for all
     * subsequent API requests via the `/auth/token` endpoint defined below, which requires you to provide your `client_id` and `client_secret`. Your `client_id` and `client_secret` can be [generated](https://support.joincandidhealth.com/hc/en-us/articles/23065219476244--Generating-Candid-API-Keys) from the "Users & Credentials" tab by your org admin.
     *
     * The bearer token is a signed [JWT](https://jwt.io/). The public key for the JWT can be found [here](https://candidhealth.auth0.com/pem) for any verification workflows.
     *
     * The bearer token should be provided in the `Authorization` header for all subsequent API calls.
     *
     * <Callout intent="warning">
     * The bearer token expires 5 hours after it has been created. After it has expired, the client will receive an "HTTP 401
     * Unauthorized" error, at which point the client should generate a new token. It is important that tokens be reused between
     * requests; if the client attempts to generate a token too often, it will be rate-limited and will receive an `HTTP 429 Too Many Requests` error.
     * </Callout>
     *
     * @param {CandidApi.auth.v2.AuthGetTokenRequest} request
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.auth.v2.getToken({
     *         clientId: "YOUR_CLIENT_ID",
     *         clientSecret: "YOUR_CLIENT_SECRET"
     *     })
     */
    public async getToken(
        request: CandidApi.auth.v2.AuthGetTokenRequest,
        requestOptions?: V2.RequestOptions,
    ): Promise<core.APIResponse<CandidApi.auth.v2.AuthGetTokenResponse, CandidApi.auth.v2.getToken.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.CandidApiEnvironment.Production
                    ).candidApi,
                "/api/auth/v2/token",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.6",
                "User-Agent": "candidhealth/0.39.6",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.auth.v2.AuthGetTokenRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.auth.v2.AuthGetTokenResponse.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.auth.v2.getToken.Error.Raw)?.errorName) {
                case "TooManyRequestsError":
                    return {
                        ok: false,
                        error: serializers.auth.v2.getToken.Error.parseOrThrow(
                            _response.error.body as serializers.auth.v2.getToken.Error.Raw,
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
            error: CandidApi.auth.v2.getToken.Error._unknown(_response.error),
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
