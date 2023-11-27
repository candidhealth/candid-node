/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Required when mandated by government law or regulation to obtain authorization for specific service(s) but, for the
 * reasons listed in one of the enum values, the service was performed without obtaining the authorization.
 *
 */
export type ServiceAuthorizationExceptionCode =
    /**
     * Immediate/Urgent Care */
    | "1"
    /**
     * Services Rendered in a Retroactive Period */
    | "2"
    /**
     * Emergency Care */
    | "3"
    /**
     * Client has Temporary Medicaid */
    | "4"
    /**
     * Request from County for Second Opinion to Determine if Recipient Can Work */
    | "5"
    /**
     * Request for Override Pending */
    | "6"
    /**
     * Special Handling */
    | "7";

export const ServiceAuthorizationExceptionCode = {
    C1: "1",
    C2: "2",
    C3: "3",
    C4: "4",
    C5: "5",
    C6: "6",
    C7: "7",
} as const;
