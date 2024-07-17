import { FormProvider, useForm } from "react-hook-form";
import FormField from "../form-field/FormField";
import { Button } from "../button";
import { zodResolver } from "@hookform/resolvers/zod";
import { adaptedUserData, SignUpFormValues, schema } from "./utils";
import { AdaptedUserData } from "./SignUpForm.interface";
import { UserService } from "@/services/user.service";
import { useRouter } from "next/router";

const SignUpForm: React.FC = () => {
  const methods = useForm<SignUpFormValues>({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phone: "",
      birthDate: "",
    },
  });

  const router = useRouter();

  async function onSubmit(data: SignUpFormValues) {
    const userData = {
      ...data,
      picture: "",
      fullName: "",
    };

    const formattedUserData: AdaptedUserData = adaptedUserData(userData);
    // console.log(formattedUserData);

    try {
      const response = await UserService.createUser(formattedUserData);

      if (response.status === 201) {
        console.log("User created successfully:", response.data);

        // Сбрасывает поля формы
        methods.reset({ phone: "+7" });

        // Перенаправялет на страницу Логин
        router.push("/login");
      }
    } catch (error) {
      console.error("Failed to create user:", error.response);
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <FormField
                id="first-name"
                name="firstName"
                label="First name"
                placeholder="Max"
                required
                componentType="input"
              />
            </div>

            <div className="grid gap-2">
              <FormField
                id="last-name"
                name="lastName"
                label="Last name"
                placeholder="Robinson"
                required
                componentType="input"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <FormField
                id="email"
                name="email"
                label="Email"
                placeholder="Roden"
                type="email"
                required
                componentType="input"
              />
            </div>

            <div className="grid gap-2">
              <FormField
                id="phone"
                name="phone"
                label="Phone number"
                required
                componentType="phone"
                country={"ru"}
                onlyCountries={["ru", "by", "kz"]}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <FormField
                id="password"
                name="password"
                label="Password"
                placeholder="****"
                type="password"
                required
                componentType="input"
              />
            </div>

            <div className="grid gap-2">
              <FormField
                id="date"
                name="birthDate"
                label="Date"
                placeholder="22.06.1990"
                type="date"
                required
                componentType="input"
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            Create an account
          </Button>

          {/* <Button variant="outline" className="w-full">
                  Sign up with GitHub
                </Button> */}
        </div>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
