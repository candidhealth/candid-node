/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../..";
import * as serializers from "../../../../../../serialization";
import urlJoin from "url-join";

export declare namespace V1 {
    interface Options {
        environment?: environments.CandidApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class V1 {
    constructor(protected readonly options: V1.Options) {}

    /**
     * **This endpoint is incubating.**
     * Retrieves a previously created patient refund by its `patient_refund_id`.
     *
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
                "X-Fern-SDK-Version": "0.10.0",
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

        return {
            ok: false,
            error: CandidApi.patientRefunds.v1.get.Error._unknown(_response.error),
        };
    }

    /**
     * **This endpoint is incubating.**
     * Creates a new patient refund record and returns the newly created PatientRefund object.
     * The allocations can describe whether the refund is being applied toward a specific service line,
     * claim, or billing provider.
     *
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
                "X-Fern-SDK-Version": "0.10.0",
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

        return {
            ok: false,
            error: CandidApi.patientRefunds.v1.create.Error._unknown(_response.error),
        };
    }

    /**
     * **This endpoint is incubating.**
     * Deletes the patient refund record matching the provided patient_refund_id.
     *
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
                "X-Fern-SDK-Version": "0.10.0",
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
