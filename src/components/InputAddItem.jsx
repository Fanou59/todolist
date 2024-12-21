export const InputAddItem = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Add item"
      className="input input-bordered input-info w-full max-w-xs"
      value={value}
      onChange={onChange}
    />
  );
};
