/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../index";

/**
 * @example
 *     {
 *         externalPatientId: "string",
 *         subscriberPayerId: "string",
 *         subscriberPayerName: "string",
 *         subscriberInsuranceType: "01",
 *         subscriberPlanName: "string",
 *         billingProviderNpi: "string",
 *         billingProviderTin: "string",
 *         renderingProviderNpi: "string",
 *         contractedState: "AA",
 *         dateOfService: CandidApi.Date_("string")
 *     }
 */
export interface ExpectedNetworkStatusRequest {
    externalPatientId?: string;
    subscriberPayerId: string;
    subscriberPayerName: string;
    subscriberInsuranceType?: CandidApi.InsuranceTypeCode;
    /** The descriptive name of the insurance plan selected by the subscriber, often indicating coverage specifics or tier. */
    subscriberPlanName?: string;
    /** The National Provider Identifier (NPI) of the healthcare provider responsible for billing. A unique 10-digit identification number. */
    billingProviderNpi: string;
    /** Follow the 9-digit format of the Taxpayer Identification Number (TIN). */
    billingProviderTin: string;
    /** The National Provider Identifier (NPI) of the healthcare provider who delivered the services. A unique 10-digit identification number. */
    renderingProviderNpi: string;
    /** The state in which the healthcare provider has a contractual agreement with the insurance payer. */
    contractedState: CandidApi.State;
    /**
     * Date formatted as YYYY-MM-DD; eg: 2019-08-25.
     *
     */
    dateOfService: CandidApi.Date_;
}
