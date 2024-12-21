import { ListItem } from "./ListItem";

export const DisplayItems = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </ul>
  );
};
