interface ButtonSubmitProps {
  text: string;
  className?: string;
  onClick: () => void;
}

export default function ButtonSubmit({
  text,
  className,
  onClick,
}: ButtonSubmitProps) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}
