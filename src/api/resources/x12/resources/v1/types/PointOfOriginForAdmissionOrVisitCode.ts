/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type PointOfOriginForAdmissionOrVisitCode =
    /**
     * NON-HEALTH CARE FACILITY POINT OF ORIGIN - Inpatient: The patient was admitted to this facility. Outpatient: The patient presented for outpatient services. Examples: Includes patients coming from home or workplace and patients receiving care at home (such as home health services). */
    | "1"
    /**
     * CLINIC OR PHYSICIAN'S OFFICE - Inpatient: The patient was admitted to this facility. Outpatient: The patient presented to this facility for outpatient services. */
    | "2"
    /**
     * TRANSFER FROM A HOSPITAL (DIFFERENT FACILITY) - Inpatient: The patient was admitted to this facility as a hospital transfer from an acute care facility where he or she was an inpatient or outpatient. Outpatient: The patient was transferred to this facility as an outpatient from an acute care facility. Excludes Transfers from Hospital Inpatient in the Same Facility (See Code D). */
    | "4"
    /**
     * TRANSFER FROM A SKILLED NURSING FACILITY (SNF), ASSISTED LIVING FACILITY (ALF), INTERMEDIATE CARE FACILITY (ICF) OR OTHER NURSING FACILITY (NF). - Inpatient: The patient was admitted to this facility as a transfer from a SNF, ALF, ICF or other NF where he or she was a resident. Outpatient: The patient presented to this facility for outpatient or referenced diagnostic services from a SNF, ALF, ICF or other NF where he or she was a resident. */
    | "5"
    /**
     * TRANSFER FROM ANOTHER HEALTH CARE FACILITY - Inpatient: The patient was admitted to this facility as a transfer from another type of health care facility not defined elsewhere in this code list. Outpatient: The patient presented to this facility for services from another health care facility not defined elsewhere in this code list. */
    | "6"
    /**
     * COURT/LAW ENFORCEMENT - Inpatient: The patient was admitted to this facility upon the direction of a court of law, or upon the request of a law enforcement agency representative. Outpatient: The patient presented to this facility upon the direction of a court of law, or upon the request of a law enforcement agency representative for outpatient or referenced diagnostic services. Usage Note: Includes transfers from incarceration facilities. */
    | "8"
    /**
     * INFORMATION NOT AVAILABLE - Inpatient: The patient's Point of Origin is not known. Outpatient: The patient's Point of Origin is not known. */
    | "9"
    /**
     * TRANSFER FROM ONE DISTINCT UNIT OF THE HOSPITAL TO ANOTHER DISTINCT UNIT OF THE SAME HOSPITAL RESULTING IN A SEPARATE CLAIM TO THE PAYER - Inpatient: The patient was admitted to this facility as a transfer from hospital inpatient within this hospital resulting in a separate claim to the payer. Outpatient: The patient received outpatient services in this facility as a transfer from within this hospital resulting in a separate claim to the payer. Usage Note: For purposes of this code, "Distinct Unit" is defined as a unique unit or level of care at the hospital requiring the issuance of a separate claim to the payer. Examples could include observation services, psychiatric units, rehabilitation units, a unit in a critical access hospital, or a swing bed located in an acute hospital. */
    | "D"
    /**
     * TRANSFER FROM AMBULATORY SURGERY CENTER - Inpatient: The patient was admitted to this facility as a transfer from an ambulatory surgery center. Outpatient: The patient presented to this facility for outpatient or referenced diagnostic services from an ambulatory surgery center. */
    | "E"
    /**
     * TRANSFER FROM A HOSPICE FACILITY - Inpatient: The patient was admitted to this facility as a transfer from a hospice facility. Outpatient: The patient presented to this facility for outpatient or referenced diagnostic services from a hospice facility. */
    | "F"
    /**
     * TRANSFER FROM A DESIGNATED DISASTER ALTERNATE CARE SITE (EFFECTIVE 7/1/20) - The patient was transferred to this facility from a Designated Disaster Alternate Care Site for inpatient or outpatient services. */
    | "G";
export const PointOfOriginForAdmissionOrVisitCode = {
    C1: "1",
    C2: "2",
    C4: "4",
    C5: "5",
    C6: "6",
    C8: "8",
    C9: "9",
    Cd: "D",
    Ce: "E",
    Cf: "F",
    Cg: "G",
} as const;
