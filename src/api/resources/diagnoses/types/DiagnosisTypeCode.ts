/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type DiagnosisTypeCode =
    /**
     * ICD-10 Diagnosis */
    | "ABF"
    /**
     * ICD-10 Admitting Diagnosis */
    | "ABJ"
    /**
     * ICD-10 Principal Diagnosis */
    | "ABK"
    /**
     * ICD-10 Patient Reason for Visit */
    | "APR"
    /**
     * ICD-9 Diagnosis */
    | "BF"
    /**
     * ICD-9 Admitting Diagnosis */
    | "BJ"
    /**
     * ICD-9 Principal Diagnosis */
    | "BK"
    /**
     * ICD-9 Patient Reason for Visit */
    | "PR"
    /**
     * Diagnosis Related Group (DRG) */
    | "DR"
    /**
     * Logical Observation Identifier Names and Codes (LOINC<190>) Codes */
    | "LOI";
export const DiagnosisTypeCode = {
    Abf: "ABF",
    Abj: "ABJ",
    Abk: "ABK",
    Apr: "APR",
    Bf: "BF",
    Bj: "BJ",
    Bk: "BK",
    Pr: "PR",
    Dr: "DR",
    Loi: "LOI",
} as const;
