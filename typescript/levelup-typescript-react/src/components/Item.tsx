import { useState } from "react";

interface Props {
  data: string;
}

export default function Item({ data }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  return <div></div>;
}
