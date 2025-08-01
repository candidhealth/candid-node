/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type TypeOfAdmissionOrVisitCode =
    /**
     * EMERGENCY - As a result of severe, life threatening or potentially disabling conditions, the patient requires immediate medical intervention. */
    | "1"
    /**
     * URGENT - The patient requires immediate attention for the care and treatment of a physical or mental disorder. */
    | "2"
    /**
     * ELECTIVE - The patient's condition permits adequate time to schedule the services. */
    | "3"
    /**
     * NEWBORN - Use of this code necessitates the use of special Point of Origin Codes (See Form Locator 15 page 5 of 9). */
    | "4"
    /**
     * TRAUMA - Visit to a trauma center/hospital as licensed or designated by the state or local government authority authorized to do so, or as verified by the American College of Surgeons and involving a trauma activation. (Use Revenue Code 068x capture trauma activation charges involving pre-hospital notification.) */
    | "5"
    /**
     * INFORMATION NOT AVAILABLE - Information not available. */
    | "9";
export const TypeOfAdmissionOrVisitCode = {
    C1: "1",
    C2: "2",
    C3: "3",
    C4: "4",
    C5: "5",
    C9: "9",
} as const;
