import CustomSearchField from "@/components/ui/custom-search-field/CustomSearchField";
import FormField from "@/components/ui/form-field/FormField";
import { Input } from "@/components/ui/input";
import { useAppSelector } from "@/hooks";
import { ComponentFormEnum } from "@/types/form.interface";
import { Bell } from "lucide-react";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";

// Определяем схему валидации с помощью Zod
// const dashboardSchema = z.object({
//   search: z.string().min(2, { message: "Минимальное кол-во символов 2." }),
// });

const DashboardHeader: React.FC = () => {
  const userInfo = useAppSelector((state) => state.USER);
  const methods = useForm({
    mode: "onChange",
    // resolver: zodResolver(dashboardSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data) {
    console.log("Отправил:", data);
  }

  return (
    <div className="flex items-center justify-between">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FormField
            value={{
              id: "search",
              name: "search",
              placeholder: "Поиск",
              type: "search",
              componentType: ComponentFormEnum.INPUT,
              className: "h-10 flex items-center px-3 pl-12 rounded-xl",
            }}
          />
        </form>
      </FormProvider>

      <div className="flex items-center">
        <div className="bg-white w-10 h-10 flex items-center justify-center rounded-xl mr-6">
          <Bell size={18} />
        </div>

        <Link href={'/profile'} className="flex items-center bg-white p-2 px-3 rounded-xl">
          <img
            className="w-7 h-7 mr-2 rounded-full"
            // src={userInfo.picture}
            src={'/userIcon.webp'}
            alt="Аватарка"
          />

          <p>{userInfo.fullName}</p>
        </Link>
      </div>
    </div>
  );
};

export default DashboardHeader;
