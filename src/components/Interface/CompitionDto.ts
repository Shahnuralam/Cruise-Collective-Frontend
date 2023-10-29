export interface ICompetitionDto {
    id: number,
    title: string,
    featured_image: string,
    excerpt: string,
    status: string,
}

export const competitionCruiseData: ICompetitionDto[] = [
    {
        id: 1,
        title: "Win a cruise around the pacific this summer!",
        excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt  ut laoreet dolore magna. diam nonummy dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt  ut l dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt  ut l nibh euismod tincidunt",
        featured_image: "/dummy/competition/Rectangle (19).png",
        status: 'Open',
    },
    {
        id: 2,
        title: "Win a cruise around the pacific this summer!",
        excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. ",
        featured_image: "/dummy/competition/Rectangle (21).png",
        status: "Closed",
    },
    {
        id: 3,
        title: "Win a cruise around the pacific this summer!",
        excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        featured_image: "/dummy/competition/Rectangle (20).png",
        status: "Closed",
    },
    {
        id: 4,
        title: "Win a cruise around the pacific this summer!",
        excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        featured_image: "/dummy/competition/Rectangle (21).png",
        status: "Open",
    },
    {
        id: 5,
        title: "Win a cruise around the pacific this summer!",
        excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        featured_image: "/dummy/competition/Rectangle (20).png",
        status: "Open",
    },
    {
        id: 6,
        title: "Win a cruise around the pacific this summer!",
        excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        featured_image: "/dummy/competition/Rectangle (19).png",
        status: "Closed",
    },
    {
        id: 7,
        title: "Win a cruise around the pacific this summer!",
        excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        featured_image: "/dummy/competition/Rectangle (21).png",
        status: "Closed",
    },
]