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
     * Creates a new guarantor and returns the newly created Guarantor object.
     *
     * @param {CandidApi.EncounterId} encounterId
     * @param {CandidApi.guarantor.v1.GuarantorCreate} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.guarantor.v1.create(CandidApi.EncounterId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
     *         phoneNumbers: [{
     *                 number: "1234567890",
     *                 type: CandidApi.PhoneNumberType.Home
     *             }],
     *         phoneConsent: true,
     *         email: CandidApi.Email("johndoe@joincandidhealth.com"),
     *         emailConsent: true,
     *         firstName: "string",
     *         lastName: "string",
     *         externalId: "string",
     *         dateOfBirth: "2023-01-15",
     *         address: {
     *             address1: "123 Main St",
     *             address2: "Apt 1",
     *             city: "New York",
     *             state: CandidApi.State.Ny,
     *             zipCode: "10001",
     *             zipPlusFourCode: "1234"
     *         }
     *     })
     */
    public async create(
        encounterId: CandidApi.EncounterId,
        request: CandidApi.guarantor.v1.GuarantorCreate,
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<CandidApi.guarantor.v1.Guarantor, CandidApi.guarantor.v1.create.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/guarantors/v1/${encodeURIComponent(serializers.EncounterId.jsonOrThrow(encounterId))}`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.29.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.guarantor.v1.GuarantorCreate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.guarantor.v1.Guarantor.parseOrThrow(_response.body, {
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
                case "HttpRequestValidationsError":
                    return {
                        ok: false,
                        error: serializers.guarantor.v1.create.Error.parseOrThrow(
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
     *
     * @param {CandidApi.guarantor.v1.GuarantorId} guarantorId
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.guarantor.v1.get(CandidApi.guarantor.v1.GuarantorId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async get(
        guarantorId: CandidApi.guarantor.v1.GuarantorId,
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<CandidApi.guarantor.v1.Guarantor, CandidApi.guarantor.v1.get.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/guarantors/v1/${encodeURIComponent(
                    serializers.guarantor.v1.GuarantorId.jsonOrThrow(guarantorId)
                )}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.29.0",
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
                body: serializers.guarantor.v1.Guarantor.parseOrThrow(_response.body, {
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
     *
     * @param {CandidApi.guarantor.v1.GuarantorId} guarantorId
     * @param {CandidApi.guarantor.v1.GuarantorUpdate} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.guarantor.v1.update(CandidApi.guarantor.v1.GuarantorId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
     *         firstName: "string",
     *         lastName: "string",
     *         externalId: "string",
     *         dateOfBirth: "2023-01-15",
     *         address: {
     *             address1: "123 Main St",
     *             address2: "Apt 1",
     *             city: "New York",
     *             state: CandidApi.State.Ny,
     *             zipCode: "10001",
     *             zipPlusFourCode: "1234"
     *         },
     *         phoneNumbers: [{
     *                 number: "1234567890",
     *                 type: CandidApi.PhoneNumberType.Home
     *             }],
     *         phoneConsent: true,
     *         email: CandidApi.Email("johndoe@joincandidhealth.com"),
     *         emailConsent: true
     *     })
     */
    public async update(
        guarantorId: CandidApi.guarantor.v1.GuarantorId,
        request: CandidApi.guarantor.v1.GuarantorUpdate = {},
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<CandidApi.guarantor.v1.Guarantor, CandidApi.guarantor.v1.update.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/guarantors/v1/${encodeURIComponent(
                    serializers.guarantor.v1.GuarantorId.jsonOrThrow(guarantorId)
                )}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.29.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.guarantor.v1.GuarantorUpdate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.guarantor.v1.Guarantor.parseOrThrow(_response.body, {
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

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
