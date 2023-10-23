
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
export const PriceRange: IDeparturePort[] = [
    { id: 1, label: "1-10", value: "1-10" },
    { id: 2, label: "11-20", value: "11-20" },
]
export const SeasonData: IDeparturePort[] = [
    { id: 1, label: "winter", value: "winter" },
    { id: 2, label: "summer", value: "summer" }
]
export const SearchLandingData: IDeparturePort[] = [
    { id: 1, label: "Cruise line offers", value: "Cruise line offers" },
    { id: 2, label: "Special offers", value: "Special offers" },
    { id: 3, label: "Inspiration Articles", value: "Inspiration Articles" }
]