/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../../../environments";
import * as core from "../../../../../../../../core";
import * as CandidApi from "../../../../../../../index";
import * as serializers from "../../../../../../../../serialization/index";
import urlJoin from "url-join";

export declare namespace V1 {
    interface Options {
        environment?: core.Supplier<environments.CandidApiEnvironment | environments.CandidApiEnvironmentUrls>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class V1 {
    constructor(protected readonly _options: V1.Options = {}) {}

    /**
     * Creates a new Coverage. A Coverage provides the high-level identifiers and descriptors of a specific insurance plan for a specific individual - typically the information you can find on an insurance card. Additionally a coverage will include detailed benefits information covered by the specific plan for the individual.
     *
     * @param {CandidApi.preEncounter.coverages.v1.MutableCoverage} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.coverages.v1.create({
     *         status: CandidApi.preEncounter.coverages.v1.CoverageStatus.Active,
     *         subscriber: {
     *             name: {
     *                 family: "string",
     *                 given: ["string"],
     *                 use: CandidApi.preEncounter.NameUse.Usual,
     *                 period: {
     *                     start: "2023-01-15",
     *                     end: "2023-01-15"
     *                 }
     *             },
     *             dateOfBirth: "2023-01-15",
     *             biologicalSex: CandidApi.preEncounter.Sex.Female
     *         },
     *         relationship: CandidApi.preEncounter.Relationship.Self,
     *         patient: CandidApi.preEncounter.PatientId("string"),
     *         insurancePlan: {
     *             memberId: "string",
     *             payerId: CandidApi.preEncounter.PayerId("string"),
     *             payerName: "string",
     *             groupNumber: "string",
     *             name: "string",
     *             planType: CandidApi.preEncounter.coverages.v1.NetworkType.SelfPay,
     *             type: CandidApi.preEncounter.coverages.v1.InsuranceTypeCode.C01,
     *             period: {
     *                 start: "2023-01-15",
     *                 end: "2023-01-15"
     *             },
     *             insuranceCardImageLocator: "string"
     *         },
     *         verified: true,
     *         eligibilityChecks: [{
     *                 checkId: "string",
     *                 serviceCode: CandidApi.preEncounter.coverages.v1.ServiceTypeCode.MedicalCare,
     *                 status: CandidApi.preEncounter.coverages.v1.EligibilityCheckStatus.Created,
     *                 initiatedBy: CandidApi.preEncounter.UserId("string"),
     *                 initiatedAt: new Date("2024-01-15T09:30:00.000Z")
     *             }],
     *         benefits: {
     *             planCoverage: {
     *                 "key": "value"
     *             },
     *             serviceSpecificCoverage: {
     *                 "key": "value"
     *             }
     *         }
     *     })
     */
    public async create(
        request: CandidApi.preEncounter.coverages.v1.MutableCoverage,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<CandidApi.preEncounter.coverages.v1.Coverage, CandidApi.preEncounter.coverages.v1.create.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                "/coverages/v1"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.33.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.preEncounter.coverages.v1.MutableCoverage.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.preEncounter.coverages.v1.Coverage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.preEncounter.coverages.v1.create.Error._unknown(_response.error),
        };
    }

    /**
     * Updates a Coverage. The path must contain the most recent version to prevent race conditions. Updating historic versions is not supported.
     *
     * @param {CandidApi.preEncounter.CoverageId} id
     * @param {string} version
     * @param {CandidApi.preEncounter.coverages.v1.MutableCoverage} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.coverages.v1.update(CandidApi.preEncounter.CoverageId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), "string", {
     *         status: CandidApi.preEncounter.coverages.v1.CoverageStatus.Active,
     *         subscriber: {
     *             name: {
     *                 family: "string",
     *                 given: ["string"],
     *                 use: CandidApi.preEncounter.NameUse.Usual,
     *                 period: {
     *                     start: "2023-01-15",
     *                     end: "2023-01-15"
     *                 }
     *             },
     *             dateOfBirth: "2023-01-15",
     *             biologicalSex: CandidApi.preEncounter.Sex.Female
     *         },
     *         relationship: CandidApi.preEncounter.Relationship.Self,
     *         patient: CandidApi.preEncounter.PatientId("string"),
     *         insurancePlan: {
     *             memberId: "string",
     *             payerId: CandidApi.preEncounter.PayerId("string"),
     *             payerName: "string",
     *             groupNumber: "string",
     *             name: "string",
     *             planType: CandidApi.preEncounter.coverages.v1.NetworkType.SelfPay,
     *             type: CandidApi.preEncounter.coverages.v1.InsuranceTypeCode.C01,
     *             period: {
     *                 start: "2023-01-15",
     *                 end: "2023-01-15"
     *             },
     *             insuranceCardImageLocator: "string"
     *         },
     *         verified: true,
     *         eligibilityChecks: [{
     *                 checkId: "string",
     *                 serviceCode: CandidApi.preEncounter.coverages.v1.ServiceTypeCode.MedicalCare,
     *                 status: CandidApi.preEncounter.coverages.v1.EligibilityCheckStatus.Created,
     *                 initiatedBy: CandidApi.preEncounter.UserId("string"),
     *                 initiatedAt: new Date("2024-01-15T09:30:00.000Z")
     *             }],
     *         benefits: {
     *             planCoverage: {
     *                 "key": "value"
     *             },
     *             serviceSpecificCoverage: {
     *                 "key": "value"
     *             }
     *         }
     *     })
     */
    public async update(
        id: CandidApi.preEncounter.CoverageId,
        version: string,
        request: CandidApi.preEncounter.coverages.v1.MutableCoverage,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<CandidApi.preEncounter.coverages.v1.Coverage, CandidApi.preEncounter.coverages.v1.update.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                `/coverages/v1/${encodeURIComponent(
                    serializers.preEncounter.CoverageId.jsonOrThrow(id)
                )}/${encodeURIComponent(version)}`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.33.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.preEncounter.coverages.v1.MutableCoverage.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.preEncounter.coverages.v1.Coverage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.preEncounter.coverages.v1.update.Error.Raw)?.errorName) {
                case "NotFoundError":
                case "VersionConflictError":
                    return {
                        ok: false,
                        error: serializers.preEncounter.coverages.v1.update.Error.parseOrThrow(
                            _response.error.body as serializers.preEncounter.coverages.v1.update.Error.Raw,
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
            error: CandidApi.preEncounter.coverages.v1.update.Error._unknown(_response.error),
        };
    }

    /**
     * gets a specific Coverage
     *
     * @param {CandidApi.preEncounter.CoverageId} id
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.coverages.v1.get(CandidApi.preEncounter.CoverageId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async get(
        id: CandidApi.preEncounter.CoverageId,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<CandidApi.preEncounter.coverages.v1.Coverage, CandidApi.preEncounter.coverages.v1.get.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                `/coverages/v1/${encodeURIComponent(serializers.preEncounter.CoverageId.jsonOrThrow(id))}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.33.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.preEncounter.coverages.v1.Coverage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.preEncounter.coverages.v1.get.Error._unknown(_response.error),
        };
    }

    /**
     * Gets a coverage along with it's full history. The return list is ordered by version ascending.
     *
     * @param {CandidApi.preEncounter.CoverageId} id
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.coverages.v1.getHistory(CandidApi.preEncounter.CoverageId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async getHistory(
        id: CandidApi.preEncounter.CoverageId,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.coverages.v1.Coverage[],
            CandidApi.preEncounter.coverages.v1.getHistory.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                `/coverages/v1/${encodeURIComponent(serializers.preEncounter.CoverageId.jsonOrThrow(id))}/history`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.33.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.preEncounter.coverages.v1.getHistory.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.preEncounter.coverages.v1.getHistory.Error.Raw)?.errorName) {
                case "NotFoundError":
                    return {
                        ok: false,
                        error: serializers.preEncounter.coverages.v1.getHistory.Error.parseOrThrow(
                            _response.error.body as serializers.preEncounter.coverages.v1.getHistory.Error.Raw,
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
            error: CandidApi.preEncounter.coverages.v1.getHistory.Error._unknown(_response.error),
        };
    }

    /**
     * Returns a list of Coverages based on the search criteria.
     *
     * @param {CandidApi.preEncounter.coverages.v1.CoverageGetMultiRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.coverages.v1.getMulti({
     *         patientId: "string"
     *     })
     */
    public async getMulti(
        request: CandidApi.preEncounter.coverages.v1.CoverageGetMultiRequest = {},
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.coverages.v1.Coverage[],
            CandidApi.preEncounter.coverages.v1.getMulti.Error
        >
    > {
        const { patientId } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (patientId != null) {
            _queryParams["patient_id"] = patientId;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                "/coverages/v1"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.33.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.preEncounter.coverages.v1.getMulti.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.preEncounter.coverages.v1.getMulti.Error._unknown(_response.error),
        };
    }

    /**
     * Scans up to 100 coverage updates. The since query parameter is inclusive, and the result list is ordered by updatedAt ascending.
     *
     * @param {CandidApi.preEncounter.coverages.v1.CoverageScanRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.coverages.v1.scan({
     *         since: new Date("2024-01-15T09:30:00.000Z")
     *     })
     */
    public async scan(
        request: CandidApi.preEncounter.coverages.v1.CoverageScanRequest,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<CandidApi.preEncounter.coverages.v1.Coverage[], CandidApi.preEncounter.coverages.v1.scan.Error>
    > {
        const { since } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["since"] = since.toISOString();
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                "/coverages/v1/updates/scan"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.33.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.preEncounter.coverages.v1.scan.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.preEncounter.coverages.v1.scan.Error._unknown(_response.error),
        };
    }

    /**
     * Initiates an eligibility check. Returns the metadata of the check if successfully initiated.
     *
     * @param {CandidApi.preEncounter.CoverageId} id
     * @param {CandidApi.preEncounter.coverages.v1.CheckEligibilityRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.coverages.v1.checkEligibility(CandidApi.preEncounter.CoverageId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
     *         serviceCode: CandidApi.preEncounter.coverages.v1.ServiceTypeCode.MedicalCare,
     *         dateOfService: "2023-01-15",
     *         npi: "string"
     *     })
     */
    public async checkEligibility(
        id: CandidApi.preEncounter.CoverageId,
        request: CandidApi.preEncounter.coverages.v1.CheckEligibilityRequest,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.coverages.v1.EligibilityCheckMetadata,
            CandidApi.preEncounter.coverages.v1.checkEligibility.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                `/coverages/v1/${encodeURIComponent(serializers.preEncounter.CoverageId.jsonOrThrow(id))}/eligibility`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.33.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.preEncounter.coverages.v1.CheckEligibilityRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.preEncounter.coverages.v1.EligibilityCheckMetadata.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.preEncounter.coverages.v1.checkEligibility.Error._unknown(_response.error),
        };
    }

    /**
     * Gets the eligibility of a patient for a specific coverage if successful.
     *
     * @param {CandidApi.preEncounter.CoverageId} id
     * @param {string} checkId
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.coverages.v1.getEligibility(CandidApi.preEncounter.CoverageId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), "string")
     */
    public async getEligibility(
        id: CandidApi.preEncounter.CoverageId,
        checkId: string,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.coverages.v1.CoverageEligibilityCheckResponse,
            CandidApi.preEncounter.coverages.v1.getEligibility.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                `/coverages/v1/${encodeURIComponent(
                    serializers.preEncounter.CoverageId.jsonOrThrow(id)
                )}/eligibility/${encodeURIComponent(checkId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.33.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.preEncounter.coverages.v1.CoverageEligibilityCheckResponse.parseOrThrow(
                    _response.body,
                    {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        breadcrumbsPrefix: ["response"],
                    }
                ),
            };
        }

        return {
            ok: false,
            error: CandidApi.preEncounter.coverages.v1.getEligibility.Error._unknown(_response.error),
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
