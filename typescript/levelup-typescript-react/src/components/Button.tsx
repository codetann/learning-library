import { MouseEvent, FormEvent } from "react";

// #7 React Events in TypeScript

interface Props {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
}

export default function Button({ onClick }: Props) {
  return <button onClick={onClick}>Click Me</button>;
}
