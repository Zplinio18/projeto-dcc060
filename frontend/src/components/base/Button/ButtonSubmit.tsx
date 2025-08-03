interface ButtonSubmitProps {
  text: string;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function ButtonSubmit({
  text,
  className,
  onClick,
  disabled,
}: ButtonSubmitProps) {
  return (
    <button disabled={disabled} className={className} onClick={onClick}>
      {text}
    </button>
  );
}
