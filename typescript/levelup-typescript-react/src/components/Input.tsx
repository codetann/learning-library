import { useState, useRef } from "react";

/**
 * ! Normal <input /> w/ useState !
 */
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

/**
 * ! Normal <input /> w/ useRef !
 */
export const InputRef = () => {
  const ref = useRef<HTMLInputElement>(null!); // null! is read only

  return <input ref={ref} type="text" />;
};
