import { AdaptedUserData } from "@/components/ui/sign-up-form/SignUpForm.interface";

export interface IAuthContextProps {
    user: AdaptedUserData | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}
