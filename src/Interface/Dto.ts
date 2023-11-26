export interface INewsLetterInputDto {
    email: string,
}

export interface ISearchDropDownInputDto {
    id: number,
    label: string,
    value: string
}

export interface ICompetitionOptions {
     value: boolean, 
     label: string,
}

interface IDeparturePort {
    id: number,
    label: string,
    value: string,
}


export const PriceRange = [
    { id: 0, label: "£0-500", value: "0-500", min: 0, max: 500 },
    { id: 1, label: "£500-1000", value: "500-1000", min: 500, max: 1000 },
    { id: 2, label: "£1000-1500", value: "1000-1500", min: 1000, max: 1500 },
    { id: 3, label: "£1500-2000", value: "1500-2000", min: 1500, max: 2000 },
    { id: 4, label: "£2000-3000", value: "2000-3000", min: 2000, max: 3000 },
    { id: 5, label: "£3000+", value: "3000+", min: 3000, max: 100000000000 },
  ];
export const SearchLandingData: IDeparturePort[] = [
    { id: 1, label: "Cruise line offers", value: "Cruise line offers" },
    { id: 2, label: "Special offers", value: "Special offers" },
    { id: 3, label: "Inspiration Articles", value: "Inspiration Articles" }
]

export interface successModalDto  {
    title?: string,
    text?: string
}