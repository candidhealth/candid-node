/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type TypeOfFacilityCode =
    /**
     * Hospital */
    | "1"
    /**
     * Skilled Nursing Facility */
    | "2"
    /**
     * Home Health */
    | "3"
    /**
     * Religious Nonmedical (Hospital) */
    | "4"
    /**
     * Intermediate Care */
    | "6"
    /**
     * Clinic or Hospital based End Stage Renal Disease (ESRD) facility (requires Special second digit) */
    | "7"
    /**
     * Special facility or hospital (Critical Access Hospital (CAH)) (Ambulatory Surgical Center (ASC)) surgery (requires special second digit) */
    | "8";
export const TypeOfFacilityCode = {
    C1: "1",
    C2: "2",
    C3: "3",
    C4: "4",
    C6: "6",
    C7: "7",
    C8: "8",
} as const;
