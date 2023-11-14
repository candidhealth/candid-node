/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../..";
import * as serializers from "../../../../../../serialization";
import urlJoin from "url-join";
import URLSearchParams from "@ungap/url-search-params";

export declare namespace V2 {
    interface Options {
        environment?: environments.CandidApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class V2 {
    constructor(protected readonly options: V2.Options) {}

    public async get(
        organizationServiceFacilityId: CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacilityId
    ): Promise<
        core.APIResponse<
            CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacility,
            CandidApi.organizationServiceFacilities.v2.get.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/organization-service-facilities/v2/${await serializers.organizationServiceFacilities.v2.OrganizationServiceFacilityId.jsonOrThrow(
                    organizationServiceFacilityId
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
                body: await serializers.organizationServiceFacilities.v2.OrganizationServiceFacility.parseOrThrow(
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

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.organizationServiceFacilities.v2.get.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                    return {
                        ok: false,
                        error: await serializers.organizationServiceFacilities.v2.get.Error.parseOrThrow(
                            _response.error.body as serializers.organizationServiceFacilities.v2.get.Error.Raw,
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
            error: CandidApi.organizationServiceFacilities.v2.get.Error._unknown(_response.error),
        };
    }

    public async getMulti(
        request: CandidApi.organizationServiceFacilities.v2.GetAllOrganizationServiceFacilitiesRequest = {}
    ): Promise<
        core.APIResponse<
            CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacilityPage,
            CandidApi.organizationServiceFacilities.v2.getMulti.Error
        >
    > {
        const { limit, name, pageToken } = request;
        const _queryParams = new URLSearchParams();
        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        if (name != null) {
            _queryParams.append("name", name);
        }

        if (pageToken != null) {
            _queryParams.append("page_token", pageToken);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                "/api/organization-service-facilities/v2"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.10.0",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.organizationServiceFacilities.v2.OrganizationServiceFacilityPage.parseOrThrow(
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
            error: CandidApi.organizationServiceFacilities.v2.getMulti.Error._unknown(_response.error),
        };
    }

    public async create(
        request: CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacilityCreate
    ): Promise<
        core.APIResponse<
            CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacility,
            CandidApi.organizationServiceFacilities.v2.create.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                "/api/organization-service-facilities/v2"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.10.0",
            },
            contentType: "application/json",
            body: await serializers.organizationServiceFacilities.v2.OrganizationServiceFacilityCreate.jsonOrThrow(
                request,
                { unrecognizedObjectKeys: "strip" }
            ),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.organizationServiceFacilities.v2.OrganizationServiceFacility.parseOrThrow(
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

        if (_response.error.reason === "status-code") {
            switch (
                (_response.error.body as serializers.organizationServiceFacilities.v2.create.Error.Raw)?.errorName
            ) {
                case "HttpRequestValidationError":
                    return {
                        ok: false,
                        error: await serializers.organizationServiceFacilities.v2.create.Error.parseOrThrow(
                            _response.error.body as serializers.organizationServiceFacilities.v2.create.Error.Raw,
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
            error: CandidApi.organizationServiceFacilities.v2.create.Error._unknown(_response.error),
        };
    }

    public async update(
        organizationServiceFacilityId: CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacilityId,
        request: CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacilityUpdate
    ): Promise<
        core.APIResponse<
            CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacility,
            CandidApi.organizationServiceFacilities.v2.update.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/organization-service-facilities/v2/${await serializers.organizationServiceFacilities.v2.OrganizationServiceFacilityId.jsonOrThrow(
                    organizationServiceFacilityId
                )}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.10.0",
            },
            contentType: "application/json",
            body: await serializers.organizationServiceFacilities.v2.OrganizationServiceFacilityUpdate.jsonOrThrow(
                request,
                { unrecognizedObjectKeys: "strip" }
            ),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.organizationServiceFacilities.v2.OrganizationServiceFacility.parseOrThrow(
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

        if (_response.error.reason === "status-code") {
            switch (
                (_response.error.body as serializers.organizationServiceFacilities.v2.update.Error.Raw)?.errorName
            ) {
                case "HttpRequestValidationError":
                case "EntityNotFoundError":
                    return {
                        ok: false,
                        error: await serializers.organizationServiceFacilities.v2.update.Error.parseOrThrow(
                            _response.error.body as serializers.organizationServiceFacilities.v2.update.Error.Raw,
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
            error: CandidApi.organizationServiceFacilities.v2.update.Error._unknown(_response.error),
        };
    }

    public async delete(
        organizationServiceFacilityId: CandidApi.organizationServiceFacilities.v2.OrganizationServiceFacilityId
    ): Promise<core.APIResponse<void, CandidApi.organizationServiceFacilities.v2.delete.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/organization-service-facilities/v2/${await serializers.organizationServiceFacilities.v2.OrganizationServiceFacilityId.jsonOrThrow(
                    organizationServiceFacilityId
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

        if (_response.error.reason === "status-code") {
            switch (
                (_response.error.body as serializers.organizationServiceFacilities.v2.delete.Error.Raw)?.errorName
            ) {
                case "EntityNotFoundError":
                    return {
                        ok: false,
                        error: await serializers.organizationServiceFacilities.v2.delete.Error.parseOrThrow(
                            _response.error.body as serializers.organizationServiceFacilities.v2.delete.Error.Raw,
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
            error: CandidApi.organizationServiceFacilities.v2.delete.Error._unknown(_response.error),
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