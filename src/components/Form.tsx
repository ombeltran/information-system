import { ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
}

function Form({ children, onSubmit, className }: FormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className={`outline outline-2 -outline-offset-1 outline-gray-300 border-2 rounded-xl shadow-lg shadow-gray-400 ${className}`}>
      {children}
    </form>
  )
}

export default Form