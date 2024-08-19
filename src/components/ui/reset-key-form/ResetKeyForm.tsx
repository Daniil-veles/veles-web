import { Button } from "@/components/ui/button";
import FormField from "@/components/ui/form-field/FormField";
import { ComponentFormEnum } from "@/types/types.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

// Схема валидации для ввода кода
const resetKeySchema = z.object({
  key: z.string().length(6, { message: "Код должен быть 6 символов." }),
});

const ResetKeyForm: React.FC<{ onSubmit: (data: { key: string }) => void }> = ({
  onSubmit,
}) => {
  const methods = useForm({
    mode: "onChange",
    resolver: zodResolver(resetKeySchema),
    defaultValues: { key: "" },
  });

  return (
    <FormProvider {...methods}>
      <form className="mb-2" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <FormField
            value={{
              id: "key",
              name: "key",
              label: "Код",
              placeholder: "Введите код",
              type: "text",
              componentType: ComponentFormEnum.INPUT,
              required: true,
            }}
          />
          <Button
            type="submit"
            className="w-full h-min text-base py-4 bg-blue-500 text-white rounded-full font-normal mt-3"
          >
            Отправить
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ResetKeyForm;
