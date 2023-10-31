

export interface IDestinationData {
  id: number;
  continent: string;
  description: string;
  mapIcon?: string;
  list: countryData[];
}

export interface countryData {
  id?: number;
  imageUrl?: string;
  description?: string;
  name?: string;
}


export const destinationPageData: IDestinationData[] = [
  {
    id: 1,
    description:
      "Explore our latest selection of exclusive cruise deals in Europe.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem convallis.",
    continent: "Africa",
    mapIcon:"/images/continents/world map.png",
    list: [
      {
        id: 17,
        imageUrl: "/dummy/destination/Group (1).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "South Africa",
      },
      {
        id: 18,
        imageUrl: "/dummy/destination/Group (2).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Madagascar",
      },
      {
        id: 19,
        imageUrl: "/dummy/destination/Group (3).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Morocco",
      },
      {
        id: 20,
        imageUrl: "/dummy/destination/Group (4).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Mozambique",
      },
    ],
  },
  {
    id: 2,
    description:
      "Explore our latest selection of exclusive cruise deals in Europe.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem convallis.",
    continent: "Europe",
    mapIcon:"/images/continents/Europe.png",
    list: [
      {
        id: 1,
        imageUrl: "/dummy/destination/Group (1).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Russia",
      },
      {
        id: 2,
        imageUrl: "/dummy/destination/Group (2).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "France",
      },
      {
        id: 3,
        imageUrl: "/dummy/destination/Group (3).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Italy",
      },
      {
        id: 4,
        imageUrl: "/dummy/destination/Group (4).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Spain",
      },
    ],
  },
  {
    id: 3,
    description:
      "Explore our latest selection of exclusive cruise deals in Europe.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem convallis.",
    continent: "Asia",
    mapIcon:"/images/continents/Asia.png",
    list: [
      {
        id: 9,
        imageUrl: "/dummy/destination/Group (1).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Thiland",
      },
      {
        id: 10,
        imageUrl: "/dummy/destination/Group (2).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "China",
      },
      {
        id: 11,
        imageUrl: "/dummy/destination/Group (3).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Japan",
      },
      {
        id: 12,
        imageUrl: "/dummy/destination/Group (4).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "South Korea",
      },
    ],
  },
  {
    id: 4,
    description:
      "Explore our latest selection of exclusive cruise deals in Europe.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem convallis.",
    continent: "Antarctica",
    mapIcon:"/images/continents/Antarctica.png",
    list: [
      {
        id: 25,
        imageUrl: "/dummy/destination/Group (1).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Argentina",
      },
      {
        id: 26,
        imageUrl: "/dummy/destination/Group (2).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Belgium",
      },
      {
        id: 27,
        imageUrl: "/dummy/destination/Group (3).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Peru",
      },
      {
        id: 28,
        imageUrl: "/dummy/destination/Group (4).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Norway",
      },
    ],
  },
  {
    id: 5,
    description:
      "Explore our latest selection of exclusive cruise deals in Europe.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem convallis.",
    continent: "South America",
    mapIcon:"/images/continents/South America.png",
    list: [
      {
        id: 13,
        imageUrl: "/dummy/destination/Group (1).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Chile",
      },
      {
        id: 14,
        imageUrl: "/dummy/destination/Group (2).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Mexico",
      },
      {
        id: 15,
        imageUrl: "/dummy/destination/Group (3).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Brazil",
      },
      {
        id: 16,
        imageUrl: "/dummy/destination/Group (4).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Colombia",
      },
    ],
  },
  {
    id: 6,
    description:
      "Explore our latest selection of exclusive cruise deals in Europe.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem convallis.",
    continent: "North America",
    mapIcon:"/images/continents/North America.png",
    list: [
      {
        id: 5,
        imageUrl: "/dummy/destination/Group (1).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Flordia",
      },
      {
        id: 6,
        imageUrl: "/dummy/destination/Group (2).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Cananda",
      },
      {
        id: 7,
        imageUrl: "/dummy/destination/Group (3).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "California",
      },
      {
        id: 8,
        imageUrl: "/dummy/destination/Group (4).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Washington",
      },
    ],
  },
  {
    id: 7,
    description:
      "Explore our latest selection of exclusive cruise deals in Europe.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem convallis.",
    continent: "Oceania",
    mapIcon:"/images/continents/Oceania.png",
    list: [
      {
        id: 21,
        imageUrl: "/dummy/destination/Group (1).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Australia",
      },
      {
        id: 22,
        imageUrl: "/dummy/destination/Group (2).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "New Zealand",
      },
      {
        id: 23,
        imageUrl: "/dummy/destination/Group (3).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Fiji ",
      },
      {
        id: 24,
        imageUrl: "/dummy/destination/Group (4).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Tonga",
      },
    ],
  },
  {
    id: 8,
    description:
      "Explore our latest selection of exclusive cruise deals in Europe.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem convallis.",
    continent: "Multi-continent",
    mapIcon:"/images/continents/world map.png",
    list: [
      {
        id: 29,
        imageUrl: "/dummy/destination/Group (1).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Portugal",
      },
      {
        id: 30,
        imageUrl: "/dummy/destination/Group (2).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Greece",
      },
      {
        id: 31,
        imageUrl: "/dummy/destination/Group (3).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Netherlands ",
      },
      {
        id: 32,
        imageUrl: "/dummy/destination/Group (4).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Denmark",
      },
    ],
  },
];