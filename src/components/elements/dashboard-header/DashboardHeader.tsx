import FormField from "@/components/ui/form-field/FormField";
import { ComponentFormEnum } from "@/types/form.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { Bell } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

// Определяем схему валидации с помощью Zod
const dashboardSchema = z.object({
  search: z.string().min(2, { message: "Минимальное кол-во символов 2." }),
});

const DashboardHeader: React.FC = () => {
  const methods = useForm({
    mode: "onChange",
    resolver: zodResolver(dashboardSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data) {
    console.log("Отправил:", data);
  }

  return (
    <div className="flex items-center justify-between mb-5">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FormField
            value={{
              id: "search",
              name: "search",
              placeholder: "...",
              type: "text",
              componentType: ComponentFormEnum.INPUT,
            }}
          />
        </form>
      </FormProvider>

      <div className="flex items-center">
        <div className="bg-white w-12 h-12 flex items-center justify-center rounded-xl mr-6">
          <Bell />
        </div>
        <p>Аккаунт</p>
      </div>
    </div>
  );
};

export default DashboardHeader;
