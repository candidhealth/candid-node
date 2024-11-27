/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";

export declare namespace V2 {
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

export class V2 {
    constructor(protected readonly _options: V2.Options = {}) {}

    /**
     * This API is a wrapper around Change Healthcare's eligibility API. Below are some helpful documentation links:
     *
     * - [Change Healthcare - Guides: Contents of the Eligibility Request Body](https://developers.changehealthcare.com/eligibilityandclaims/docs/contents-of-the-eligibility-request-body)
     * - [Change Healthcare - Guides: Use "Bare Minimum" Eligibility Requests](https://developers.changehealthcare.com/eligibilityandclaims/docs/use-bare-minimum-eligibility-requests)
     * - [Change Healthcare - Guides: Contents of the Eligibility Response](https://developers.changehealthcare.com/eligibilityandclaims/docs/contents-of-the-eligibility-response)
     * - [Change Healthcare - Guides: Eligibility JSON-to-EDI API Contents](https://developers.changehealthcare.com/eligibilityandclaims/docs/eligibility-json-to-edi-api-contents)
     * - [Change Healthcare - Guides: Eligibility Error Messages](https://developers.changehealthcare.com/eligibilityandclaims/docs/eligibility-error-messages)
     * - [Change Healthcare - Guides: FAQ](https://developers.changehealthcare.com/eligibilityandclaims/docs/frequently-asked-questions)
     * - [Change Healthcare - Guides: Eligibility FAQs](https://developers.changehealthcare.com/eligibilityandclaims/docs/eligibility-api-requests)
     * - [Change Healthcare - Guides: Sandbox API Values and Test Responses](https://developers.changehealthcare.com/eligibilityandclaims/docs/eligibility-sandbox-api-values-and-test-responses)
     * - [Change Healthcare - Guides: Sandbox Predefined Fields and Values](https://developers.changehealthcare.com/eligibilityandclaims/docs/sandbox-predefined-fields-and-values)
     * - [Change Healthcare - Guides: Using Test Payers in the Sandbox](https://developers.changehealthcare.com/eligibilityandclaims/docs/use-the-test-payers-in-the-sandbox-api)
     *
     * A schema of the response object can be found here: [Change Healthcare Docs](https://developers.changehealthcare.com/eligibilityandclaims/reference/medicaleligibility)
     *
     * @param {unknown} request
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.eligibility.v2.submitEligibilityCheck({
     *         "key": "value"
     *     })
     */
    public async submitEligibilityCheck(
        request?: unknown,
        requestOptions?: V2.RequestOptions
    ): Promise<core.APIResponse<unknown, CandidApi.eligibility.v2.submitEligibilityCheck.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/eligibility/v2"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.35.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: _response.body,
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.eligibility.v2.submitEligibilityCheck.Error.Raw)?.errorName) {
                case "HttpServiceUnavailableError":
                    return {
                        ok: false,
                        error: serializers.eligibility.v2.submitEligibilityCheck.Error.parseOrThrow(
                            _response.error.body as serializers.eligibility.v2.submitEligibilityCheck.Error.Raw,
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
            error: CandidApi.eligibility.v2.submitEligibilityCheck.Error._unknown(_response.error),
        };
    }

    /**
     * **Availity has transitioned their GET endpoint to a POST endpoint. Candid has updated their pass-through integration to enable backwards compatibility for the GET endpoint so that customers do not have to immediately update their integrations.**
     *
     * **Candid recommends integrations with the [POST endpoint](https://docs.joincandidhealth.com/api-reference/eligibility/v-2/submit-eligibility-check-availity-post) to ensure the best possible integration experience. Given the transition, Availity’s documentation will be out of sync with this endpoint.**
     *
     * If you'd like access to this endpoint, please reach out to support@joincandidhealth.com with the subject line "Action: Activate Availity Eligibility API Endpoint
     *
     * This API is a wrapper around Availity's coverages API. Below are some helpful documentation links:
     *
     * - [Availity - Coverages 1.0.0 API](https://developer.availity.com/partner/documentation#c_coverages_references)
     * - [Candid Availity Eligibility Integration Guide](https://support.joincandidhealth.com/hc/en-us/articles/24218441631892--Availity-Eligibility-Integration-Guide)
     *
     * A schema of the response object can be found here: [Availity Docs](https://developer.availity.com/partner/product/191210/api/190898#/Coverages_100/operation/%2Fcoverages%2F{id}/get)
     *
     * - Note Availity requires a free developer account to access this documentation.
     *
     * Check connection status of Availity API and partners here:
     *
     * - [Availity Trading Partner Connection Status](https://www.availity.com/status/)
     *
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.eligibility.v2.submitEligibilityCheckAvaility()
     */
    public async submitEligibilityCheckAvaility(
        requestOptions?: V2.RequestOptions
    ): Promise<core.APIResponse<unknown, CandidApi.eligibility.v2.submitEligibilityCheckAvaility.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/eligibility/v2/availity"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.35.3",
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
                body: _response.body,
            };
        }

        if (_response.error.reason === "status-code") {
            switch (
                (_response.error.body as serializers.eligibility.v2.submitEligibilityCheckAvaility.Error.Raw)?.errorName
            ) {
                case "HttpRequestValidationError":
                    return {
                        ok: false,
                        error: serializers.eligibility.v2.submitEligibilityCheckAvaility.Error.parseOrThrow(
                            _response.error.body as serializers.eligibility.v2.submitEligibilityCheckAvaility.Error.Raw,
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
            error: CandidApi.eligibility.v2.submitEligibilityCheckAvaility.Error._unknown(_response.error),
        };
    }

    /**
     * If you'd like access to this endpoint, please reach out to support@joincandidhealth.com with the subject line "Action: Activate Availity Eligibility API Endpoint
     *
     * This API is a wrapper around Availity's coverages API. Below are some helpful documentation links:
     *
     * - [Availity - Coverages 1.0.0 API](https://developer.availity.com/partner/documentation#c_coverages_references)
     * - [Candid Availity Eligibility Integration Guide](https://support.joincandidhealth.com/hc/en-us/articles/24218441631892--Availity-Eligibility-Integration-Guide)
     *
     * A schema of the response object can be found here: [Availity Docs](https://developer.availity.com/partner/product/191210/api/190898#/Coverages_100/operation/%2Fcoverages%2F{id}/get)
     *
     * - Note Availity requires a free developer account to access this documentation.
     *
     * Check connection status of Availity API and partners here:
     *
     * - [Availity Trading Partner Connection Status](https://www.availity.com/status/)
     *
     * @param {unknown} request
     * @param {V2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.eligibility.v2.submitEligibilityCheckAvailityPost({
     *         "key": "value"
     *     })
     */
    public async submitEligibilityCheckAvailityPost(
        request?: unknown,
        requestOptions?: V2.RequestOptions
    ): Promise<core.APIResponse<unknown, CandidApi.eligibility.v2.submitEligibilityCheckAvailityPost.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/eligibility/v2/availity"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.35.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: _response.body,
            };
        }

        if (_response.error.reason === "status-code") {
            switch (
                (_response.error.body as serializers.eligibility.v2.submitEligibilityCheckAvailityPost.Error.Raw)
                    ?.errorName
            ) {
                case "HttpRequestValidationError":
                    return {
                        ok: false,
                        error: serializers.eligibility.v2.submitEligibilityCheckAvailityPost.Error.parseOrThrow(
                            _response.error
                                .body as serializers.eligibility.v2.submitEligibilityCheckAvailityPost.Error.Raw,
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
            error: CandidApi.eligibility.v2.submitEligibilityCheckAvailityPost.Error._unknown(_response.error),
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
