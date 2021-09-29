interface Props {
  title: string | number;
  isActive?: boolean;
  info: {
    name: string;
    age: number;
  };
}

export default function Head({ title, isActive = false, info }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      {isActive && <h3>Active</h3>}
    </div>
  );
}
