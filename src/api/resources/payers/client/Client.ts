/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import { CandidApi } from "";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Payers {
    interface Options {
        environment: string;
        token: core.Supplier<core.BearerToken>;
    }
}

export class Payers {
    constructor(private readonly options: Payers.Options) {}

    public async get(payerUuid: string): Promise<CandidApi.Payer> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/api/payers/v3/${payerUuid}`),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.Payer.parseOrThrow(_response.body as serializers.Payer.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CandidApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CandidApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CandidApiTimeoutError();
            case "unknown":
                throw new errors.CandidApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async getAll(request: CandidApi.GetAllPayersRequest = {}): Promise<CandidApi.PayerPage> {
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
            url: urlJoin(this.options.environment, "/api/payers/v3"),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.PayerPage.parseOrThrow(_response.body as serializers.PayerPage.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CandidApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CandidApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CandidApiTimeoutError();
            case "unknown":
                throw new errors.CandidApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
