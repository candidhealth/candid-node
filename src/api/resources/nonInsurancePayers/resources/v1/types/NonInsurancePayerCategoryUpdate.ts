/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export type NonInsurancePayerCategoryUpdate =
    | CandidApi.nonInsurancePayers.v1.NonInsurancePayerCategoryUpdate.Remove
    /**
     * Max 255 characters allowed */
    | CandidApi.nonInsurancePayers.v1.NonInsurancePayerCategoryUpdate.Set;

export declare namespace NonInsurancePayerCategoryUpdate {
    interface Remove {
        type: "remove";
    }

    interface Set {
        type: "set";
        value: string;
    }
}