import { InputAddItem } from "./InputAddItem";
import { ButtonAddItem } from "./ButtonAddItem";
import { useState } from "react";

export const AddItems = ({ addItem }) => {
  const [item, setItem] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    addItem(item);
    setItem("");
  };
  return (
    <div className="flex gap-2">
      <InputAddItem
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <ButtonAddItem onClick={handleClick} />
    </div>
  );
};
