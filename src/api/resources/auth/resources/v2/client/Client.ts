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
     * Authenticating with the Candid Health API.
     *
     * Candid Health utilizes the [OAuth 2.0 bearer token authentication scheme](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) in our auth flow. You obtain the bearer token for all
     * subsequent API requests via the `/auth/token` endpoint defined below, which requires you to provide your `client_id` and `client_secret`. Your `client_id` and `client_secret` can be [generated](https://support.joincandidhealth.com/hc/en-us/articles/23065219476244--Generating-Candid-API-Keys) from the "Users & Credentials" tab by your org admin.
     *
     * The bearer token should be provided in the `Authorization` header for all subsequent API calls.
     *
     * **Warning:**
     *
     * The bearer token expires 5 hours after it has been created. After it has expired, the client will receive an "HTTP 401
     * Unauthorized" error, at which point the client should generate a new token. It is important that tokens be reused between requests; if the client attempts to generate a token too often, it will be rate-limited and will receive an "HTTP 429 Too Many Requests" error.
     */
    public async getToken(
        request: CandidApi.auth.v2.AuthGetTokenRequest
    ): Promise<core.APIResponse<CandidApi.auth.v2.AuthGetTokenResponse, CandidApi.auth.v2.getToken.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                "/api/auth/v2/token"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.17.3",
            },
            contentType: "application/json",
            body: await serializers.auth.v2.AuthGetTokenRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.auth.v2.AuthGetTokenResponse.parseOrThrow(_response.body, {
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
                        error: await serializers.auth.v2.getToken.Error.parseOrThrow(
                            _response.error.body as serializers.auth.v2.getToken.Error.Raw,
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
            error: CandidApi.auth.v2.getToken.Error._unknown(_response.error),
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
