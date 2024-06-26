/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../index";

export type RemovableDateRangeOptionalEnd =
    | CandidApi.RemovableDateRangeOptionalEnd.DateRange
    | CandidApi.RemovableDateRangeOptionalEnd.Remove;

export declare namespace RemovableDateRangeOptionalEnd {
    interface DateRange extends CandidApi.DateRangeOptionalEnd {
        type: "date_range";
    }

    interface Remove {
        type: "remove";
    }
}
