/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type Explanation =
    | "Payer Routing and/or Billing Provider Routing Failed"
    | "No Effective Contract with Payer"
    | "No Effective Contract with Billing Provider"
    | "No Effective Contract with Covered Geography"
    | "No Effective Contract with Line of Business"
    | "No Effective Contract with Insurance Type"
    | "No Effective Contract with Rendering Provider"
    | "Rendering Provider Not Credentialed";

export const Explanation = {
    RoutingFailed: "Payer Routing and/or Billing Provider Routing Failed",
    PayerMatchFailed: "No Effective Contract with Payer",
    BillingProviderMatchFailed: "No Effective Contract with Billing Provider",
    CoveredGeographyMatchFailed: "No Effective Contract with Covered Geography",
    LineOfBusinessMatchFailed: "No Effective Contract with Line of Business",
    InsuranceTypeMatchFailed: "No Effective Contract with Insurance Type",
    RenderingProviderMatchFailed: "No Effective Contract with Rendering Provider",
    RenderingProviderCredentialingCheckFailed: "Rendering Provider Not Credentialed",
} as const;