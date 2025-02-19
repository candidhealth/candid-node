/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { ServiceTypeCode } from "./ServiceTypeCode";
import { ServiceCoverageDetails } from "./ServiceCoverageDetails";
import { CoverageDetails } from "./CoverageDetails";

export const ServiceCoverage: core.serialization.ObjectSchema<
    serializers.preEncounter.coverages.v1.ServiceCoverage.Raw,
    CandidApi.preEncounter.coverages.v1.ServiceCoverage
> = core.serialization.object({
    serviceCode: core.serialization.property("service_code", ServiceTypeCode),
    inNetwork: core.serialization.property("in_network", ServiceCoverageDetails.optional()),
    inNetworkFlat: core.serialization.property("in_network_flat", core.serialization.list(CoverageDetails).optional()),
    outOfNetwork: core.serialization.property("out_of_network", ServiceCoverageDetails.optional()),
    outOfNetworkFlat: core.serialization.property(
        "out_of_network_flat",
        core.serialization.list(CoverageDetails).optional(),
    ),
});

export declare namespace ServiceCoverage {
    export interface Raw {
        service_code: ServiceTypeCode.Raw;
        in_network?: ServiceCoverageDetails.Raw | null;
        in_network_flat?: CoverageDetails.Raw[] | null;
        out_of_network?: ServiceCoverageDetails.Raw | null;
        out_of_network_flat?: CoverageDetails.Raw[] | null;
    }
}
