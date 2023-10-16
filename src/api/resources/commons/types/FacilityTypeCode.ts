/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Box 24B on the CMS-1500 claim form. Line-level place of service is not currently supported.
 * 02 for telemedicine, 11 for in-person. Full list here:
 * https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set
 *
 */
export type FacilityTypeCode =
    /**
     * Pharmacy */
    | "01"
    /**
     * Telehealth */
    | "02"
    /**
     * School */
    | "03"
    /**
     * Homeless Shelter */
    | "04"
    /**
     * Indian Health Service (Free Standing) */
    | "05"
    /**
     * Indian Health Service (Provider Based) */
    | "06"
    /**
     * Tribal Free Standing */
    | "07"
    /**
     * Tribal Provider Based */
    | "08"
    /**
     * Prison or Correctional Facility */
    | "09"
    /**
     * Telehealth Patient Home */
    | "10"
    /**
     * Office */
    | "11"
    /**
     * Home */
    | "12"
    /**
     * Assisted Living Facility */
    | "13"
    /**
     * Group Home */
    | "14"
    /**
     * Mobile Unit */
    | "15"
    /**
     * Temporary Lodging */
    | "16"
    /**
     * Walk-in Retail Health Clinic */
    | "17"
    /**
     * Place of Employment Worksite */
    | "18"
    /**
     * Off Campus Outpatient Hospital */
    | "19"
    /**
     * Urgent Care Facility */
    | "20"
    /**
     * Inpatient Hospital */
    | "21"
    /**
     * Outpatient Hospital */
    | "22"
    /**
     * Emergency Room Hospital */
    | "23"
    /**
     * Ambulatory Surgical Center */
    | "24"
    /**
     * Birthing Center */
    | "25"
    /**
     * Military Treatment Facility */
    | "26"
    /**
     * Skilled Nursing Facility */
    | "31"
    /**
     * Nursing Facility */
    | "32"
    /**
     * Custodial Care Facility */
    | "33"
    /**
     * Hospice */
    | "34"
    /**
     * Ambulance (Land) */
    | "41"
    /**
     * Ambulance (Air or Water) */
    | "42"
    /**
     * Independent Clinic */
    | "49"
    /**
     * Federally Qualified Health Center */
    | "50"
    /**
     * Inpatient Psychiatric Facility */
    | "51"
    /**
     * Psychiatric Facility (Partial Hospitalization) */
    | "52"
    /**
     * Community Mental Health Center */
    | "53"
    /**
     * Intermediate Care Facility/Individuals with Intellectual Disabilities */
    | "54"
    /**
     * Residential Substance Abuse Treatment Facility */
    | "55"
    /**
     * Psychiatric Residential Treatment Center */
    | "56"
    /**
     * Non-residential Substance Abuse Treatment Facility */
    | "57"
    /**
     * Non-residential Opioid Treatment Facility */
    | "58"
    /**
     * Mass Immunization Center */
    | "60"
    /**
     * Comprehensive Inpatient Rehabilitation Facility */
    | "61"
    /**
     * Comprehensive Outpatient Rehabilitation Facility */
    | "62"
    /**
     * End Stage Renal Disease Treatment Facility */
    | "65"
    /**
     * State or Local Public Health Clinic */
    | "71"
    /**
     * Rural Health Clinic */
    | "72"
    /**
     * Independent Laboratory */
    | "81"
    /**
     * Other Unlisted Facility */
    | "99";

export const FacilityTypeCode = {
    Pharmacy: "01",
    Telehealth: "02",
    School: "03",
    HomelessShelter: "04",
    IndianHealthServiceFreeStanding: "05",
    IndianHealthServiceProviderBased: "06",
    TribalFreeStanding: "07",
    TribalProviderBased: "08",
    PrisonOrCorrectionalFacility: "09",
    TelehealthPatientHome: "10",
    Office: "11",
    Home: "12",
    AssistedLivingFacility: "13",
    GroupHome: "14",
    MobileUnit: "15",
    TemporaryLodging: "16",
    WalkInRetailHealthClinic: "17",
    PlaceOfEmploymentWorksite: "18",
    OffCampusOutpatientHospital: "19",
    UrgentCareFacility: "20",
    InpatientHospital: "21",
    OutpatientHospital: "22",
    EmergencyRoomHospital: "23",
    AmbulatorySurgicalCenter: "24",
    BirthingCenter: "25",
    MilitaryTreatmentFacility: "26",
    SkilledNursingFacility: "31",
    NursingFacility: "32",
    CustodialCareFacility: "33",
    Hospice: "34",
    AmbulanceLand: "41",
    AmbulanceAirOrWater: "42",
    IndependentClinic: "49",
    FederallyQualifiedHealthCenter: "50",
    InpatientPsychiatricFacility: "51",
    PsychiatricFacilityPartialHospitalization: "52",
    CommunityMentalHealthCenter: "53",
    IntermediateCareFacilityMentallyRetarded: "54",
    ResidentialSubstanceAbuseTreatmentFacility: "55",
    PsychiatricResidentialTreatmentCenter: "56",
    NonResidentialSubstanceAbuseTreatmentFacility: "57",
    NonResidentialOpioidTreatmentFacility: "58",
    MassImmunizationCenter: "60",
    ComprehensiveInpatientRehabilitationFacility: "61",
    ComprehensiveOutpatientRehabilitationFacility: "62",
    EndStageRenalDiseaseTreatmentFacility: "65",
    StateOrLocalPublicHealthClinic: "71",
    RuralHealthClinic: "72",
    IndependentLaboratory: "81",
    OtherUnlistedFacility: "99",
} as const;
