/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { InNetworkRenderingProvidersDetail } from "./InNetworkRenderingProvidersDetail";
import { IndeterminateNetworkStatus } from "./IndeterminateNetworkStatus";
import { OutOfNetworkStatus } from "./OutOfNetworkStatus";

export const ComputeAllInNetworkRenderingProvidersResult: core.serialization.Schema<
    serializers.expectedNetworkStatus.v2.ComputeAllInNetworkRenderingProvidersResult.Raw,
    CandidApi.expectedNetworkStatus.v2.ComputeAllInNetworkRenderingProvidersResult
> = core.serialization
    .union("type", {
        rendering_providers: InNetworkRenderingProvidersDetail,
        indeterminate: IndeterminateNetworkStatus,
        out_of_network: OutOfNetworkStatus,
    })
    .transform<CandidApi.expectedNetworkStatus.v2.ComputeAllInNetworkRenderingProvidersResult>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace ComputeAllInNetworkRenderingProvidersResult {
    type Raw =
        | ComputeAllInNetworkRenderingProvidersResult.RenderingProviders
        | ComputeAllInNetworkRenderingProvidersResult.Indeterminate
        | ComputeAllInNetworkRenderingProvidersResult.OutOfNetwork;

    interface RenderingProviders extends InNetworkRenderingProvidersDetail.Raw {
        type: "rendering_providers";
    }

    interface Indeterminate extends IndeterminateNetworkStatus.Raw {
        type: "indeterminate";
    }

    interface OutOfNetwork extends OutOfNetworkStatus.Raw {
        type: "out_of_network";
    }
}
