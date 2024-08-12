import { LoginFormValues } from "@/components/ui/login-form/utils";

export interface IAuthContextProps {
    login: (data: LoginFormValues) => Promise<void>;
    logout: () => Promise<void>;
}
