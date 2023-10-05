/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../..";
import * as serializers from "../../../../../../serialization";
import urlJoin from "url-join";
import URLSearchParams from "@ungap/url-search-params";

export declare namespace V3 {
    interface Options {
        environment?: environments.CandidApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class V3 {
    constructor(protected readonly options: V3.Options) {}

    public async get(
        payerUuid: CandidApi.payers.v3.PayerUuid
    ): Promise<core.APIResponse<CandidApi.payers.v3.Payer, CandidApi.payers.v3.get.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/payers/v3/${await serializers.payers.v3.PayerUuid.jsonOrThrow(payerUuid)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.6.1",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.payers.v3.Payer.parseOrThrow(_response.body, {
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

    public async getAll(
        request: CandidApi.payers.v3.GetAllPayersRequest = {}
    ): Promise<core.APIResponse<CandidApi.payers.v3.PayerPage, CandidApi.payers.v3.getAll.Error>> {
        const { limit, searchTerm, pageToken } = request;
        const _queryParams = new URLSearchParams();
        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        if (searchTerm != null) {
            _queryParams.append("search_term", searchTerm);
        }

        if (pageToken != null) {
            _queryParams.append("page_token", pageToken);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.CandidApiEnvironment.Production, "/api/payers/v3"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.6.1",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.payers.v3.PayerPage.parseOrThrow(_response.body, {
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

    protected async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this.options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
