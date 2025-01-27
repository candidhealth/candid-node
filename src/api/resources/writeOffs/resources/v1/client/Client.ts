/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";

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
     * Returns all write-offs satisfying the search criteria.
     *
     * @param {CandidApi.writeOffs.v1.GetMultiWriteOffsRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.writeOffs.v1.getMulti({
     *         limit: 1,
     *         patientExternalId: CandidApi.PatientExternalId("string"),
     *         payerUuid: CandidApi.payers.v3.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         serviceLineId: CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         claimId: CandidApi.ClaimId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         billingProviderId: CandidApi.ProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         sort: CandidApi.writeOffs.v1.WriteOffSortField.AmountCents,
     *         sortDirection: CandidApi.SortDirection.Asc,
     *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
     *         accountTypes: CandidApi.AccountType.Patient
     *     })
     */
    public async getMulti(
        request: CandidApi.writeOffs.v1.GetMultiWriteOffsRequest = {},
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<CandidApi.writeOffs.v1.WriteOffsPage, CandidApi.writeOffs.v1.getMulti.Error>> {
        const {
            limit,
            patientExternalId,
            payerUuid,
            serviceLineId,
            claimId,
            billingProviderId,
            sort,
            sortDirection,
            pageToken,
            accountTypes,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (patientExternalId != null) {
            _queryParams["patient_external_id"] = patientExternalId;
        }

        if (payerUuid != null) {
            _queryParams["payer_uuid"] = payerUuid;
        }

        if (serviceLineId != null) {
            _queryParams["service_line_id"] = serviceLineId;
        }

        if (claimId != null) {
            _queryParams["claim_id"] = claimId;
        }

        if (billingProviderId != null) {
            _queryParams["billing_provider_id"] = billingProviderId;
        }

        if (sort != null) {
            _queryParams["sort"] = sort;
        }

        if (sortDirection != null) {
            _queryParams["sort_direction"] = sortDirection;
        }

        if (pageToken != null) {
            _queryParams["page_token"] = pageToken;
        }

        if (accountTypes != null) {
            if (Array.isArray(accountTypes)) {
                _queryParams["account_types"] = accountTypes.map((item) => item);
            } else {
                _queryParams["account_types"] = accountTypes;
            }
        }

        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/write-offs/v1"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.2",
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
                body: serializers.writeOffs.v1.WriteOffsPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.writeOffs.v1.getMulti.Error._unknown(_response.error),
        };
    }

    /**
     * Retrieves a previously created write off by its `write_off_id`.
     *
     * @param {CandidApi.writeOffs.v1.WriteOffId} writeOffId
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.writeOffs.v1.get(CandidApi.writeOffs.v1.WriteOffId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async get(
        writeOffId: CandidApi.writeOffs.v1.WriteOffId,
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<CandidApi.writeOffs.v1.WriteOff, CandidApi.writeOffs.v1.get.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/write-offs/v1/${encodeURIComponent(serializers.writeOffs.v1.WriteOffId.jsonOrThrow(writeOffId))}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.2",
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
                body: serializers.writeOffs.v1.WriteOff.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.writeOffs.v1.get.Error._unknown(_response.error),
        };
    }

    /**
     * Creates one or many write-offs applied toward a specific service line,
     * claim, or billing provider.
     *
     * @param {CandidApi.writeOffs.v1.CreateWriteOffsRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.writeOffs.v1.create({
     *         writeOffs: [{
     *                 type: "patient",
     *                 writeOffTimestamp: new Date("2024-01-15T09:30:00.000Z"),
     *                 writeOffNote: "string",
     *                 writeOffReason: CandidApi.writeOffs.v1.PatientWriteOffReason.SmallBalance,
     *                 serviceLineId: CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *                 amountCents: 1
     *             }]
     *     })
     */
    public async create(
        request: CandidApi.writeOffs.v1.CreateWriteOffsRequest,
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<CandidApi.writeOffs.v1.CreateWriteOffsResponse, CandidApi.writeOffs.v1.create.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/write-offs/v1"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.writeOffs.v1.CreateWriteOffsRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.writeOffs.v1.CreateWriteOffsResponse.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.writeOffs.v1.create.Error._unknown(_response.error),
        };
    }

    /**
     * Reverts a write off given a `write_off_id`.
     *
     * @param {CandidApi.writeOffs.v1.WriteOffId} writeOffId
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.writeOffs.v1.revert(CandidApi.writeOffs.v1.WriteOffId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async revert(
        writeOffId: CandidApi.writeOffs.v1.WriteOffId,
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<CandidApi.writeOffs.v1.WriteOff, CandidApi.writeOffs.v1.revert.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/write-offs/v1/${encodeURIComponent(
                    serializers.writeOffs.v1.WriteOffId.jsonOrThrow(writeOffId)
                )}/revert`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.39.2",
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
                body: serializers.writeOffs.v1.WriteOff.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.writeOffs.v1.revert.Error._unknown(_response.error),
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
