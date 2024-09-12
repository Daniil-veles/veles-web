import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import ButtonForm from "../custom-button/button-form/ButtonForm";
import CustomInput from "../custom-input/CustomInput";
import {
  formDefaultValues,
  ResetKeyFormDataType,
  resetKeySchema,
} from "./utils";

const ResetKeyForm: React.FC<{ onSubmit: (data: { key: string }) => void }> = ({
  onSubmit,
}) => {
  const { control, handleSubmit, reset } = useForm<ResetKeyFormDataType>({
    defaultValues: formDefaultValues,
    resolver: zodResolver(resetKeySchema),
    mode: "onChange",
  });

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="key"
        control={control}
        render={({ field, fieldState }) => (
          <CustomInput
            className=""
            fieldData={{
              id: "key",
              name: "key",
              label: "Код",
              placeholder: "Введите код",
              type: "text",
            }}
            fieldValue={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            error={fieldState.error}
            required
          />
        )}
      />

      <div className="flex justify-center">
        <ButtonForm className="w-full h-min mt-6">Отправить</ButtonForm>
      </div>
    </form>
  );
};

export default ResetKeyForm;
