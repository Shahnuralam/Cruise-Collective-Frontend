

export interface IDestinationData {
  id: number;
  continent: string;
  description: string;
  list: countryData[];
}

export interface countryData {
  id: number;
  imageUrl: string;
  description: string;
  countryName: string;
}


export const destinationPageData: IDestinationData[] = [
  {
    id: 1,
    description:
      "Explore our latest selection of exclusive cruise deals in Europe.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem convallis.",
    continent: "Europe",
    list: [
      {
        id: 1,
        imageUrl: "/dummy/destination/Group (1).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        countryName: "Russia",
      },
      {
        id: 2,
        imageUrl: "/dummy/destination/Group (2).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        countryName: "France",
      },
      {
        id: 3,
        imageUrl: "/dummy/destination/Group (3).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        countryName: "Italy",
      },
      {
        id: 4,
        imageUrl: "/dummy/destination/Group (4).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        countryName: "Spain",
      },
    ],
  },
  {
    id: 2,
    description:
      "Explore our latest selection of exclusive cruise deals in Europe.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem convallis.",
    continent: "Asia",
    list: [
      {
        id: 1,
        imageUrl: "/dummy/destination/Group (1).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        countryName: "Thiland",
      },
      {
        id: 2,
        imageUrl: "/dummy/destination/Group (2).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        countryName: "China",
      },
      {
        id: 3,
        imageUrl: "/dummy/destination/Group (3).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        countryName: "Japan",
      },
      {
        id: 4,
        imageUrl: "/dummy/destination/Group (4).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        countryName: "South Korea",
      },
    ],
  },

  {
    id: 3,
    description:
      "Explore our latest selection of exclusive cruise deals in Europe.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem convallis.",
    continent: "Africa",
    list: [
      {
        id: 1,
        imageUrl: "/dummy/destination/Group (1).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        countryName: "South Africa",
      },
      {
        id: 2,
        imageUrl: "/dummy/destination/Group (2).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        countryName: "Madagascar",
      },
      {
        id: 3,
        imageUrl: "/dummy/destination/Group (3).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        countryName: "Morocco",
      },
      {
        id: 4,
        imageUrl: "/dummy/destination/Group (4).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        countryName: "Mozambique",
      },
    ],
  },
];