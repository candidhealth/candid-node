/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type SourceOfPaymentCode =
    /**
     * Self-pay */
    | "09"
    /**
     * Other Non-Federal Programs */
    | "11"
    /**
     * Preferred Provider Organization (PPO) */
    | "12"
    /**
     * Point of Service (POS) */
    | "13"
    /**
     * Exclusive Provider Organization (EPO) */
    | "14"
    /**
     * Indemnity Insurance */
    | "15"
    /**
     * Health Maintenance Organization (HMO) Medicare Risk */
    | "16"
    /**
     * Dental Maintenance Organization */
    | "17"
    /**
     * Automobile Medical */
    | "AM"
    /**
     * Blue Cross/Blue Shield */
    | "BL"
    /**
     * CHAMPUS */
    | "CH"
    /**
     * Commercial Insurance Co. */
    | "CI"
    /**
     * Disability */
    | "DS"
    /**
     * Federal Employees Program */
    | "FI"
    /**
     * Health Maintenance Organization (HMO) */
    | "HM"
    /**
     * Liability Medical */
    | "LM"
    /**
     * Medicare Part A */
    | "MA"
    /**
     * Medicare Part B */
    | "MB"
    /**
     * Medicaid */
    | "MC"
    /**
     * Other Federal Program */
    | "OF"
    /**
     * Title V */
    | "TV"
    /**
     * Veterans Affairs Plan */
    | "VA"
    /**
     * Workers' Compensation Health Claim */
    | "WC"
    /**
     * Mutually Defined */
    | "ZZ";
export const SourceOfPaymentCode = {
    SelfPay: "09",
    OtherNonFederalPrograms: "11",
    Ppo: "12",
    Pos: "13",
    Epo: "14",
    IndemnityInsurance: "15",
    HmoMedicareRisk: "16",
    Dmo: "17",
    Auto: "AM",
    BlueCrossBlueShield: "BL",
    Champus: "CH",
    CommercialInsuranceCo: "CI",
    Disability: "DS",
    FederalEmployees: "FI",
    Hmo: "HM",
    Liability: "LM",
    MedicarePartA: "MA",
    MedicarePartB: "MB",
    Medicaid: "MC",
    OtherFederalProgram: "OF",
    TitleV: "TV",
    VeteransAffairsPlan: "VA",
    WorkersCompHealthClaim: "WC",
    MutuallyDefined: "ZZ",
} as const;
