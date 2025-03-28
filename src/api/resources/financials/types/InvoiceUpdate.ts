/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../index";

export type InvoiceUpdate = CandidApi.InvoiceUpdate.Set | CandidApi.InvoiceUpdate.Remove;

export namespace InvoiceUpdate {
    export interface Set {
        type: "set";
        value: CandidApi.InvoiceId;
    }

    export interface Remove {
        type: "remove";
    }
}
