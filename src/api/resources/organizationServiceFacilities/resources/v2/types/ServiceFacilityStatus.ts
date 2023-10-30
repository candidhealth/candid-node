/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     CandidApi.organizationServiceFacilities.v2.ServiceFacilityStatus.Active
 */
export type ServiceFacilityStatus =
    /**
     * The location is operational. */
    | "active"
    /**
     * The location is no longer used. */
    | "inactive"
    /**
     * TThe location is temporarily closed. */
    | "suspended";

export const ServiceFacilityStatus = {
    Active: "active",
    Inactive: "inactive",
    Suspended: "suspended",
} as const;
