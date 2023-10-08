import { useState } from "react";

const DropDown = ({ items, placeholder }) => {
//   console.log(items);
  const [selectedOption, setSelectedOption] = useState(placeholder);
  const handleStatusChange = (e) => {
    const selectedItem = e.target.value;
    if (selectedItem) {
      setSelectedOption(selectedItem);
    }
  };

  return (
    <div className="w-full">
      <select
        value={selectedOption}
        onChange={handleStatusChange}
        className="border border-cruise rounded-sm cursor-pointer outline-0 p-2 text-base w-full"
      >
        <option className="text-base" disabled defaultValue={placeholder}>
          {placeholder}
        </option>

        {items?.length &&
          items.map((item) => (
            <option key={item.id} className="text-base" value={item.name}>
              {item.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default DropDown;
