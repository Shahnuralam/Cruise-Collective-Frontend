import React from 'react';
import { AboutTheExpertImage } from '@/containers/ExperienceDetail/AboutTheExpertImage';

export const AboutTheExpertSection: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-[white] py-10">
      <div className="container w-[90%] lg:w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-12">
          <div className="flex flex-col gap-6 col-start-2 col-span-9">
            {/***/}
            <h1 className="border-b border-b-[#36453b] text-3xl font-serif text-[#36453b] pb-4">About the expert</h1>

            <div className="flex flex-wrap gap-4">
              {/** Image */}
              <AboutTheExpertImage />

              {/** Content */}
              <div className="flex flex-col gap-2 md:max-w-[calc(100% - 18rem)] lg:max-w-[60%] xl:max-w-[45%]">
                <h3 className="text-[#4f6355] text-2xl">Expert name to go here</h3>
                <p className="leading-relaxed text-black text-opacity-90">
                  Nam esequidempor raes re nestent evel is del ipsapel ipid moluptatur apicidendunt eossint aut volorpos eturitem labo. Nemporp orporpore excepro et, venienit
                  dolorat prae nonecae catur? Axim invendaestor adi qui cum ipsum aute nimilit alibus a aut lacerorum soluptates quame niendis remquatet voloreh enihill oressinis
                  aligent, si dolorerit ium quas quae accum hitatet acid escia doloriatur? Ebitae pra voloresseque pernata core quiae officie ndigeni. Eperiasi voluptat lam es nat
                  harum remporem eaque maximusdamus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
