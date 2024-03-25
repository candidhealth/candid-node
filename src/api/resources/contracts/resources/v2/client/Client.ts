/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../..";
import * as serializers from "../../../../../../serialization";
import urlJoin from "url-join";
import URLSearchParams from "@ungap/url-search-params";

export declare namespace V2 {
    interface Options {
        environment?: environments.CandidApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class V2 {
    constructor(protected readonly options: V2.Options) {}

    public async get(
        contractId: CandidApi.contracts.v2.ContractId
    ): Promise<core.APIResponse<CandidApi.contracts.v2.ContractWithProviders, CandidApi.contracts.v2.get.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/contracts/v2/${await serializers.contracts.v2.ContractId.jsonOrThrow(contractId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.17.4",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.contracts.v2.ContractWithProviders.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.contracts.v2.get.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                    return {
                        ok: false,
                        error: await serializers.contracts.v2.get.Error.parseOrThrow(
                            _response.error.body as serializers.contracts.v2.get.Error.Raw,
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
            error: CandidApi.contracts.v2.get.Error._unknown(_response.error),
        };
    }

    public async getMulti(
        request: CandidApi.contracts.v2.GetMultiContractsRequest = {}
    ): Promise<core.APIResponse<CandidApi.contracts.v2.ContractsPage, CandidApi.contracts.v2.getMulti.Error>> {
        const { pageToken, limit, contractingProviderId, renderingProviderIds, payerNames, states, contractStatus } =
            request;
        const _queryParams = new URLSearchParams();
        if (pageToken != null) {
            _queryParams.append("page_token", pageToken);
        }

        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        if (contractingProviderId != null) {
            _queryParams.append("contracting_provider_id", contractingProviderId);
        }

        if (renderingProviderIds != null) {
            if (Array.isArray(renderingProviderIds)) {
                for (const _item of renderingProviderIds) {
                    _queryParams.append("rendering_provider_ids", _item);
                }
            } else {
                _queryParams.append("rendering_provider_ids", renderingProviderIds);
            }
        }

        if (payerNames != null) {
            if (Array.isArray(payerNames)) {
                for (const _item of payerNames) {
                    _queryParams.append("payer_names", _item);
                }
            } else {
                _queryParams.append("payer_names", payerNames);
            }
        }

        if (states != null) {
            if (Array.isArray(states)) {
                for (const _item of states) {
                    _queryParams.append("states", _item);
                }
            } else {
                _queryParams.append("states", states);
            }
        }

        if (contractStatus != null) {
            _queryParams.append("contract_status", contractStatus);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.CandidApiEnvironment.Production, "/api/contracts/v2"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.17.4",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.contracts.v2.ContractsPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.contracts.v2.getMulti.Error._unknown(_response.error),
        };
    }

    /**
     * Creates a new contract within the user's current organization
     */
    public async create(
        request: CandidApi.contracts.v2.ContractCreate
    ): Promise<core.APIResponse<CandidApi.contracts.v2.ContractWithProviders, CandidApi.contracts.v2.create.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.CandidApiEnvironment.Production, "/api/contracts/v2"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.17.4",
            },
            contentType: "application/json",
            body: await serializers.contracts.v2.ContractCreate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.contracts.v2.ContractWithProviders.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.contracts.v2.create.Error._unknown(_response.error),
        };
    }

    public async delete(
        contractId: CandidApi.contracts.v2.ContractId
    ): Promise<core.APIResponse<void, CandidApi.contracts.v2.delete.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/contracts/v2/${await serializers.contracts.v2.ContractId.jsonOrThrow(contractId)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.17.4",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: undefined,
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.contracts.v2.delete.Error.Raw)?.errorName) {
                case "ContractIsLinkedToFeeScheduleHttpError":
                    return {
                        ok: false,
                        error: await serializers.contracts.v2.delete.Error.parseOrThrow(
                            _response.error.body as serializers.contracts.v2.delete.Error.Raw,
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
            error: CandidApi.contracts.v2.delete.Error._unknown(_response.error),
        };
    }

    public async update(
        contractId: CandidApi.contracts.v2.ContractId,
        request: CandidApi.contracts.v2.ContractUpdate = {}
    ): Promise<core.APIResponse<CandidApi.contracts.v2.ContractWithProviders, CandidApi.contracts.v2.update.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/contracts/v2/${await serializers.contracts.v2.ContractId.jsonOrThrow(contractId)}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.17.4",
            },
            contentType: "application/json",
            body: await serializers.contracts.v2.ContractUpdate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.contracts.v2.ContractWithProviders.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.contracts.v2.update.Error.Raw)?.errorName) {
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: await serializers.contracts.v2.update.Error.parseOrThrow(
                            _response.error.body as serializers.contracts.v2.update.Error.Raw,
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
            error: CandidApi.contracts.v2.update.Error._unknown(_response.error),
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
