/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const Explanation: core.serialization.Schema<
    serializers.expectedNetworkStatus.v2.Explanation.Raw,
    CandidApi.expectedNetworkStatus.v2.Explanation
> = core.serialization.enum_([
    "Payer Routing and/or Billing Provider Routing Failed",
    "No Effective Contract with Payer",
    "No Effective Contract with Billing Provider",
    "No Effective Contract with Covered Geography",
    "No Effective Contract with Line of Business",
    "No Effective Contract with Insurance Type",
    "No Effective Contract with Rendering Provider",
    "Rendering Provider Not Credentialed",
]);

export declare namespace Explanation {
    type Raw =
        | "Payer Routing and/or Billing Provider Routing Failed"
        | "No Effective Contract with Payer"
        | "No Effective Contract with Billing Provider"
        | "No Effective Contract with Covered Geography"
        | "No Effective Contract with Line of Business"
        | "No Effective Contract with Insurance Type"
        | "No Effective Contract with Rendering Provider"
        | "Rendering Provider Not Credentialed";
}
