interface TextAreaProps {
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextArea({ className, value, onChange }: TextAreaProps) {
  return (
    <textarea
      className={`w-full py-1.5 pl-2 pr-3 font-bold text-base text-gray-900 placeholder:text-gray-400 outline outline-2 outline-gray-300 rounded-lg ${className}`}
      value={value} // Evita que sea undefined
      onChange={onChange}
    />
  );
}

export default TextArea;
