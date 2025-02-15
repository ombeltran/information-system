interface InputProps {
  type: 'text' | 'password' | 'email' | 'number' | 'tel'; // Puedes añadir más tipos según sea necesario
  placeholder?: string; // `placeholder` debe ser parte de las props y opcional
  className?: string; // `className` debe ser parte de las props y opcional
  required?: boolean; // `required` debe ser parte de las props y opcional
  value?: string; // `value` debe ser parte de las props y opcional
  name?: string;
  list?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // `onChange` debe ser parte de las props y opcional
}

function Input({ type, name, placeholder, className, required, value, list, onChange }: InputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      list={list}
      onChange={onChange}
      className={`w-full py-1.5 pl-2 pr-3 font-bold text-base text-gray-900 placeholder:text-gray-400 outline outline-2 outline-gray-300 rounded-lg ${className}`}
    />
  );
}

export default Input;
