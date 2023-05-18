/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type PatientRelationshipToInsuredCodeAll =
    | "01"
    | "04"
    | "05"
    | "07"
    | "10"
    | "15"
    | "17"
    | "18"
    | "19"
    | "20"
    | "21"
    | "22"
    | "23"
    | "24"
    | "29"
    | "32"
    | "33"
    | "36"
    | "39"
    | "40"
    | "41"
    | "43"
    | "53"
    | "G8";

export const PatientRelationshipToInsuredCodeAll = {
    Spouse: "01",
    Grandparent: "04",
    Grandchild: "05",
    NieceNephew: "07",
    FosterChild: "10",
    WardOfTheCourt: "15",
    Stepchild: "17",
    Self: "18",
    Child: "19",
    Employee: "20",
    Unknown: "21",
    HandicappedDependent: "22",
    SponsoredDependent: "23",
    DependentOfMinorDependent: "24",
    SignificantOther: "29",
    Mother: "32",
    Father: "33",
    EmancipatedMinor: "36",
    OrganDonor: "39",
    CadaverDonor: "40",
    InjuredPlaintiff: "41",
    ChildNoFinancialResponsibility: "43",
    LifePartner: "53",
    OtherRelationship: "G8",
} as const;
