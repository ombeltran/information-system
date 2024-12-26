import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
}

function Button({ children, type, onClick, className }: ButtonProps) {
    return (
        <button type={type} onClick={onClick} className={`rounded-md max-w-[70px] bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}>
            { children }
        </button>
    )
}

export default Button