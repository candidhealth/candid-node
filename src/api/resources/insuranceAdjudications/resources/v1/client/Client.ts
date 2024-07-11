/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import urlJoin from "url-join";

export declare namespace V1 {
    interface Options {
        environment?: core.Supplier<environments.CandidApiEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
        abortSignal?: AbortSignal;
    }
}

export class V1 {
    constructor(protected readonly _options: V1.Options = {}) {}

    /**
     * Retrieves a previously created insurance adjudication by its `insurance_adjudication_id`.
     *
     * @param {CandidApi.insuranceAdjudications.v1.InsuranceAdjudicationId} insuranceAdjudicationId
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await candidApi.insuranceAdjudications.v1.get(CandidApi.insuranceAdjudications.v1.InsuranceAdjudicationId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async get(
        insuranceAdjudicationId: CandidApi.insuranceAdjudications.v1.InsuranceAdjudicationId,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.insuranceAdjudications.v1.InsuranceAdjudication,
            CandidApi.insuranceAdjudications.v1.get.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production,
                `/api/insurance-adjudications/v1/${encodeURIComponent(
                    await serializers.insuranceAdjudications.v1.InsuranceAdjudicationId.jsonOrThrow(
                        insuranceAdjudicationId
                    )
                )}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.22.2-15e24b1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
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
     * @param {CandidApi.insuranceAdjudications.v1.InsuranceAdjudicationCreate} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await candidApi.insuranceAdjudications.v1.create({
     *         payerIdentifier: {
     *             type: "payer_info"
     *         },
     *         payee: {},
     *         postDate: "2023-01-15",
     *         checkNumber: "string",
     *         checkDate: "2023-01-15",
     *         note: "string",
     *         claims: {
     *             "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32": [{}]
     *         }
     *     })
     */
    public async create(
        request: CandidApi.insuranceAdjudications.v1.InsuranceAdjudicationCreate,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.insuranceAdjudications.v1.InsuranceAdjudication,
            CandidApi.insuranceAdjudications.v1.create.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production,
                "/api/insurance-adjudications/v1"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.22.2-15e24b1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.insuranceAdjudications.v1.InsuranceAdjudicationCreate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
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

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.insuranceAdjudications.v1.create.Error.Raw)?.errorName) {
                case "EraNotFullyProcessedError":
                    return {
                        ok: false,
                        error: await serializers.insuranceAdjudications.v1.create.Error.parseOrThrow(
                            _response.error.body as serializers.insuranceAdjudications.v1.create.Error.Raw,
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
            error: CandidApi.insuranceAdjudications.v1.create.Error._unknown(_response.error),
        };
    }

    /**
     * Deletes the insurance adjudication record matching the provided insurance_adjudication_id.
     *
     * @param {CandidApi.insuranceAdjudications.v1.InsuranceAdjudicationId} insuranceAdjudicationId
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await candidApi.insuranceAdjudications.v1.delete(CandidApi.insuranceAdjudications.v1.InsuranceAdjudicationId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async delete(
        insuranceAdjudicationId: CandidApi.insuranceAdjudications.v1.InsuranceAdjudicationId,
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<void, CandidApi.insuranceAdjudications.v1.delete.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production,
                `/api/insurance-adjudications/v1/${encodeURIComponent(
                    await serializers.insuranceAdjudications.v1.InsuranceAdjudicationId.jsonOrThrow(
                        insuranceAdjudicationId
                    )
                )}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.22.2-15e24b1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
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

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
