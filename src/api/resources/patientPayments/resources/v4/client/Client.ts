/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../..";
import URLSearchParams from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";

export declare namespace V4 {
    interface Options {
        environment?: environments.CandidApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class V4 {
    constructor(protected readonly options: V4.Options) {}

    /**
     * Returns all patient payments satisfying the search criteria AND whose organization_id matches
     * the current organization_id of the authenticated user.
     *
     */
    public async getMulti(
        request: CandidApi.patientPayments.v4.GetMultiPatientPaymentsRequest = {}
    ): Promise<
        core.APIResponse<CandidApi.patientPayments.v4.PatientPaymentsPage, CandidApi.patientPayments.v4.getMulti.Error>
    > {
        const {
            limit,
            patientExternalId,
            claimId,
            serviceLineId,
            billingProviderId,
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
                "/api/patient-payments/v4"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.14.1",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.patientPayments.v4.PatientPaymentsPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.patientPayments.v4.getMulti.Error._unknown(_response.error),
        };
    }

    /**
     * Retrieves a previously created patient payment by its `patient_payment_id`.
     *
     */
    public async get(
        patientPaymentId: CandidApi.patientPayments.v4.PatientPaymentId
    ): Promise<core.APIResponse<CandidApi.patientPayments.v4.PatientPayment, CandidApi.patientPayments.v4.get.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/patient-payments/v4/${await serializers.patientPayments.v4.PatientPaymentId.jsonOrThrow(
                    patientPaymentId
                )}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.14.1",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.patientPayments.v4.PatientPayment.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.patientPayments.v4.get.Error._unknown(_response.error),
        };
    }

    /**
     * Creates a new patient payment record and returns the newly created PatientPayment object.
     * The allocations can describe whether the payment is being applied toward a specific service line,
     * claim, or billing provider.
     *
     */
    public async create(
        request: CandidApi.patientPayments.v4.PatientPaymentCreate
    ): Promise<
        core.APIResponse<CandidApi.patientPayments.v4.PatientPayment, CandidApi.patientPayments.v4.create.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                "/api/patient-payments/v4"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.14.1",
            },
            contentType: "application/json",
            body: await serializers.patientPayments.v4.PatientPaymentCreate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.patientPayments.v4.PatientPayment.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.patientPayments.v4.create.Error._unknown(_response.error),
        };
    }

    /**
     * Updates the patient payment record matching the provided patient_payment_id.
     *
     */
    public async update(
        patientPaymentId: CandidApi.patientPayments.v4.PatientPaymentId,
        request: CandidApi.patientPayments.v4.PatientPaymentUpdate = {}
    ): Promise<
        core.APIResponse<CandidApi.patientPayments.v4.PatientPayment, CandidApi.patientPayments.v4.update.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/patient-payments/v4/${await serializers.patientPayments.v4.PatientPaymentId.jsonOrThrow(
                    patientPaymentId
                )}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.14.1",
            },
            contentType: "application/json",
            body: await serializers.patientPayments.v4.PatientPaymentUpdate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.patientPayments.v4.PatientPayment.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.patientPayments.v4.update.Error._unknown(_response.error),
        };
    }

    /**
     * Deletes the patient payment record matching the provided patient_payment_id.
     *
     */
    public async delete(
        patientPaymentId: CandidApi.patientPayments.v4.PatientPaymentId
    ): Promise<core.APIResponse<void, CandidApi.patientPayments.v4.delete.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/patient-payments/v4/${await serializers.patientPayments.v4.PatientPaymentId.jsonOrThrow(
                    patientPaymentId
                )}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.14.1",
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
            error: CandidApi.patientPayments.v4.delete.Error._unknown(_response.error),
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
