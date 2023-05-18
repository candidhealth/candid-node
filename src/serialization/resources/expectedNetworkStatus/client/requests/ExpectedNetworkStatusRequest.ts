/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { CandidApi } from "";
import * as core from "../../../../../core";

export const ExpectedNetworkStatusRequest: core.serialization.Schema<
    serializers.ExpectedNetworkStatusRequest.Raw,
    CandidApi.ExpectedNetworkStatusRequest
> = core.serialization.object({
    externalPatientId: core.serialization.property("external_patient_id", core.serialization.string().optional()),
    subscriberPayerId: core.serialization.property("subscriber_payer_id", core.serialization.string()),
    subscriberPayerName: core.serialization.property("subscriber_payer_name", core.serialization.string()),
    subscriberInsuranceType: core.serialization.property(
        "subscriber_insurance_type",
        core.serialization.lazy(async () => (await import("../../../..")).InsuranceTypeCode).optional()
    ),
    subscriberPlanName: core.serialization.property("subscriber_plan_name", core.serialization.string().optional()),
    billingProviderNpi: core.serialization.property("billing_provider_npi", core.serialization.string()),
    billingProviderTin: core.serialization.property("billing_provider_tin", core.serialization.string()),
    renderingProviderNpi: core.serialization.property("rendering_provider_npi", core.serialization.string()),
    contractedState: core.serialization.property(
        "contracted_state",
        core.serialization.lazy(async () => (await import("../../../..")).State)
    ),
    dateOfService: core.serialization.property(
        "date_of_service",
        core.serialization.lazy(async () => (await import("../../../..")).Date)
    ),
});

export declare namespace ExpectedNetworkStatusRequest {
    interface Raw {
        external_patient_id?: string | null;
        subscriber_payer_id: string;
        subscriber_payer_name: string;
        subscriber_insurance_type?: serializers.InsuranceTypeCode.Raw | null;
        subscriber_plan_name?: string | null;
        billing_provider_npi: string;
        billing_provider_tin: string;
        rendering_provider_npi: string;
        contracted_state: serializers.State.Raw;
        date_of_service: serializers.Date.Raw;
    }
}
