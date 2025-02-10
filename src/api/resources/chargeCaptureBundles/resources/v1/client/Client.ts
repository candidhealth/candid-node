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
     * @param {CandidApi.ChargeCaptureBundleId} chargeCaptureBundleId
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.chargeCaptureBundles.v1.get(CandidApi.ChargeCaptureBundleId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async get(
        chargeCaptureBundleId: CandidApi.ChargeCaptureBundleId,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.chargeCaptureBundles.v1.ChargeCaptureBundle,
            CandidApi.chargeCaptureBundles.v1.get.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/charge_capture_bundle/v1/${encodeURIComponent(
                    serializers.ChargeCaptureBundleId.jsonOrThrow(chargeCaptureBundleId)
                )}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.4",
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
                body: serializers.chargeCaptureBundles.v1.ChargeCaptureBundle.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.chargeCaptureBundles.v1.get.Error.Raw)?.errorName) {
                case "NotImplementedError":
                    return {
                        ok: false,
                        error: serializers.chargeCaptureBundles.v1.get.Error.parseOrThrow(
                            _response.error.body as serializers.chargeCaptureBundles.v1.get.Error.Raw,
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
            error: CandidApi.chargeCaptureBundles.v1.get.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.ChargeCaptureBundleId} chargeCaptureBundleId
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.chargeCaptureBundles.v1.resubmit(CandidApi.ChargeCaptureBundleId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async resubmit(
        chargeCaptureBundleId: CandidApi.ChargeCaptureBundleId,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.chargeCaptureBundles.v1.ChargeCaptureBundle,
            CandidApi.chargeCaptureBundles.v1.resubmit.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/charge_capture_bundle/v1/${encodeURIComponent(
                    serializers.ChargeCaptureBundleId.jsonOrThrow(chargeCaptureBundleId)
                )}`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.4",
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
                body: serializers.chargeCaptureBundles.v1.ChargeCaptureBundle.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.chargeCaptureBundles.v1.resubmit.Error.Raw)?.errorName) {
                case "NotImplementedError":
                    return {
                        ok: false,
                        error: serializers.chargeCaptureBundles.v1.resubmit.Error.parseOrThrow(
                            _response.error.body as serializers.chargeCaptureBundles.v1.resubmit.Error.Raw,
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
            error: CandidApi.chargeCaptureBundles.v1.resubmit.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.chargeCaptureBundles.v1.GetAllChargeCaptureBundlesRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.chargeCaptureBundles.v1.getAll({
     *         limit: 1,
     *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
     *         patientExternalId: "string",
     *         bundleStatus: CandidApi.chargeCaptureBundles.v1.ChargeCaptureBundleStatus.InProgress,
     *         chargeStatus: CandidApi.chargeCapture.v1.ChargeCaptureStatus.Planned,
     *         chargeExternalId: "string",
     *         dateOfService: "2023-01-15"
     *     })
     */
    public async getAll(
        request: CandidApi.chargeCaptureBundles.v1.GetAllChargeCaptureBundlesRequest = {},
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.chargeCaptureBundles.v1.ChargeCaptureBundlePage,
            CandidApi.chargeCaptureBundles.v1.getAll.Error
        >
    > {
        const { limit, pageToken, patientExternalId, bundleStatus, chargeStatus, chargeExternalId, dateOfService } =
            request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (pageToken != null) {
            _queryParams["page_token"] = pageToken;
        }

        if (patientExternalId != null) {
            _queryParams["patient_external_id"] = patientExternalId;
        }

        if (bundleStatus != null) {
            _queryParams["bundle_status"] = bundleStatus;
        }

        if (chargeStatus != null) {
            _queryParams["charge_status"] = chargeStatus;
        }

        if (chargeExternalId != null) {
            _queryParams["charge_external_id"] = chargeExternalId;
        }

        if (dateOfService != null) {
            _queryParams["date_of_service"] = dateOfService;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/charge_capture_bundle/v1"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.4",
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
                body: serializers.chargeCaptureBundles.v1.ChargeCaptureBundlePage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.chargeCaptureBundles.v1.getAll.Error.Raw)?.errorName) {
                case "NotImplementedError":
                    return {
                        ok: false,
                        error: serializers.chargeCaptureBundles.v1.getAll.Error.parseOrThrow(
                            _response.error.body as serializers.chargeCaptureBundles.v1.getAll.Error.Raw,
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
            error: CandidApi.chargeCaptureBundles.v1.getAll.Error._unknown(_response.error),
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
