/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export type ComputeAllInNetworkRenderingProvidersResult =
    | CandidApi.expectedNetworkStatus.v2.ComputeAllInNetworkRenderingProvidersResult.RenderingProviders
    | CandidApi.expectedNetworkStatus.v2.ComputeAllInNetworkRenderingProvidersResult.Indeterminate
    | CandidApi.expectedNetworkStatus.v2.ComputeAllInNetworkRenderingProvidersResult.OutOfNetwork;

export declare namespace ComputeAllInNetworkRenderingProvidersResult {
    interface RenderingProviders extends CandidApi.expectedNetworkStatus.v2.InNetworkRenderingProvidersDetail {
        type: "rendering_providers";
    }

    interface Indeterminate extends CandidApi.expectedNetworkStatus.v2.IndeterminateNetworkStatus {
        type: "indeterminate";
    }

    interface OutOfNetwork extends CandidApi.expectedNetworkStatus.v2.OutOfNetworkStatus {
        type: "out_of_network";
    }
}
