import { AdaptedUserData } from "@/types/types";

export interface IAuthContextProps {
    user: AdaptedUserData | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}
