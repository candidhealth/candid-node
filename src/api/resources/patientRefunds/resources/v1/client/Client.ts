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
     * Returns all patient refunds satisfying the search criteria AND whose organization_id matches
     * the current organization_id of the authenticated user.
     */
    public async getMulti(
        request: CandidApi.patientRefunds.v1.GetMultiPatientRefundsRequest = {}
    ): Promise<
        core.APIResponse<CandidApi.patientRefunds.v1.PatientRefundsPage, CandidApi.patientRefunds.v1.getMulti.Error>
    > {
        const {
            limit,
            patientExternalId,
            claimId,
            serviceLineId,
            billingProviderId,
            unattributed,
            invoiceId,
            sources,
            sort,
            sortDirection,
            pageToken,
        } = request;
        const _queryParams = new URLSearchParams();
        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        if (patientExternalId != null) {
            _queryParams.append("patient_external_id", patientExternalId);
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

        if (unattributed != null) {
            _queryParams.append("unattributed", unattributed.toString());
        }

        if (invoiceId != null) {
            _queryParams.append("invoice_id", invoiceId);
        }

        if (sources != null) {
            if (Array.isArray(sources)) {
                for (const _item of sources) {
                    _queryParams.append("sources", _item);
                }
            } else {
                _queryParams.append("sources", sources);
            }
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
                "/api/patient-refunds/v1"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.18.0",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.patientRefunds.v1.PatientRefundsPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.patientRefunds.v1.getMulti.Error.Raw)?.errorName) {
                case "UnauthorizedError":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: await serializers.patientRefunds.v1.getMulti.Error.parseOrThrow(
                            _response.error.body as serializers.patientRefunds.v1.getMulti.Error.Raw,
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
            error: CandidApi.patientRefunds.v1.getMulti.Error._unknown(_response.error),
        };
    }

    /**
     * Retrieves a previously created patient refund by its `patient_refund_id`.
     */
    public async get(
        patientRefundId: CandidApi.patientRefunds.v1.PatientRefundId
    ): Promise<core.APIResponse<CandidApi.patientRefunds.v1.PatientRefund, CandidApi.patientRefunds.v1.get.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/patient-refunds/v1/${await serializers.patientRefunds.v1.PatientRefundId.jsonOrThrow(
                    patientRefundId
                )}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.18.0",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.patientRefunds.v1.PatientRefund.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.patientRefunds.v1.get.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                    return {
                        ok: false,
                        error: await serializers.patientRefunds.v1.get.Error.parseOrThrow(
                            _response.error.body as serializers.patientRefunds.v1.get.Error.Raw,
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
            error: CandidApi.patientRefunds.v1.get.Error._unknown(_response.error),
        };
    }

    /**
     * Creates a new patient refund record and returns the newly created PatientRefund object.
     * The allocations can describe whether the refund is being applied toward a specific service line,
     * claim, or billing provider.
     */
    public async create(
        request: CandidApi.patientRefunds.v1.PatientRefundCreate
    ): Promise<core.APIResponse<CandidApi.patientRefunds.v1.PatientRefund, CandidApi.patientRefunds.v1.create.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                "/api/patient-refunds/v1"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.18.0",
            },
            contentType: "application/json",
            body: await serializers.patientRefunds.v1.PatientRefundCreate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.patientRefunds.v1.PatientRefund.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.patientRefunds.v1.create.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: await serializers.patientRefunds.v1.create.Error.parseOrThrow(
                            _response.error.body as serializers.patientRefunds.v1.create.Error.Raw,
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
            error: CandidApi.patientRefunds.v1.create.Error._unknown(_response.error),
        };
    }

    /**
     * Updates the patient refund record matching the provided patient_refund_id.
     */
    public async update(
        patientRefundId: CandidApi.patientRefunds.v1.PatientRefundId,
        request: CandidApi.patientRefunds.v1.PatientRefundUpdate = {}
    ): Promise<core.APIResponse<CandidApi.patientRefunds.v1.PatientRefund, CandidApi.patientRefunds.v1.update.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/patient-refunds/v1/${await serializers.patientRefunds.v1.PatientRefundId.jsonOrThrow(
                    patientRefundId
                )}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.18.0",
            },
            contentType: "application/json",
            body: await serializers.patientRefunds.v1.PatientRefundUpdate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.patientRefunds.v1.PatientRefund.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.patientRefunds.v1.update.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: await serializers.patientRefunds.v1.update.Error.parseOrThrow(
                            _response.error.body as serializers.patientRefunds.v1.update.Error.Raw,
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
            error: CandidApi.patientRefunds.v1.update.Error._unknown(_response.error),
        };
    }

    /**
     * Deletes the patient refund record matching the provided patient_refund_id.
     */
    public async delete(
        patientRefundId: CandidApi.patientRefunds.v1.PatientRefundId
    ): Promise<core.APIResponse<void, CandidApi.patientRefunds.v1.delete.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/patient-refunds/v1/${await serializers.patientRefunds.v1.PatientRefundId.jsonOrThrow(
                    patientRefundId
                )}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.18.0",
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
            switch ((_response.error.body as serializers.patientRefunds.v1.delete.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: await serializers.patientRefunds.v1.delete.Error.parseOrThrow(
                            _response.error.body as serializers.patientRefunds.v1.delete.Error.Raw,
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
            error: CandidApi.patientRefunds.v1.delete.Error._unknown(_response.error),
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
