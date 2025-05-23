/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";
import { DateRangeOptionalEnd } from "./DateRangeOptionalEnd";

export const RemovableDateRangeOptionalEnd: core.serialization.Schema<
    serializers.RemovableDateRangeOptionalEnd.Raw,
    CandidApi.RemovableDateRangeOptionalEnd
> = core.serialization
    .union("type", {
        date_range: DateRangeOptionalEnd,
        remove: core.serialization.object({}),
    })
    .transform<CandidApi.RemovableDateRangeOptionalEnd>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace RemovableDateRangeOptionalEnd {
    export type Raw = RemovableDateRangeOptionalEnd.DateRange | RemovableDateRangeOptionalEnd.Remove;

    export interface DateRange extends DateRangeOptionalEnd.Raw {
        type: "date_range";
    }

    export interface Remove {
        type: "remove";
    }
}
