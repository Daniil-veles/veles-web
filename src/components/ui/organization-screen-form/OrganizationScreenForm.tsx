import { Controller, useForm } from "react-hook-form";
import CustomInput from "../custom-input/CustomInput";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect, useState } from "react";
import { UserService } from "@/services/user.service";
import { adaptToUserData } from "@/utils/utils";
import { setUserInfo } from "@/store/slices/userSlice";
import ProfileScreenNavigation from "../profile-screen-navigation/ProfileScreenNavigation";
import { Save, SquarePen } from "lucide-react";

const formFields = [
  { key: "name", label: "Имя организации" },
  { key: "phone", label: "Телефон" },
  { key: "email", label: "Email" },
  { key: "address", label: "Физический адрес организации" },
  { key: "location", label: "Местоположение организации" },
  { key: "info", label: "Общая информация об организации" },
  { key: "name_legal", label: "Юридическое имя организации" },
  { key: "INN", label: "ИНН" },
  { key: "KPP", label: "КПП" },
  { key: "OGRN", label: "ОГРН" },
  { key: "OKPO", label: "ОКПО" },
  { key: "BIK", label: "БИК" },
  { key: "bank_name", label: "Название банка" },
  { key: "bank_address", label: "Адрес банка" },
  { key: "corr_account", label: "Корреспондентский счёт" },
  // { key: "employees", label: "Сотрудники" },
];

interface IOrganizationFormData {
  fullName: string;
  birthDate: string;
  email: string;
  phone: string;
}

const OrganizationScreenForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isEditable, setIsEditable] = useState(false);
  const organizationInfo = useAppSelector((state) => state.ORGANIZATION);

  const formDefaultValues = {
    name: "", // Имя организации
    phone: "", // Телефон (возможно форматировать через маску)
    email: "", // Email
    address: "", // Физический адрес организации
    location: "", // Местоположение организации
    info: "", // Общая информация об организации
    name_legal: "", // Юридическое имя организации
    INN: "", // ИНН
    KPP: "", // КПП
    OGRN: "", // ОГРН
    OKPO: "", // ОКПО
    BIK: "", // БИК
    bank_name: "", // Название банка
    bank_address: "", // Адрес банка
    corr_account: "", // Корреспондентский счёт
    // employees: [],
  };

  const { control, handleSubmit, reset } = useForm({
    defaultValues: formDefaultValues,
    mode: "onChange",
  });

  useEffect(() => {
    if (organizationInfo) {
      console.log("organizationInfo:", organizationInfo);

      reset({
        name: organizationInfo.name, // Имя организации
        phone: organizationInfo.phone, // Телефон (возможно форматировать через маску)
        email: organizationInfo.email, // Email
        address: organizationInfo.address, // Физический адрес организации
        location: organizationInfo.location, // Местоположение организации
        info: organizationInfo.info, // Общая информация об организации
        name_legal: organizationInfo.name_legal, // Юридическое имя организации
        INN: organizationInfo.INN, // ИНН
        KPP: organizationInfo.KPP, // КПП
        OGRN: organizationInfo.OGRN, // ОГРН
        OKPO: organizationInfo.OKPO, // ОКПО
        BIK: organizationInfo.BIK, // БИК
        bank_name: organizationInfo.bank_name, // Название банка
        bank_address: organizationInfo.bank_address, // Адрес банка
        corr_account: organizationInfo.corr_account, // Корреспондентский счёт
        employees: organizationInfo.employees,
      });
    }
  }, [organizationInfo, reset]);

  async function onSubmit(data: IOrganizationFormData) {
    try {
      setIsEditable((prev) => !prev);

      if (isEditable) {
        console.log(data);
      }
    } catch (error) {
      console.error("Failed to update user info:", error.response);
    }
  }

  return (
    <form
      className="flex flex-col grow w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grow flex flex-col bg-white rounded-3xl">
        <div className="border-b border-c-gray-500 pt-4 px-6 pb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg">{organizationInfo.name}</h2>

            <div className="w-10 h-10 flex justify-center items-center bg-c-blue-300 rounded-xl">
              <button type="submit">
                {isEditable ? <Save size={18} /> : <SquarePen size={18} />}
              </button>
            </div>
          </div>

          <p>{organizationInfo.address}</p>
        </div>

        <div className="flex flex-col justify-between grow pt-4 px-6 pb-8">
          <div>
            <h3 className="mb-3 text-lg">Общая информация</h3>

            <ul className="grid grid-cols-3 gap-4">
              {formFields
                ? formFields.map((item) => (
                    <li key={item.key}>
                      <Controller
                        name={item.key}
                        control={control}
                        render={({ field, fieldState }) => (
                          <CustomInput
                            className=""
                            fieldData={{
                              id: item.key,
                              name: item.key,
                              label: item.label,
                              placeholder: "",
                              type: "text",
                            }}
                            fieldValue={field.value || ''}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            error={fieldState.error}
                            required
                            disabled={!isEditable}
                          />
                        )}
                      />
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
    </form>
  );
};

export default OrganizationScreenForm;
