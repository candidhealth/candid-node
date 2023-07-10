/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as CandidApi from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import URLSearchParams from "@ungap/url-search-params";

export declare namespace Payers {
    interface Options {
        environment?: environments.CandidApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Payers {
    constructor(protected readonly options: Payers.Options) {}

    public async get(
        payerUuid: CandidApi.PayerUuid
    ): Promise<core.APIResponse<CandidApi.Payer, CandidApi.payers.get.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/payers/v3/${await serializers.PayerUuid.jsonOrThrow(payerUuid)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.4.1",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.Payer.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.payers.get.Error._unknown(_response.error),
        };
    }

    public async getAll(
        request: CandidApi.GetAllPayersRequest = {}
    ): Promise<core.APIResponse<CandidApi.PayerPage, CandidApi.payers.getAll.Error>> {
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
                "X-Fern-SDK-Version": "0.4.1",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.PayerPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.payers.getAll.Error._unknown(_response.error),
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
