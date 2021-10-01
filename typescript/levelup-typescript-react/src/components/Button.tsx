import { MouseEvent, FormEvent } from "react";

interface Props {
  children: any;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
}

export default function Button({ onClick, children }: Props) {
  return <button onClick={onClick}>{children}</button>;
}
