import CruisesCard from '@/components/Card/CruisesCard';
import { interestData } from '@/components/Interface/InterestDto';
import PageHeading from '@/components/PageHeading';
import React from 'react';

const interest = () => {
    const pageHeaderData = {
        heading: "Cruise by interest",
        text:"Explore our latest selection of exclusive cruise deals by interest.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est. Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id efficitur urna. Nam non fermentum diam, vehicula euismod dui. Praesent finibus ultricies mollis. Integer accumsan varius sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et placerat lorem convallis.",
        class: "text-sm"
    }

    return (
        <div className="p-3 md:p-[32px] lg:p-[75px]">
        <PageHeading pageHeaderData={pageHeaderData} />
        <div className="card-container my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {interestData.map((cruise) => (
            <CruisesCard key={cruise.id} cruise={cruise} />
          ))}
        </div>
      </div>
    );
};

export default interest;