import { ReactNode } from 'react';

interface SelectProps {
    className?: string;
    children: ReactNode;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Select({ className, children, value, onChange }: SelectProps) {
    return (
        <select
            name="categories"
            id="categories"
            className={`${className}`}
            value={value}
            onChange={onChange}
        >
            {children}
        </select>
    )
}

export default Select