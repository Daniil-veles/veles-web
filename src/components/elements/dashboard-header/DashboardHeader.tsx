import CustomInput from "@/components/ui/custom-input/CustomInput";
import { useAppSelector } from "@/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { Bell } from "lucide-react";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

// Определяем схему валидации с помощью Zod
const dashboardSchema = z.object({
  search: z.string(),
});

export const formDefaultValues = {
  search: "",
};

const DashboardHeader: React.FC = () => {
  const userInfo = useAppSelector((state) => state.USER);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: formDefaultValues,
    resolver: zodResolver(dashboardSchema),
    mode: "onChange",
  });

  async function onSubmit(data) {
    console.log("Отправил:", data);

    reset();
  }

  return (
    <div className="flex items-center justify-between">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="search"
          control={control}
          render={({ field, fieldState }) => (
            <CustomInput
              className=""
              fieldData={{
                id: "search",
                name: "search",
                // label: "Пароль",
                placeholder: "Поиск ...",
                type: "search",
              }}
              fieldValue={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={fieldState.error}
              required
            />
          )}
        />
      </form>

      <div className="flex items-center">
        <div className="bg-white w-10 h-10 flex items-center justify-center rounded-xl mr-6">
          <Bell size={18} />
        </div>

        <Link
          href={"/profile"}
          className="flex items-center bg-white p-2 px-3 rounded-xl"
        >
          <img
            className="w-7 h-7 mr-2 rounded-full"
            // src={userInfo.picture}
            src={"/userIcon.webp"}
            alt="Аватарка"
          />

          <p>{userInfo.fullName}</p>
        </Link>
      </div>
    </div>
  );
};

export default DashboardHeader;
