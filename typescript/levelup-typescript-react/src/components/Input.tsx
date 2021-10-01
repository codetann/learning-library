import { useState } from "react";

export const Input = () => {
  const [value, setValue] = useState<string>("");
  // const [value, setValue] = useState<string | null>(null);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
