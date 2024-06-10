/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export type AuthorizedSignatoryUpdate =
    | CandidApi.contracts.v2.AuthorizedSignatoryUpdate.Set
    | CandidApi.contracts.v2.AuthorizedSignatoryUpdate.Remove;

export declare namespace AuthorizedSignatoryUpdate {
    interface Set extends CandidApi.contracts.v2.AuthorizedSignatory {
        type: "set";
    }

    interface Remove {
        type: "remove";
    }
}
