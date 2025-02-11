"use client"
import { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
    user: string;
    setUser: (user: string) => void;
    templateClaim: boolean;
    setTemplateClaim: (templateClaim: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext debe usarse dentro de un AppProvider");
    }
    return context;
};

// Context provider
interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [user, setUser] = useState<string>("");
    const [templateClaim, setTemplateClaim] = useState<boolean>(false);

    return (
        <AppContext.Provider
            value={{
                user,
                setUser,
                templateClaim,
                setTemplateClaim
            }}>
            {children}
        </AppContext.Provider>
    );
};
