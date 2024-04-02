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
     * Creates a new guarantor and returns the newly created Guarantor object.
     */
    public async create(
        encounterId: CandidApi.EncounterId,
        request: CandidApi.guarantor.v1.GuarantorCreate
    ): Promise<core.APIResponse<CandidApi.guarantor.v1.Guarantor, CandidApi.guarantor.v1.create.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/guarantors/v1/${await serializers.EncounterId.jsonOrThrow(encounterId)}`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.17.5",
            },
            contentType: "application/json",
            body: await serializers.guarantor.v1.GuarantorCreate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.guarantor.v1.Guarantor.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.guarantor.v1.create.Error.Raw)?.errorName) {
                case "EncounterHasExistingGuarantorError":
                    return {
                        ok: false,
                        error: await serializers.guarantor.v1.create.Error.parseOrThrow(
                            _response.error.body as serializers.guarantor.v1.create.Error.Raw,
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
            error: CandidApi.guarantor.v1.create.Error._unknown(_response.error),
        };
    }

    /**
     * Retrieves a guarantor by its `guarantor_id`.
     */
    public async get(
        guarantorId: CandidApi.guarantor.v1.GuarantorId
    ): Promise<core.APIResponse<CandidApi.guarantor.v1.Guarantor, CandidApi.guarantor.v1.get.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/guarantors/v1/${await serializers.guarantor.v1.GuarantorId.jsonOrThrow(guarantorId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.17.5",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.guarantor.v1.Guarantor.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.guarantor.v1.get.Error._unknown(_response.error),
        };
    }

    /**
     * Updates a guarantor by its `guarantor_id`.
     */
    public async update(
        guarantorId: CandidApi.guarantor.v1.GuarantorId,
        request: CandidApi.guarantor.v1.GuarantorUpdate = {}
    ): Promise<core.APIResponse<CandidApi.guarantor.v1.Guarantor, CandidApi.guarantor.v1.update.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/guarantors/v1/${await serializers.guarantor.v1.GuarantorId.jsonOrThrow(guarantorId)}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.17.5",
            },
            contentType: "application/json",
            body: await serializers.guarantor.v1.GuarantorUpdate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.guarantor.v1.Guarantor.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.guarantor.v1.update.Error._unknown(_response.error),
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
