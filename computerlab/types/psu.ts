export interface PSU {
    name:string;
    wattage:number; // Watts (W)
    conectors: number;
    formFactor: "ATX" | "SFX" | "TFX";
    eficiencyRating: "80 Plus" | "80 Plus Bronze" | "80 Plus Silver" | "80 Plus Gold" | "80 Plus Platinum" | "80 Plus Titanium";
}