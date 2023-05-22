/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as CandidApi from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";

export declare namespace ExpectedNetworkStatus {
    interface Options {
        environment?: environments.CandidApiEnvironment | string;
        token: core.Supplier<core.BearerToken>;
    }
}

export class ExpectedNetworkStatus {
    constructor(protected readonly options: ExpectedNetworkStatus.Options) {}

    public async compute(
        request: CandidApi.ExpectedNetworkStatusRequest
    ): Promise<
        core.APIResponse<CandidApi.ExpectedNetworkStatusResponse, CandidApi.expectedNetworkStatus.compute.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                "/api/expected-network-status/v1"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.0.12",
            },
            contentType: "application/json",
            body: await serializers.ExpectedNetworkStatusRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.ExpectedNetworkStatusResponse.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.expectedNetworkStatus.compute.Error._unknown(_response.error),
        };
    }

    protected async _getAuthorizationHeader() {
        return `Bearer ${await core.Supplier.get(this.options.token)}`;
    }
}
