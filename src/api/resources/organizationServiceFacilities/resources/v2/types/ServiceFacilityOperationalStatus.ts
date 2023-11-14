/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     CandidApi.organizationServiceFacilities.v2.ServiceFacilityOperationalStatus.Closed
 */
export type ServiceFacilityOperationalStatus =
    /**
     * The location is not operational and is closed. */
    | "C"
    /**
     * The location is currently undergoing cleaning or maintenance. */
    | "H"
    /**
     * The location is quarantined or isolated for special cases. */
    | "I"
    /**
     * The location has been identified as contaminated and is not currently usable. */
    | "K"
    /**
     * The location is currently in use or occupied. */
    | "O"
    /**
     * The location is operational but currently empty or not in use. */
    | "U";

export const ServiceFacilityOperationalStatus = {
    Closed: "C",
    Housekeeping: "H",
    Isolated: "I",
    Contaminated: "K",
    Occupied: "O",
    Unoccupied: "U",
} as const;