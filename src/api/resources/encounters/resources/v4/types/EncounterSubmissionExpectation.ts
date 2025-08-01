/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Used to describe the currently expected target form for this encounter.  This effects what
 * validations and queues the form is processed under.  If you're not sure, you can set this value
 * to UNEXPECTED, in which case the form will be treated loosely during processing.  Before
 * submission, this value will be required by some rules or user intervention.  It can be changed
 * at any time, although doing so may incur other rules.
 */
export type EncounterSubmissionExpectation =
    /**
     * Treat this encounter as a potential professional claim submission and validate it as such. */
    | "TARGET_PROFESSIONAL"
    /**
     * Treat this encounter as a potential institutional claim submission and validate it as such. */
    | "TARGET_INSTITUTIONAL";
export const EncounterSubmissionExpectation = {
    TargetProfessional: "TARGET_PROFESSIONAL",
    TargetInstitutional: "TARGET_INSTITUTIONAL",
} as const;
