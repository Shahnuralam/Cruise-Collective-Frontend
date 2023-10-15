
interface IDeparturePort {
    id: number,
    name: string,
    value: string,
}


export const DeparturePort: IDeparturePort[] = [
    { id: 1, name: "DOVER", value: "DOVER" },
    { id: 2, name: "SOUTHAMPTON", value: "SOUTHAMPTON" },
]

export const CruiseDestinations: IDeparturePort[] = [
    { id: 1, name: "Cape Town", value: "Cape Town" },
    { id: 2, name: "Wales", value: "Wales" },
]
export const PriceRange: IDeparturePort[] = [
    { id: 1, name: "1-10", value: "1-10" },
    { id: 2, name: "11-20", value: "11-20" },
]
export const SeasonData: IDeparturePort[] = [
    { id: 1, name: "winter", value: "winter" },
    { id: 2, name: "summer", value: "summer" }
]
export const SearchLandingData: IDeparturePort[] = [
    { id: 1, name: "Cruise line offers", value: "Cruise line offers" },
    { id: 2, name: "Special offers", value: "Special offers" }
]