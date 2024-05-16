/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../..";
import URLSearchParams from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";

export declare namespace V1 {
    interface Options {
        environment?: environments.CandidApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class V1 {
    constructor(protected readonly options: V1.Options) {}

    /**
     * Returns all write-offs satisfying the search criteria.
     */
    public async getMulti(
        request: CandidApi.writeOffs.v1.GetMultiWriteOffsRequest = {}
    ): Promise<core.APIResponse<CandidApi.writeOffs.v1.WriteOffsPage, CandidApi.writeOffs.v1.getMulti.Error>> {
        const {
            limit,
            patientExternalId,
            payerUuid,
            serviceLineId,
            claimId,
            billingProviderId,
            sort,
            sortDirection,
            pageToken,
            accountTypes,
        } = request;
        const _queryParams = new URLSearchParams();
        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        if (patientExternalId != null) {
            _queryParams.append("patient_external_id", patientExternalId);
        }

        if (payerUuid != null) {
            _queryParams.append("payer_uuid", payerUuid);
        }

        if (serviceLineId != null) {
            _queryParams.append("service_line_id", serviceLineId);
        }

        if (claimId != null) {
            _queryParams.append("claim_id", claimId);
        }

        if (billingProviderId != null) {
            _queryParams.append("billing_provider_id", billingProviderId);
        }

        if (sort != null) {
            _queryParams.append("sort", sort);
        }

        if (sortDirection != null) {
            _queryParams.append("sort_direction", sortDirection);
        }

        if (pageToken != null) {
            _queryParams.append("page_token", pageToken);
        }

        if (accountTypes != null) {
            if (Array.isArray(accountTypes)) {
                for (const _item of accountTypes) {
                    _queryParams.append("account_types", _item);
                }
            } else {
                _queryParams.append("account_types", accountTypes);
            }
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                "/api/write-offs/v1"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.18.2",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.writeOffs.v1.WriteOffsPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.writeOffs.v1.getMulti.Error._unknown(_response.error),
        };
    }

    /**
     * Retrieves a previously created write off by its `write_off_id`.
     */
    public async get(
        writeOffId: CandidApi.writeOffs.v1.WriteOffId
    ): Promise<core.APIResponse<CandidApi.writeOffs.v1.WriteOff, CandidApi.writeOffs.v1.get.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/write-offs/v1/${await serializers.writeOffs.v1.WriteOffId.jsonOrThrow(writeOffId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.18.2",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.writeOffs.v1.WriteOff.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.writeOffs.v1.get.Error._unknown(_response.error),
        };
    }

    /**
     * Creates one or many write-offs given a specific set of allocations.
     * The allocations can describe whether the refund is being applied toward a specific service line,
     * claim, or billing provider.
     */
    public async create(
        request: CandidApi.writeOffs.v1.CreateWriteOffsRequest
    ): Promise<core.APIResponse<CandidApi.writeOffs.v1.CreateWriteOffsResponse, CandidApi.writeOffs.v1.create.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                "/api/write-offs/v1"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.18.2",
            },
            contentType: "application/json",
            body: await serializers.writeOffs.v1.CreateWriteOffsRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.writeOffs.v1.CreateWriteOffsResponse.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.writeOffs.v1.create.Error._unknown(_response.error),
        };
    }

    /**
     * Reverts a write off given a `write_off_id`.
     */
    public async revert(
        writeOffId: CandidApi.writeOffs.v1.WriteOffId
    ): Promise<core.APIResponse<CandidApi.writeOffs.v1.WriteOff, CandidApi.writeOffs.v1.revert.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/write-offs/v1/${await serializers.writeOffs.v1.WriteOffId.jsonOrThrow(writeOffId)}/revert`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.18.2",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.writeOffs.v1.WriteOff.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.writeOffs.v1.revert.Error._unknown(_response.error),
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
