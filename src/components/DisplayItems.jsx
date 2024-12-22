import { CheckItem } from "./CheckItem";
import { ListItem } from "./ListItem";
import { useState } from "react";

export const DisplayItems = ({ items }) => {
  const [checked, setChecked] = useState({});
  const handleChange = (index) => {
    setChecked((prev) => {
      return { ...prev, [index]: !prev[index] };
    });
  };
  return (
    <ul>
      {items.map((item, index) => (
        <div key={index} className="flex gap-2">
          <CheckItem
            key={index}
            checked={checked[index] || false}
            onChange={() => handleChange(index)}
          />
          <ListItem className={checked[index] ? "line-through" : ""}>
            {item}
          </ListItem>
        </div>
      ))}
    </ul>
  );
};
