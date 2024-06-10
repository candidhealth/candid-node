/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

export interface GuarantorCreate extends CandidApi.guarantor.v1.GuarantorBase {
    phoneNumbers?: CandidApi.PhoneNumber[];
    /** Defaults to false */
    phoneConsent?: boolean;
    email?: CandidApi.Email;
    /** Defaults to false */
    emailConsent?: boolean;
}
