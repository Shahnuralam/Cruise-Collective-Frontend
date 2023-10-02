

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
  name: string;
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
    id: 2,
    description:
      "Explore our latest selection of exclusive cruise deals in Europe.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem convallis.",
    continent: "North America",
    list: [
      {
        id: 1,
        imageUrl: "/dummy/destination/Group (1).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Flordia",
      },
      {
        id: 2,
        imageUrl: "/dummy/destination/Group (2).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Cananda",
      },
      {
        id: 3,
        imageUrl: "/dummy/destination/Group (3).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "California",
      },
      {
        id: 4,
        imageUrl: "/dummy/destination/Group (4).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Washington",
      },
    ],
  },
  {
    id: 3,
    description:
      "Explore our latest selection of exclusive cruise deals in Europe.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem convallis.",
    continent: "Asia",
    list: [
      {
        id: 1,
        imageUrl: "/dummy/destination/Group (1).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Thiland",
      },
      {
        id: 2,
        imageUrl: "/dummy/destination/Group (2).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "China",
      },
      {
        id: 3,
        imageUrl: "/dummy/destination/Group (3).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Japan",
      },
      {
        id: 4,
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
    continent: "South America",
    list: [
      {
        id: 1,
        imageUrl: "/dummy/destination/Group (1).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Chile",
      },
      {
        id: 2,
        imageUrl: "/dummy/destination/Group (2).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Mexico",
      },
      {
        id: 3,
        imageUrl: "/dummy/destination/Group (3).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Brazil",
      },
      {
        id: 4,
        imageUrl: "/dummy/destination/Group (4).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Colombia",
      },
    ],
  },
  {
    id: 5,
    description:
      "Explore our latest selection of exclusive cruise deals in Europe.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem convallis.",
    continent: "Africa",
    list: [
      {
        id: 1,
        imageUrl: "/dummy/destination/Group (1).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "South Africa",
      },
      {
        id: 2,
        imageUrl: "/dummy/destination/Group (2).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Madagascar",
      },
      {
        id: 3,
        imageUrl: "/dummy/destination/Group (3).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Morocco",
      },
      {
        id: 4,
        imageUrl: "/dummy/destination/Group (4).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Mozambique",
      },
    ],
  },
  {
    id: 6,
    description:
      "Explore our latest selection of exclusive cruise deals in Europe.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem convallis.",
    continent: "Australia",
    list: [
      {
        id: 1,
        imageUrl: "/dummy/destination/Group (1).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Australia",
      },
      {
        id: 2,
        imageUrl: "/dummy/destination/Group (2).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "New Zealand",
      },
      {
        id: 3,
        imageUrl: "/dummy/destination/Group (3).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Fiji ",
      },
      {
        id: 4,
        imageUrl: "/dummy/destination/Group (4).png",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        name: "Tonga",
      },
    ],
  },
];