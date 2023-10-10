import { AccordionItem } from "./AccordionItem";

export const Accordions = ({ items }) => {

  return (
    <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-screen">
      {/* <div className="flex flex-col items-center">
        <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
        <p className="text-neutral-500 text-xl mt-3">
          Frequenty asked questions
        </p>
      </div> */}
      <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            name={item.attributes.name}
            description={item.attributes.description}
          />
        ))}
      </div>
    </div>
  );
};
