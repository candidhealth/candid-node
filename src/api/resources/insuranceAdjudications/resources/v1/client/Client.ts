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
     * Retrieves a previously created insurance adjudication by its `insurance_adjudication_id`.
     *
     */
    public async get(
        insuranceAdjudicationId: CandidApi.insuranceAdjudications.v1.InsuranceAdjudicationId
    ): Promise<
        core.APIResponse<
            CandidApi.insuranceAdjudications.v1.InsuranceAdjudication,
            CandidApi.insuranceAdjudications.v1.get.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/insurance-adjudications/v1/${await serializers.insuranceAdjudications.v1.InsuranceAdjudicationId.jsonOrThrow(
                    insuranceAdjudicationId
                )}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.12.0",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.insuranceAdjudications.v1.InsuranceAdjudication.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.insuranceAdjudications.v1.get.Error._unknown(_response.error),
        };
    }

    /**
     * Creates a new insurance adjudication record and returns the newly created InsuranceAdjudication object.
     *
     */
    public async create(
        request: CandidApi.insuranceAdjudications.v1.InsuranceAdjudicationCreate
    ): Promise<
        core.APIResponse<
            CandidApi.insuranceAdjudications.v1.InsuranceAdjudication,
            CandidApi.insuranceAdjudications.v1.create.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                "/api/insurance-adjudications/v1"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.12.0",
            },
            contentType: "application/json",
            body: await serializers.insuranceAdjudications.v1.InsuranceAdjudicationCreate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.insuranceAdjudications.v1.InsuranceAdjudication.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.insuranceAdjudications.v1.create.Error._unknown(_response.error),
        };
    }

    /**
     * Deletes the insurance adjudication record matching the provided insurance_adjudication_id.
     *
     */
    public async delete(
        insuranceAdjudicationId: CandidApi.insuranceAdjudications.v1.InsuranceAdjudicationId
    ): Promise<core.APIResponse<void, CandidApi.insuranceAdjudications.v1.delete.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/insurance-adjudications/v1/${await serializers.insuranceAdjudications.v1.InsuranceAdjudicationId.jsonOrThrow(
                    insuranceAdjudicationId
                )}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.12.0",
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
            error: CandidApi.insuranceAdjudications.v1.delete.Error._unknown(_response.error),
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
