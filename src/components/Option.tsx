import { ReactNode } from "react";

interface OptionProps {
    children: ReactNode
    value: string;
    label?: string;
    className?: string;
    hidden?: boolean;
}

function Option({ className, value, children, hidden }: OptionProps) {
    return (
        <option
            value={value}
            className={`${className}`}
            hidden={hidden}
        >
            {children}
        </option>
    )
}

export default Option