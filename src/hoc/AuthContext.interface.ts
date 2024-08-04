import { LoginFormValues } from "@/components/ui/login-form/utils";
import { AdaptedUserFormData } from "@/types/user.interface";

export interface IAuthContextProps {
    user: AdaptedUserFormData | null;
    login: (data: LoginFormValues) => Promise<void>;
    logout: () => Promise<void>;
}
