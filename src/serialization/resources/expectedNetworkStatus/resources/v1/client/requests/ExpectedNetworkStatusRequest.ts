/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as CandidApi from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { InsuranceTypeCode } from "../../../../../commons/types/InsuranceTypeCode";
import { State } from "../../../../../commons/types/State";
import { Date_ } from "../../../../../commons/types/Date_";

export const ExpectedNetworkStatusRequest: core.serialization.Schema<
    serializers.expectedNetworkStatus.v1.ExpectedNetworkStatusRequest.Raw,
    CandidApi.expectedNetworkStatus.v1.ExpectedNetworkStatusRequest
> = core.serialization.object({
    externalPatientId: core.serialization.property("external_patient_id", core.serialization.string().optional()),
    subscriberPayerId: core.serialization.property("subscriber_payer_id", core.serialization.string()),
    subscriberPayerName: core.serialization.property("subscriber_payer_name", core.serialization.string()),
    subscriberInsuranceType: core.serialization.property("subscriber_insurance_type", InsuranceTypeCode.optional()),
    subscriberPlanName: core.serialization.property("subscriber_plan_name", core.serialization.string().optional()),
    billingProviderNpi: core.serialization.property("billing_provider_npi", core.serialization.string()),
    billingProviderTin: core.serialization.property("billing_provider_tin", core.serialization.string()),
    renderingProviderNpi: core.serialization.property("rendering_provider_npi", core.serialization.string()),
    contractedState: core.serialization.property("contracted_state", State),
    dateOfService: core.serialization.property("date_of_service", Date_),
});

export declare namespace ExpectedNetworkStatusRequest {
    export interface Raw {
        external_patient_id?: string | null;
        subscriber_payer_id: string;
        subscriber_payer_name: string;
        subscriber_insurance_type?: InsuranceTypeCode.Raw | null;
        subscriber_plan_name?: string | null;
        billing_provider_npi: string;
        billing_provider_tin: string;
        rendering_provider_npi: string;
        contracted_state: State.Raw;
        date_of_service: Date_.Raw;
    }
}
