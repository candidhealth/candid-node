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
     * Adds a patient. VersionConflictError is returned when the patient's external ID is already in use.
     *
     * @param {CandidApi.preEncounter.patients.v1.MutablePatient} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.patients.v1.create({
     *         name: {},
     *         otherNames: [{}],
     *         gender: CandidApi.preEncounter.Gender.Man,
     *         birthDate: "2023-01-15",
     *         socialSecurityNumber: "string",
     *         biologicalSex: CandidApi.preEncounter.Sex.Female,
     *         sexualOrientation: CandidApi.preEncounter.SexualOrientation.Heterosexual,
     *         race: CandidApi.preEncounter.Race.AmericanIndianOrAlaskaNative,
     *         ethnicity: CandidApi.preEncounter.Ethnicity.HispanicOrLatino,
     *         disabilityStatus: CandidApi.preEncounter.DisabilityStatus.Disabled,
     *         maritalStatus: CandidApi.preEncounter.patients.v1.MaritalStatus.Annulled,
     *         deceased: new Date("2024-01-15T09:30:00.000Z"),
     *         multipleBirth: 1,
     *         primaryAddress: {},
     *         otherAddresses: [{}],
     *         primaryTelecom: {},
     *         otherTelecoms: [{}],
     *         email: "string",
     *         electronicCommunicationOptIn: true,
     *         photo: "string",
     *         language: "string",
     *         externalProvenance: {
     *             externalId: "string",
     *             systemName: "string"
     *         },
     *         contacts: [{
     *                 relationship: [CandidApi.preEncounter.Relationship.Self],
     *                 name: {},
     *                 telecoms: [{}],
     *                 addresses: [{}],
     *                 period: {},
     *                 hipaaAuthorization: true
     *             }],
     *         generalPractitioners: [{}],
     *         filingOrder: {
     *             coverages: [CandidApi.preEncounter.coverages.v1.CoverageId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")]
     *         }
     *     })
     */
    public async create(
        request: CandidApi.preEncounter.patients.v1.MutablePatient,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<CandidApi.preEncounter.patients.v1.Patient, CandidApi.preEncounter.patients.v1.create.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                "/patients/v1"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.31.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.preEncounter.patients.v1.MutablePatient.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.preEncounter.patients.v1.Patient.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.preEncounter.patients.v1.create.Error.Raw)?.errorName) {
                case "VersionConflictError":
                    return {
                        ok: false,
                        error: serializers.preEncounter.patients.v1.create.Error.parseOrThrow(
                            _response.error.body as serializers.preEncounter.patients.v1.create.Error.Raw,
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
            error: CandidApi.preEncounter.patients.v1.create.Error._unknown(_response.error),
        };
    }

    /**
     * Adds a patient without checking for duplicates.
     *
     * @param {CandidApi.preEncounter.patients.v1.MutablePatient} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.patients.v1.createNoDuplicateCheck({
     *         name: {},
     *         otherNames: [{}],
     *         gender: CandidApi.preEncounter.Gender.Man,
     *         birthDate: "2023-01-15",
     *         socialSecurityNumber: "string",
     *         biologicalSex: CandidApi.preEncounter.Sex.Female,
     *         sexualOrientation: CandidApi.preEncounter.SexualOrientation.Heterosexual,
     *         race: CandidApi.preEncounter.Race.AmericanIndianOrAlaskaNative,
     *         ethnicity: CandidApi.preEncounter.Ethnicity.HispanicOrLatino,
     *         disabilityStatus: CandidApi.preEncounter.DisabilityStatus.Disabled,
     *         maritalStatus: CandidApi.preEncounter.patients.v1.MaritalStatus.Annulled,
     *         deceased: new Date("2024-01-15T09:30:00.000Z"),
     *         multipleBirth: 1,
     *         primaryAddress: {},
     *         otherAddresses: [{}],
     *         primaryTelecom: {},
     *         otherTelecoms: [{}],
     *         email: "string",
     *         electronicCommunicationOptIn: true,
     *         photo: "string",
     *         language: "string",
     *         externalProvenance: {
     *             externalId: "string",
     *             systemName: "string"
     *         },
     *         contacts: [{
     *                 relationship: [CandidApi.preEncounter.Relationship.Self],
     *                 name: {},
     *                 telecoms: [{}],
     *                 addresses: [{}],
     *                 period: {},
     *                 hipaaAuthorization: true
     *             }],
     *         generalPractitioners: [{}],
     *         filingOrder: {
     *             coverages: [CandidApi.preEncounter.coverages.v1.CoverageId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")]
     *         }
     *     })
     */
    public async createNoDuplicateCheck(
        request: CandidApi.preEncounter.patients.v1.MutablePatient,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.patients.v1.Patient,
            CandidApi.preEncounter.patients.v1.createNoDuplicateCheck.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                "/patients/v1"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.31.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.preEncounter.patients.v1.MutablePatient.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.preEncounter.patients.v1.Patient.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch (
                (_response.error.body as serializers.preEncounter.patients.v1.createNoDuplicateCheck.Error.Raw)
                    ?.errorName
            ) {
                case "VersionConflictError":
                    return {
                        ok: false,
                        error: serializers.preEncounter.patients.v1.createNoDuplicateCheck.Error.parseOrThrow(
                            _response.error
                                .body as serializers.preEncounter.patients.v1.createNoDuplicateCheck.Error.Raw,
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
            error: CandidApi.preEncounter.patients.v1.createNoDuplicateCheck.Error._unknown(_response.error),
        };
    }

    /**
     * Searches for patients that match the query parameters.
     *
     * @param {CandidApi.preEncounter.patients.v1.PatientsSearchRequestPaginated} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.patients.v1.getMulti({
     *         limit: 1,
     *         mrn: "string",
     *         pageToken: CandidApi.preEncounter.PageToken("string"),
     *         sortField: CandidApi.preEncounter.patients.v1.PatientSortField("string"),
     *         sortDirection: CandidApi.preEncounter.SortDirection.Asc
     *     })
     */
    public async getMulti(
        request: CandidApi.preEncounter.patients.v1.PatientsSearchRequestPaginated = {},
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.patients.v1.PatientPage,
            CandidApi.preEncounter.patients.v1.getMulti.Error
        >
    > {
        const { limit, mrn, pageToken, sortField, sortDirection } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (mrn != null) {
            _queryParams["mrn"] = mrn;
        }

        if (pageToken != null) {
            _queryParams["page_token"] = pageToken;
        }

        if (sortField != null) {
            _queryParams["sort_field"] = sortField;
        }

        if (sortDirection != null) {
            _queryParams["sort_direction"] = sortDirection;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                "/patients/v1/get_multi"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.31.0",
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
                body: serializers.preEncounter.patients.v1.PatientPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.preEncounter.patients.v1.getMulti.Error._unknown(_response.error),
        };
    }

    /**
     * Gets a patient.
     *
     * @param {CandidApi.preEncounter.patients.v1.PatientId} id
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.patients.v1.get(CandidApi.preEncounter.patients.v1.PatientId("string"))
     */
    public async get(
        id: CandidApi.preEncounter.patients.v1.PatientId,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<CandidApi.preEncounter.patients.v1.Patient, CandidApi.preEncounter.patients.v1.get.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                `/patients/v1/${encodeURIComponent(serializers.preEncounter.patients.v1.PatientId.jsonOrThrow(id))}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.31.0",
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
                body: serializers.preEncounter.patients.v1.Patient.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.preEncounter.patients.v1.get.Error.Raw)?.errorName) {
                case "NotFoundError":
                    return {
                        ok: false,
                        error: serializers.preEncounter.patients.v1.get.Error.parseOrThrow(
                            _response.error.body as serializers.preEncounter.patients.v1.get.Error.Raw,
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
            error: CandidApi.preEncounter.patients.v1.get.Error._unknown(_response.error),
        };
    }

    /**
     * Gets a patient along with it's full history. The return list is ordered by version ascending.
     *
     * @param {CandidApi.preEncounter.patients.v1.PatientId} id
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.patients.v1.getHistory(CandidApi.preEncounter.patients.v1.PatientId("string"))
     */
    public async getHistory(
        id: CandidApi.preEncounter.patients.v1.PatientId,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<
            CandidApi.preEncounter.patients.v1.Patient[],
            CandidApi.preEncounter.patients.v1.getHistory.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                `/patients/v1/${encodeURIComponent(
                    serializers.preEncounter.patients.v1.PatientId.jsonOrThrow(id)
                )}/history`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.31.0",
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
                body: serializers.preEncounter.patients.v1.getHistory.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.preEncounter.patients.v1.getHistory.Error.Raw)?.errorName) {
                case "NotFoundError":
                    return {
                        ok: false,
                        error: serializers.preEncounter.patients.v1.getHistory.Error.parseOrThrow(
                            _response.error.body as serializers.preEncounter.patients.v1.getHistory.Error.Raw,
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
            error: CandidApi.preEncounter.patients.v1.getHistory.Error._unknown(_response.error),
        };
    }

    /**
     * Updates a patient. The path must contain the most recent version to prevent race conditions. Updating historic versions is not supported.
     *
     * @param {CandidApi.preEncounter.patients.v1.PatientId} id
     * @param {string} version
     * @param {CandidApi.preEncounter.patients.v1.MutablePatient} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.patients.v1.update(CandidApi.preEncounter.patients.v1.PatientId("string"), "string", {
     *         name: {},
     *         otherNames: [{}],
     *         gender: CandidApi.preEncounter.Gender.Man,
     *         birthDate: "2023-01-15",
     *         socialSecurityNumber: "string",
     *         biologicalSex: CandidApi.preEncounter.Sex.Female,
     *         sexualOrientation: CandidApi.preEncounter.SexualOrientation.Heterosexual,
     *         race: CandidApi.preEncounter.Race.AmericanIndianOrAlaskaNative,
     *         ethnicity: CandidApi.preEncounter.Ethnicity.HispanicOrLatino,
     *         disabilityStatus: CandidApi.preEncounter.DisabilityStatus.Disabled,
     *         maritalStatus: CandidApi.preEncounter.patients.v1.MaritalStatus.Annulled,
     *         deceased: new Date("2024-01-15T09:30:00.000Z"),
     *         multipleBirth: 1,
     *         primaryAddress: {},
     *         otherAddresses: [{}],
     *         primaryTelecom: {},
     *         otherTelecoms: [{}],
     *         email: "string",
     *         electronicCommunicationOptIn: true,
     *         photo: "string",
     *         language: "string",
     *         externalProvenance: {
     *             externalId: "string",
     *             systemName: "string"
     *         },
     *         contacts: [{
     *                 relationship: [CandidApi.preEncounter.Relationship.Self],
     *                 name: {},
     *                 telecoms: [{}],
     *                 addresses: [{}],
     *                 period: {},
     *                 hipaaAuthorization: true
     *             }],
     *         generalPractitioners: [{}],
     *         filingOrder: {
     *             coverages: [CandidApi.preEncounter.coverages.v1.CoverageId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")]
     *         }
     *     })
     */
    public async update(
        id: CandidApi.preEncounter.patients.v1.PatientId,
        version: string,
        request: CandidApi.preEncounter.patients.v1.MutablePatient,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<CandidApi.preEncounter.patients.v1.Patient, CandidApi.preEncounter.patients.v1.update.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                `/patients/v1/${encodeURIComponent(
                    serializers.preEncounter.patients.v1.PatientId.jsonOrThrow(id)
                )}/${encodeURIComponent(version)}`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.31.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.preEncounter.patients.v1.MutablePatient.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.preEncounter.patients.v1.Patient.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.preEncounter.patients.v1.update.Error.Raw)?.errorName) {
                case "NotFoundError":
                case "VersionConflictError":
                    return {
                        ok: false,
                        error: serializers.preEncounter.patients.v1.update.Error.parseOrThrow(
                            _response.error.body as serializers.preEncounter.patients.v1.update.Error.Raw,
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
            error: CandidApi.preEncounter.patients.v1.update.Error._unknown(_response.error),
        };
    }

    /**
     * Sets a patient as deactivated. The path must contain the most recent version to prevent race conditions. Deactivating historic versions is not supported. Subsequent updates via PUT to the patient will "reactivate" the patient and set the deactivated flag to false.
     *
     * @param {CandidApi.preEncounter.patients.v1.PatientId} id
     * @param {string} version
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.patients.v1.deactivate(CandidApi.preEncounter.patients.v1.PatientId("string"), "string")
     */
    public async deactivate(
        id: CandidApi.preEncounter.patients.v1.PatientId,
        version: string,
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<void, CandidApi.preEncounter.patients.v1.deactivate.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                `/patients/v1/${encodeURIComponent(
                    serializers.preEncounter.patients.v1.PatientId.jsonOrThrow(id)
                )}/${encodeURIComponent(version)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.31.0",
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
            switch ((_response.error.body as serializers.preEncounter.patients.v1.deactivate.Error.Raw)?.errorName) {
                case "NotFoundError":
                case "VersionConflictError":
                    return {
                        ok: false,
                        error: serializers.preEncounter.patients.v1.deactivate.Error.parseOrThrow(
                            _response.error.body as serializers.preEncounter.patients.v1.deactivate.Error.Raw,
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
            error: CandidApi.preEncounter.patients.v1.deactivate.Error._unknown(_response.error),
        };
    }

    /**
     * Returns a list of Patients based on the search criteria.
     *
     * @param {CandidApi.preEncounter.patients.v1.PatientGetMultiRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.patients.v1.search({
     *         mrn: "string",
     *         similarNameOrdering: "string"
     *     })
     */
    public async search(
        request: CandidApi.preEncounter.patients.v1.PatientGetMultiRequest = {},
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<CandidApi.preEncounter.patients.v1.Patient[], CandidApi.preEncounter.patients.v1.search.Error>
    > {
        const { mrn, similarNameOrdering } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (mrn != null) {
            _queryParams["mrn"] = mrn;
        }

        if (similarNameOrdering != null) {
            _queryParams["similar_name_ordering"] = similarNameOrdering;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                "/patients/v1"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.31.0",
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
                body: serializers.preEncounter.patients.v1.search.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.preEncounter.patients.v1.search.Error._unknown(_response.error),
        };
    }

    /**
     * Scans up to 100 patient updates. The since query parameter is inclusive, and the result list is ordered by updatedAt ascending.
     *
     * @param {CandidApi.preEncounter.patients.v1.PatientScanRequest} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.preEncounter.patients.v1.scan({
     *         since: new Date("2024-01-15T09:30:00.000Z")
     *     })
     */
    public async scan(
        request: CandidApi.preEncounter.patients.v1.PatientScanRequest,
        requestOptions?: V1.RequestOptions
    ): Promise<
        core.APIResponse<CandidApi.preEncounter.patients.v1.Patient[], CandidApi.preEncounter.patients.v1.scan.Error>
    > {
        const { since } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["since"] = since.toISOString();
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .preEncounter,
                "/patients/v1/updates/scan"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.31.0",
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
                body: serializers.preEncounter.patients.v1.scan.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.preEncounter.patients.v1.scan.Error._unknown(_response.error),
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
