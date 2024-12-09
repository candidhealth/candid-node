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
     * @param {CandidApi.medicationDispense.v1.MedicationDispenseCreate} request
     * @param {V1.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.medicationDispense.v1.create({
     *         medicationDispenseExternalId: "string",
     *         patientExternalId: "string",
     *         procedureCode: "string",
     *         quantity: CandidApi.Decimal("string"),
     *         units: CandidApi.ServiceLineUnits.Mj,
     *         dateOfService: "2023-01-15",
     *         drugIdentification: {
     *             serviceIdQualifier: CandidApi.serviceLines.v2.ServiceIdQualifier.EanUcc13,
     *             nationalDrugCode: "string",
     *             nationalDrugUnitCount: "string",
     *             measurementUnitCode: CandidApi.serviceLines.v2.MeasurementUnitCode.Milliliters,
     *             linkSequenceNumber: "string",
     *             pharmacyPrescriptionNumber: "string",
     *             conversionFormula: "string",
     *             drugDescription: "string"
     *         },
     *         description: "string",
     *         modifiers: [CandidApi.ProcedureModifier.TwentyTwo]
     *     })
     */
    public async create(
        request: CandidApi.medicationDispense.v1.MedicationDispenseCreate,
        requestOptions?: V1.RequestOptions
    ): Promise<core.APIResponse<CandidApi.encounters.v4.Encounter, CandidApi.medicationDispense.v1.create.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/medication-dispense/v1"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.36.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.medicationDispense.v1.MedicationDispenseCreate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.encounters.v4.Encounter.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.medicationDispense.v1.create.Error.Raw)?.errorName) {
                case "HttpRequestValidationError":
                case "EncounterExternalIdUniquenessError":
                case "EncounterPatientControlNumberUniquenessError":
                case "EntityNotFoundError":
                case "SchemaInstanceValidationHttpFailure":
                    return {
                        ok: false,
                        error: serializers.medicationDispense.v1.create.Error.parseOrThrow(
                            _response.error.body as serializers.medicationDispense.v1.create.Error.Raw,
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
            error: CandidApi.medicationDispense.v1.create.Error._unknown(_response.error),
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
