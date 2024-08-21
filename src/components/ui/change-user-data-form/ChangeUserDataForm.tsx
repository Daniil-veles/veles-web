// import styles from './ChangeUserDataForm.module.scss';

import { FormProvider } from "react-hook-form";
import FormField from "../form-field/FormField";
import { ChevronRight } from "lucide-react";
import { IFormField } from "@/types/form.interface";

interface IUpdatePersonInfoFormProps {
  title: string;
  methods: any;
  field: IFormField;
  buttonText: string;
  handleFormSave: (data: any) => void;
}

const UpdatePersonInfoForm: React.FC<IUpdatePersonInfoFormProps> = ({
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

          <button className="flex items-center justify-center bg-blue-500 text-white px-4 min-w-[140px] rounded hover:bg-blue-700">
            {buttonText}
            <ChevronRight size={20} className="ml-2" />
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default UpdatePersonInfoForm;
