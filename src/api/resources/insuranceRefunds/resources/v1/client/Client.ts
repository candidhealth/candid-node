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
     * Returns all insurance refunds satisfying the search criteria AND whose organization_id matches
     * the current organization_id of the authenticated user.
     */
    public async getMulti(
        request: CandidApi.insuranceRefunds.v1.GetMultiInsuranceRefundsRequest = {}
    ): Promise<
        core.APIResponse<
            CandidApi.insuranceRefunds.v1.InsuranceRefundsPage,
            CandidApi.insuranceRefunds.v1.getMulti.Error
        >
    > {
        const { limit, payerUuid, claimId, serviceLineId, billingProviderId, sort, sortDirection, pageToken } = request;
        const _queryParams = new URLSearchParams();
        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        if (payerUuid != null) {
            _queryParams.append("payer_uuid", payerUuid);
        }

        if (claimId != null) {
            _queryParams.append("claim_id", claimId);
        }

        if (serviceLineId != null) {
            _queryParams.append("service_line_id", serviceLineId);
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

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                "/api/insurance-refunds/v1"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.17.2",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.insuranceRefunds.v1.InsuranceRefundsPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.insuranceRefunds.v1.getMulti.Error._unknown(_response.error),
        };
    }

    /**
     * Retrieves a previously created insurance refund by its `insurance_refund_id`.
     * If the refund does not exist, a `403` will be thrown.
     */
    public async get(
        insuranceRefundId: CandidApi.insuranceRefunds.v1.InsuranceRefundId
    ): Promise<
        core.APIResponse<CandidApi.insuranceRefunds.v1.InsuranceRefund, CandidApi.insuranceRefunds.v1.get.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/insurance-refunds/v1/${await serializers.insuranceRefunds.v1.InsuranceRefundId.jsonOrThrow(
                    insuranceRefundId
                )}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.17.2",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.insuranceRefunds.v1.InsuranceRefund.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.insuranceRefunds.v1.get.Error._unknown(_response.error),
        };
    }

    /**
     * Creates a new insurance refund record and returns the newly created `InsuranceRefund` object.
     * The allocations can describe whether the refund is being applied toward a specific service line,
     * claim, or billing provider.
     */
    public async create(
        request: CandidApi.insuranceRefunds.v1.InsuranceRefundCreate
    ): Promise<
        core.APIResponse<CandidApi.insuranceRefunds.v1.InsuranceRefund, CandidApi.insuranceRefunds.v1.create.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                "/api/insurance-refunds/v1"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.17.2",
            },
            contentType: "application/json",
            body: await serializers.insuranceRefunds.v1.InsuranceRefundCreate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.insuranceRefunds.v1.InsuranceRefund.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.insuranceRefunds.v1.create.Error._unknown(_response.error),
        };
    }

    /**
     * Updates the patient refund record matching the provided insurance_refund_id. If updating the refund amount,
     * then the allocations must be appropriately updated as well.
     */
    public async update(
        insuranceRefundId: CandidApi.insuranceRefunds.v1.InsuranceRefundId,
        request: CandidApi.insuranceRefunds.v1.InsuranceRefundUpdate = {}
    ): Promise<
        core.APIResponse<CandidApi.insuranceRefunds.v1.InsuranceRefund, CandidApi.insuranceRefunds.v1.update.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/insurance-refunds/v1/${await serializers.insuranceRefunds.v1.InsuranceRefundId.jsonOrThrow(
                    insuranceRefundId
                )}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.17.2",
            },
            contentType: "application/json",
            body: await serializers.insuranceRefunds.v1.InsuranceRefundUpdate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.insuranceRefunds.v1.InsuranceRefund.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.insuranceRefunds.v1.update.Error._unknown(_response.error),
        };
    }

    /**
     * Deletes the insurance refund record matching the provided `insurance_refund_id`.
     * If the matching record's organization_id does not match the authenticated user's
     * current organization_id, then a response code of `403` will be returned.
     */
    public async delete(
        insuranceRefundId: CandidApi.insuranceRefunds.v1.InsuranceRefundId
    ): Promise<core.APIResponse<void, CandidApi.insuranceRefunds.v1.delete.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/insurance-refunds/v1/${await serializers.insuranceRefunds.v1.InsuranceRefundId.jsonOrThrow(
                    insuranceRefundId
                )}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.17.2",
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

        return {
            ok: false,
            error: CandidApi.insuranceRefunds.v1.delete.Error._unknown(_response.error),
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
