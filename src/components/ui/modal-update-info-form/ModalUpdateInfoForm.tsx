import { FormProvider } from "react-hook-form";
// import FormField from "../form-field/FormField";
import { ChevronRight } from "lucide-react";
import { IFormField } from "@/types/form.interface";
import ButtonLittle from "../custom-button/button-little/ButtonLittle";

interface IUpdatePersonInfoFormProps {
  title: string;
  methods: any;
  field: IFormField;
  buttonText: string;
  handleFormSave: (data: any) => void;
}

const ModalUpdateInfoForm: React.FC<IUpdatePersonInfoFormProps> = ({
  title,
  methods,
  field,
  buttonText,
  handleFormSave,
}) => {
  return (
    <div className="">
      <h3 className="mb-6 text-2xl font-semibold">{title}</h3>

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleFormSave)}
          className="flex justify-between"
        >
          <FormField value={field} />

          <ButtonLittle>
            {buttonText}
            <ChevronRight size={20} className="ml-2" />
          </ButtonLittle>
        </form>
      </FormProvider>
    </div>
  );
};

export default ModalUpdateInfoForm;
