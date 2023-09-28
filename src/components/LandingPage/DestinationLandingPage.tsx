import React from "react";
import StrokeLine from "../StrokeLine";
import ContinentModal from "../Modal/ContinentModal";
import CruisesCard from "../Card/CruisesCard";


export interface IDestinationLandingData {
  id: number,
  imageUrl: string,
  description: string,
  countryName: string,
}

const DestinationLandingPage = ({ continentModal, setContinentModal }) => {

  const data: IDestinationLandingData[] = [
    {
      id: 1,
      imageUrl: '/dummy/destination/Group (1).png',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
      countryName: 'Russia',
    },
    {
      id: 2,
      imageUrl: '/dummy/destination/Group (2).png',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
      countryName: 'Russia',
    },
    {
      id: 3,
      imageUrl: '/dummy/destination/Group (3).png',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
      countryName: 'Russia',
    },
    {
      id: 4,
      imageUrl: '/dummy/destination/Group (4).png',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
      countryName: 'Russia',
    },
    {
      id: 5,
      imageUrl: '/dummy/destination/Group (1).png',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
      countryName: 'Russia',
    },
    {
      id: 6,
      imageUrl: '/dummy/destination/Group (2).png',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
      countryName: 'Russia',
    }
  ]

// console.log(data);


  return (
    <div className="container mx-auto py-16">
      <section>
        <h3 className="text-7xl font-bold">Europe Cruises</h3>
        <div className="py-5">
          <StrokeLine></StrokeLine>
        </div>
        <p className="pt-1 max-w-4xl">
          Explore our selected cruise partners for exclusive cruise deals by
          interest, destination or deals... Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit
          amet ligula velit. Sed in tortor est. Fusce egestas at felis quis
          volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non
          fermentum diam, vehicula euismod dui. Praesent finibus ultricies
          mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin
          efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam
          lacinia lacus a ante placerat, et placerat lorem convallis.
        </p>

        <div className="card-container my-10 grid grid-cols-4 gap-12">
            {
              data.map(cruise => <CruisesCard key={cruise.id} cruise={cruise}/>)
            }
        </div>

      </section>

      <h3 className="text-4xl">Pick a continent</h3>
      <div className="pt-2">
        <StrokeLine />
      </div>
      <div className="py-5">
        <button
          onClick={() => {
            setContinentModal(true);
          }}
          className="border-[#FF9A31] border-4"
        >
          <label
            htmlFor="continent-modal"
            className="cursor-pointer block w-full p-2"
          >
            Open Modal
          </label>
        </button>
      </div>
      {continentModal && (
        <ContinentModal
          continentModal={continentModal}
          setContinentModal={setContinentModal}
        ></ContinentModal>
      )}
    </div>
  );
};

export default DestinationLandingPage;
