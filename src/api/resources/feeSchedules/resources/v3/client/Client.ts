/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import urlJoin from "url-join";

export declare namespace V3 {
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

export class V3 {
    constructor(protected readonly _options: V3.Options = {}) {}

    /**
     * Gets the rate that matches a service line. No result means no rate exists matching the service line's dimensions.
     *
     * @param {CandidApi.ServiceLineId} serviceLineId
     * @param {V3.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.feeSchedules.v3.getMatch(CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async getMatch(
        serviceLineId: CandidApi.ServiceLineId,
        requestOptions?: V3.RequestOptions
    ): Promise<
        core.APIResponse<CandidApi.feeSchedules.v3.MatchResult | undefined, CandidApi.feeSchedules.v3.getMatch.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/fee-schedules/v3/service-line/${encodeURIComponent(
                    serializers.ServiceLineId.jsonOrThrow(serviceLineId)
                )}/match`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.30.0",
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
                body: serializers.feeSchedules.v3.getMatch.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.feeSchedules.v3.getMatch.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "FailedToBuildServiceLineDimensions":
                    return {
                        ok: false,
                        error: serializers.feeSchedules.v3.getMatch.Error.parseOrThrow(
                            _response.error.body as serializers.feeSchedules.v3.getMatch.Error.Raw,
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
            error: CandidApi.feeSchedules.v3.getMatch.Error._unknown(_response.error),
        };
    }

    /**
     * Tests a service line against a rate to see if it matches.
     *
     * @param {CandidApi.ServiceLineId} serviceLineId
     * @param {CandidApi.RateId} rateId
     * @param {V3.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.feeSchedules.v3.testMatch(CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), CandidApi.RateId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async testMatch(
        serviceLineId: CandidApi.ServiceLineId,
        rateId: CandidApi.RateId,
        requestOptions?: V3.RequestOptions
    ): Promise<core.APIResponse<CandidApi.feeSchedules.v3.MatchTestResult, CandidApi.feeSchedules.v3.testMatch.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/fee-schedules/v3/service-line/${encodeURIComponent(
                    serializers.ServiceLineId.jsonOrThrow(serviceLineId)
                )}/match/${encodeURIComponent(serializers.RateId.jsonOrThrow(rateId))}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.30.0",
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
                body: serializers.feeSchedules.v3.MatchTestResult.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.feeSchedules.v3.testMatch.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "FailedToBuildServiceLineDimensions":
                    return {
                        ok: false,
                        error: serializers.feeSchedules.v3.testMatch.Error.parseOrThrow(
                            _response.error.body as serializers.feeSchedules.v3.testMatch.Error.Raw,
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
            error: CandidApi.feeSchedules.v3.testMatch.Error._unknown(_response.error),
        };
    }

    /**
     * Gets a list of dimensions with their rates. The rates returned will always be the most recent versions of those rates.
     *
     * @param {CandidApi.feeSchedules.v3.GetMultiRequest} request
     * @param {V3.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.feeSchedules.v3.getMulti({
     *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
     *         limit: 1,
     *         activeDate: "2023-01-15",
     *         payerUuid: CandidApi.payers.v3.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         organizationBillingProviderId: CandidApi.organizationProviders.v2.OrganizationProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         states: CandidApi.State.Aa,
     *         zipCodes: "string",
     *         licenseTypes: CandidApi.organizationProviders.v2.LicenseType.Md,
     *         facilityTypeCodes: CandidApi.FacilityTypeCode.Pharmacy,
     *         networkTypes: CandidApi.NetworkType.Ppo,
     *         cptCode: "string",
     *         modifiers: CandidApi.ProcedureModifier.TwentyTwo
     *     })
     */
    public async getMulti(
        request: CandidApi.feeSchedules.v3.GetMultiRequest = {},
        requestOptions?: V3.RequestOptions
    ): Promise<core.APIResponse<CandidApi.feeSchedules.v3.RatesPage, CandidApi.feeSchedules.v3.getMulti.Error>> {
        const {
            pageToken,
            limit,
            activeDate,
            payerUuid,
            organizationBillingProviderId,
            states,
            zipCodes,
            licenseTypes,
            facilityTypeCodes,
            networkTypes,
            cptCode,
            modifiers,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (pageToken != null) {
            _queryParams["page_token"] = pageToken;
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (activeDate != null) {
            _queryParams["active_date"] = activeDate;
        }

        if (payerUuid != null) {
            _queryParams["payer_uuid"] = payerUuid;
        }

        if (organizationBillingProviderId != null) {
            _queryParams["organization_billing_provider_id"] = organizationBillingProviderId;
        }

        if (states != null) {
            if (Array.isArray(states)) {
                _queryParams["states"] = states.map((item) => item);
            } else {
                _queryParams["states"] = states;
            }
        }

        if (zipCodes != null) {
            if (Array.isArray(zipCodes)) {
                _queryParams["zip_codes"] = zipCodes.map((item) => item);
            } else {
                _queryParams["zip_codes"] = zipCodes;
            }
        }

        if (licenseTypes != null) {
            if (Array.isArray(licenseTypes)) {
                _queryParams["license_types"] = licenseTypes.map((item) => item);
            } else {
                _queryParams["license_types"] = licenseTypes;
            }
        }

        if (facilityTypeCodes != null) {
            if (Array.isArray(facilityTypeCodes)) {
                _queryParams["facility_type_codes"] = facilityTypeCodes.map((item) => item);
            } else {
                _queryParams["facility_type_codes"] = facilityTypeCodes;
            }
        }

        if (networkTypes != null) {
            if (Array.isArray(networkTypes)) {
                _queryParams["network_types"] = networkTypes.map((item) => item);
            } else {
                _queryParams["network_types"] = networkTypes;
            }
        }

        if (cptCode != null) {
            _queryParams["cpt_code"] = cptCode;
        }

        if (modifiers != null) {
            if (Array.isArray(modifiers)) {
                _queryParams["modifiers"] = modifiers.map((item) => item);
            } else {
                _queryParams["modifiers"] = modifiers;
            }
        }

        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/fee-schedules/v3"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.30.0",
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
                body: serializers.feeSchedules.v3.RatesPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.feeSchedules.v3.getMulti.Error._unknown(_response.error),
        };
    }

    /**
     * Gets unique values for a dimension based on other selection criteria. The response is a list of dimensions with your criteria and the unique values populated. This API is useful for driving pivots on dimension values.
     *
     * @param {CandidApi.feeSchedules.v3.GetUniqueDimensionValuesRequest} request
     * @param {V3.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.feeSchedules.v3.getUniqueValuesForDimension({
     *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
     *         limit: 1,
     *         pivotDimension: CandidApi.feeSchedules.v3.DimensionName.PayerUuid,
     *         payerUuid: CandidApi.payers.v3.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         organizationBillingProviderId: CandidApi.organizationProviders.v2.OrganizationProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         states: CandidApi.State.Aa,
     *         zipCodes: "string",
     *         licenseTypes: CandidApi.organizationProviders.v2.LicenseType.Md,
     *         facilityTypeCodes: CandidApi.FacilityTypeCode.Pharmacy,
     *         networkTypes: CandidApi.NetworkType.Ppo,
     *         cptCode: "string",
     *         modifiers: CandidApi.ProcedureModifier.TwentyTwo
     *     })
     */
    public async getUniqueValuesForDimension(
        request: CandidApi.feeSchedules.v3.GetUniqueDimensionValuesRequest,
        requestOptions?: V3.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.feeSchedules.v3.DimensionsPage,
            CandidApi.feeSchedules.v3.getUniqueValuesForDimension.Error
        >
    > {
        const {
            pageToken,
            limit,
            pivotDimension,
            payerUuid,
            organizationBillingProviderId,
            states,
            zipCodes,
            licenseTypes,
            facilityTypeCodes,
            networkTypes,
            cptCode,
            modifiers,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (pageToken != null) {
            _queryParams["page_token"] = pageToken;
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        _queryParams["pivot_dimension"] = pivotDimension;
        if (payerUuid != null) {
            _queryParams["payer_uuid"] = payerUuid;
        }

        if (organizationBillingProviderId != null) {
            _queryParams["organization_billing_provider_id"] = organizationBillingProviderId;
        }

        if (states != null) {
            if (Array.isArray(states)) {
                _queryParams["states"] = states.map((item) => item);
            } else {
                _queryParams["states"] = states;
            }
        }

        if (zipCodes != null) {
            if (Array.isArray(zipCodes)) {
                _queryParams["zip_codes"] = zipCodes.map((item) => item);
            } else {
                _queryParams["zip_codes"] = zipCodes;
            }
        }

        if (licenseTypes != null) {
            if (Array.isArray(licenseTypes)) {
                _queryParams["license_types"] = licenseTypes.map((item) => item);
            } else {
                _queryParams["license_types"] = licenseTypes;
            }
        }

        if (facilityTypeCodes != null) {
            if (Array.isArray(facilityTypeCodes)) {
                _queryParams["facility_type_codes"] = facilityTypeCodes.map((item) => item);
            } else {
                _queryParams["facility_type_codes"] = facilityTypeCodes;
            }
        }

        if (networkTypes != null) {
            if (Array.isArray(networkTypes)) {
                _queryParams["network_types"] = networkTypes.map((item) => item);
            } else {
                _queryParams["network_types"] = networkTypes;
            }
        }

        if (cptCode != null) {
            _queryParams["cpt_code"] = cptCode;
        }

        if (modifiers != null) {
            if (Array.isArray(modifiers)) {
                _queryParams["modifiers"] = modifiers.map((item) => item);
            } else {
                _queryParams["modifiers"] = modifiers;
            }
        }

        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/fee-schedules/v3/unique-dimension-values"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.30.0",
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
                body: serializers.feeSchedules.v3.DimensionsPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.feeSchedules.v3.getUniqueValuesForDimension.Error._unknown(_response.error),
        };
    }

    /**
     * Gets every version of a rate.
     *
     * @param {CandidApi.RateId} rateId
     * @param {V3.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.feeSchedules.v3.getRateHistory(CandidApi.RateId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async getRateHistory(
        rateId: CandidApi.RateId,
        requestOptions?: V3.RequestOptions
    ): Promise<core.APIResponse<CandidApi.feeSchedules.v3.Rate[], CandidApi.feeSchedules.v3.getRateHistory.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/fee-schedules/v3/${encodeURIComponent(serializers.RateId.jsonOrThrow(rateId))}/history`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.30.0",
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
                body: serializers.feeSchedules.v3.getRateHistory.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.feeSchedules.v3.getRateHistory.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                    return {
                        ok: false,
                        error: serializers.feeSchedules.v3.getRateHistory.Error.parseOrThrow(
                            _response.error.body as serializers.feeSchedules.v3.getRateHistory.Error.Raw,
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
            error: CandidApi.feeSchedules.v3.getRateHistory.Error._unknown(_response.error),
        };
    }

    /**
     * Uploads a new fee schedule.\n Each rate may either be totally new as qualified by it's dimensions or a new version for an existing rate.\n If adding a new version to an existing rate, the rate must be posted with the next version number (previous version + 1) or a EntityConflictError will be returned.\n Use the dry run flag to discover already existing rates and to run validations. If validations for any rate fail, no rates will be saved to the system.
     *
     * @param {CandidApi.feeSchedules.v3.FeeScheduleUploadRequest} request
     * @param {V3.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.feeSchedules.v3.uploadFeeSchedule({
     *         dryRun: true,
     *         rates: [{
     *                 type: "new_rate",
     *                 dimensions: {
     *                     payerUuid: CandidApi.payers.v3.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *                     organizationBillingProviderId: CandidApi.organizationProviders.v2.OrganizationProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *                     states: new Set([CandidApi.State.Aa]),
     *                     zipCodes: new Set(["string"]),
     *                     licenseTypes: new Set([CandidApi.organizationProviders.v2.LicenseType.Md]),
     *                     facilityTypeCodes: new Set([CandidApi.FacilityTypeCode.Pharmacy]),
     *                     networkTypes: new Set([CandidApi.NetworkType.Ppo]),
     *                     cptCode: "string",
     *                     modifiers: new Set([CandidApi.ProcedureModifier.TwentyTwo])
     *                 },
     *                 entries: [{
     *                         startDate: "2024-4-11",
     *                         rateCents: 33000,
     *                         isDeactivated: false
     *                     }]
     *             }]
     *     })
     */
    public async uploadFeeSchedule(
        request: CandidApi.feeSchedules.v3.FeeScheduleUploadRequest,
        requestOptions?: V3.RequestOptions
    ): Promise<core.APIResponse<CandidApi.feeSchedules.v3.Rate[], CandidApi.feeSchedules.v3.uploadFeeSchedule.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/fee-schedules/v3"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.30.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.feeSchedules.v3.FeeScheduleUploadRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.feeSchedules.v3.uploadFeeSchedule.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.feeSchedules.v3.uploadFeeSchedule.Error.Raw)?.errorName) {
                case "FeeScheduleValidationHttpError":
                    return {
                        ok: false,
                        error: serializers.feeSchedules.v3.uploadFeeSchedule.Error.parseOrThrow(
                            _response.error.body as serializers.feeSchedules.v3.uploadFeeSchedule.Error.Raw,
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
            error: CandidApi.feeSchedules.v3.uploadFeeSchedule.Error._unknown(_response.error),
        };
    }

    /**
     * Soft deletes a rate from the system. Only the most recent version of a rate can be deleted.
     *
     * @param {CandidApi.RateId} rateId
     * @param {number} version
     * @param {V3.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.feeSchedules.v3.deleteRate(CandidApi.RateId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), 1)
     */
    public async deleteRate(
        rateId: CandidApi.RateId,
        version: number,
        requestOptions?: V3.RequestOptions
    ): Promise<core.APIResponse<void, CandidApi.feeSchedules.v3.deleteRate.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/fee-schedules/v3/${encodeURIComponent(
                    serializers.RateId.jsonOrThrow(rateId)
                )}/${encodeURIComponent(version)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.30.0",
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
                body: undefined,
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.feeSchedules.v3.deleteRate.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "EntityConflictError":
                    return {
                        ok: false,
                        error: serializers.feeSchedules.v3.deleteRate.Error.parseOrThrow(
                            _response.error.body as serializers.feeSchedules.v3.deleteRate.Error.Raw,
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
            error: CandidApi.feeSchedules.v3.deleteRate.Error._unknown(_response.error),
        };
    }

    /**
     * Gets the default payer threshold
     *
     * @param {V3.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.feeSchedules.v3.getPayerThresholdsDefault()
     */
    public async getPayerThresholdsDefault(
        requestOptions?: V3.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.feeSchedules.v3.PayerThreshold,
            CandidApi.feeSchedules.v3.getPayerThresholdsDefault.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/fee-schedules/v3/payer-threshold/default"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.30.0",
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
                body: serializers.feeSchedules.v3.PayerThreshold.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.feeSchedules.v3.getPayerThresholdsDefault.Error._unknown(_response.error),
        };
    }

    /**
     * Gets a list of payers and thresholds by their uuids
     *
     * @param {CandidApi.feeSchedules.v3.PayerThresholdGetRequest} request
     * @param {V3.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.feeSchedules.v3.getPayerThresholds({
     *         payerUuids: CandidApi.payers.v3.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
     *     })
     */
    public async getPayerThresholds(
        request: CandidApi.feeSchedules.v3.PayerThresholdGetRequest,
        requestOptions?: V3.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.feeSchedules.v3.PayerThresholdsPage,
            CandidApi.feeSchedules.v3.getPayerThresholds.Error
        >
    > {
        const { payerUuids } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (Array.isArray(payerUuids)) {
            _queryParams["payer_uuids"] = payerUuids.map((item) => item);
        } else {
            _queryParams["payer_uuids"] = payerUuids;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/fee-schedules/v3/payer-threshold"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.30.0",
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
                body: serializers.feeSchedules.v3.PayerThresholdsPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.feeSchedules.v3.getPayerThresholds.Error._unknown(_response.error),
        };
    }

    /**
     * Sets the threshold information for a payer
     *
     * @param {CandidApi.payers.v3.PayerUuid} payerUuid
     * @param {CandidApi.feeSchedules.v3.PayerThreshold} request
     * @param {V3.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.feeSchedules.v3.setPayerThreshold(CandidApi.payers.v3.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
     *         upperThresholdCents: 1,
     *         lowerThresholdCents: 1,
     *         disablePaidIncorrectly: true
     *     })
     */
    public async setPayerThreshold(
        payerUuid: CandidApi.payers.v3.PayerUuid,
        request: CandidApi.feeSchedules.v3.PayerThreshold,
        requestOptions?: V3.RequestOptions
    ): Promise<
        core.APIResponse<CandidApi.feeSchedules.v3.PayerThreshold, CandidApi.feeSchedules.v3.setPayerThreshold.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/fee-schedules/v3/payer-threshold/${encodeURIComponent(
                    serializers.payers.v3.PayerUuid.jsonOrThrow(payerUuid)
                )}`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.30.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.feeSchedules.v3.PayerThreshold.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.feeSchedules.v3.PayerThreshold.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.feeSchedules.v3.setPayerThreshold.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                    return {
                        ok: false,
                        error: serializers.feeSchedules.v3.setPayerThreshold.Error.parseOrThrow(
                            _response.error.body as serializers.feeSchedules.v3.setPayerThreshold.Error.Raw,
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
            error: CandidApi.feeSchedules.v3.setPayerThreshold.Error._unknown(_response.error),
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
