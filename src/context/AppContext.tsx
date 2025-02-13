"use client"
import { createContext, useContext, useState, ReactNode } from "react";

interface FormDataType {
    bxNumber: string;
    trackingNumber: string;
    model: string;
    serialNumber: string;
    upc: string;
    comments: string;
    details: string[];
    category: string;
    soldModel?: string;
    soldSerialNumber?: string;
}

interface AppContextType {
    user: string;
    setUser: (user: string) => void;
    templateClaim: boolean;
    setTemplateClaim: (templateClaim: boolean) => void;
    receivedItem: FormDataType[];
    setReceivedItem: (receivedItem: FormDataType[]) => void;
    removeAllDetails: boolean;
    setRemoveAllDetails: (removeAllDetails: boolean) => void;
    claimDetail: string[];
    setClaimDetail: (claimDetail: string[]) => void;
    claimSoldModel: string;
    setClaimSoldModel: (claimSoldModel: string) => void;
    claimSoldSN: string;
    setClaimSoldSN: (claimSoldSN: string) => void;
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
    const [receivedItem, setReceivedItem] = useState<FormDataType[]>([]);
    const [removeAllDetails, setRemoveAllDetails] = useState<boolean>(false);
    const [claimDetail, setClaimDetail] = useState<string[]>([]);
    const [claimSoldModel, setClaimSoldModel] = useState<string>("");
    const [claimSoldSN, setClaimSoldSN] = useState<string>("");

    return (
        <AppContext.Provider
            value={{
                user,
                setUser,
                templateClaim,
                setTemplateClaim,
                receivedItem,
                setReceivedItem,
                removeAllDetails,
                setRemoveAllDetails,
                claimDetail,
                setClaimDetail,
                claimSoldModel,
                setClaimSoldModel,
                claimSoldSN,
                setClaimSoldSN,
            }}>
            {children}
        </AppContext.Provider>
    );
};
