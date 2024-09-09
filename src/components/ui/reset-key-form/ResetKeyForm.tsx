import { Button } from "@/components/ui/button";
import FormField from "@/components/ui/form-field/FormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import ButtonForm from "../custom-button/button-form/ButtonForm";
import { ComponentFormEnum } from "@/types/form.interface";

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
      <form className="" onSubmit={methods.handleSubmit(onSubmit)}>
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

        <div className="flex justify-center">
          <ButtonForm className="w-full h-min mt-6">Отправить</ButtonForm>
        </div>
      </form>
    </FormProvider>
  );
};

export default ResetKeyForm;
