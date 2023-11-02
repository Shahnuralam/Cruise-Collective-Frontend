



interface IDeparturePort {
    id: number,
    label: string,
    value: string,
}


export const DeparturePort: IDeparturePort[] = [
    { id: 1, label: "DOVER", value: "DOVER" },
    { id: 2, label: "SOUTHAMPTON", value: "SOUTHAMPTON" },
]

export const CruiseDestinations: IDeparturePort[] = [
    { id: 1, label: "Cape Town", value: "Cape Town" },
    { id: 2, label: "Wales", value: "Wales" },
]
export const PriceRange = [
    { id: 0, label: "0-500", value: "0-500", min: 0, max: 500 },
    { id: 1, label: "500-1000", value: "500-1000", min: 500, max: 1000 },
    { id: 2, label: "1000-1500", value: "1000-1500", min: 1000, max: 1500 },
    { id: 3, label: "1500-2000", value: "1500-2000", min: 1500, max: 2000 },
    { id: 4, label: "2000-3000", value: "2000-3000", min: 2000, max: 3000 },
    { id: 5, label: "3000-2500", value: "3000-2500", min: 3000, max: 2500 },
  ];
  
export const SeasonData: IDeparturePort[] = [
    { id: 1, label: "winter", value: "winter" },
    { id: 2, label: "summer", value: "summer" }
]
export const SearchLandingData: IDeparturePort[] = [
    { id: 1, label: "Cruise line offers", value: "Cruise line offers" },
    { id: 2, label: "Special offers", value: "Special offers" },
    { id: 3, label: "Inspiration Articles", value: "Inspiration Articles" }
]