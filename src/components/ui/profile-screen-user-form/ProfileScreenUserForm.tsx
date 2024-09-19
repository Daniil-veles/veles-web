import { Controller, useForm } from "react-hook-form";
import CustomInput from "../custom-input/CustomInput";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect, useState } from "react";
import { UserService } from "@/services/user.service";
import { adaptToUserData } from "@/utils/utils";
import { setUserInfo } from "@/store/slices/userSlice";
import ProfileScreenNavigation from "../profile-screen-navigation/ProfileScreenNavigation";
import { Save, SquarePen } from "lucide-react";

interface IProfileFormData {
  fullName: string;
  birthDate: string;
  email: string;
  phone: string;
}

const ProfileScreenUserForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isCommonInfo, setIsCommonInfo] = useState(true);
  const [isEditable, setIsEditable] = useState(false);
  const userInfo = useAppSelector((state) => state.USER);

  const formDefaultValues = {
    fullName: "",
    birthDate: "",
    email: "",
    phone: "",
  };

  const { control, handleSubmit, reset } = useForm({
    defaultValues: formDefaultValues,
    // resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  useEffect(() => {
    if (userInfo) {
      // console.log("userInfo:", userInfo);
      reset({
        fullName: userInfo.fullName,
        birthDate: userInfo.birthDate,
        email: userInfo.email,
        phone: userInfo.phone,
      });
    }
  }, [userInfo, reset]);

  async function onSubmit(data: IProfileFormData) {
    try {
      setIsEditable((prev) => !prev);

      // fullName: "Даниил Суворов", birthDate: "2000-10-21", email: "test-daniil@mail.ru", phone: "79807057002"

      if (isEditable) {
        console.log(data);

        const { fullName, birthDate, ...rest } = data;

        const newData = {
          password: "123456A@",
          is_active: true,
          is_superuser: true,
          is_verified: true,
          picture: "",
          birth_date: data.birthDate,
          username: data.fullName,
          ...rest,
        };

        const user = await UserService.updateUserInfo(newData);
        const adaptedData = adaptToUserData(user);
        console.log(adaptedData);

        dispatch(setUserInfo(adaptedData));
      }
    } catch (error) {
      console.error("Failed to update user info:", error.response);
    }
  }

  return (
    <form
      className="flex flex-col w-[265px] flex-shrink-0"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grow flex flex-col bg-white rounded-3xl">
        <div className="border-b border-c-gray-500 pt-4 px-6 pb-4">
          <div className="flex justify-between items-start mb-4">
            <div className="w-[72px] h-[72px] p-1 border-2 border-c-blue-500 rounded-full">
              <img
                className="w-full h-full rounded-full"
                src={"/user-3.webp"}
                alt="Аватарка"
              />
            </div>

            <div className="w-10 h-10 flex justify-center items-center bg-c-blue-300 rounded-xl">
              <button type="submit">
                {isEditable ? <Save size={18} /> : <SquarePen size={18} />}
              </button>
            </div>
          </div>

          <h2 className="mb-1 text-lg">{userInfo.fullName}</h2>

          {/* <p>{userInfo.fullName}</p> */}
          <p>Должность</p>
        </div>

        <div className="flex flex-col justify-between grow pt-4 px-6 pb-8">
          {isCommonInfo ? (
            <div>
              <h3 className="mb-3 text-lg">Общая информация</h3>

              <ul className="">
                <li key="fullName" className="mb-2">
                  <Controller
                    name="fullName"
                    control={control}
                    render={({ field, fieldState }) => (
                      <CustomInput
                        className=""
                        fieldData={{
                          id: "fullName",
                          name: "fullName",
                          label: "Полное имя",
                          placeholder: "Павел Петров",
                          type: "text",
                        }}
                        fieldValue={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        error={fieldState.error}
                        required
                        disabled={!isEditable}
                      />
                    )}
                  />
                </li>

                <li key="birthDate">
                  <Controller
                    name="birthDate"
                    control={control}
                    render={({ field, fieldState }) => (
                      <CustomInput
                        className=""
                        fieldData={{
                          id: "birthDate",
                          name: "birthDate",
                          label: "Дата рождения",
                          placeholder: "21.10.1990",
                          type: "date",
                        }}
                        fieldValue={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        error={fieldState.error}
                        required
                        disabled={!isEditable}
                      />
                    )}
                  />
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <h3 className="mb-3 text-lg">Контакты</h3>

              <ul>
                <li key="email" className="mb-2">
                  <Controller
                    name="email"
                    control={control}
                    render={({ field, fieldState }) => (
                      <CustomInput
                        className=""
                        fieldData={{
                          id: "email",
                          name: "email",
                          label: "Почта",
                          placeholder: "m@example.com",
                          type: "email",
                        }}
                        fieldValue={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        error={fieldState.error}
                        required
                        disabled={!isEditable}
                      />
                    )}
                  />
                </li>

                <li key="phone">
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field, fieldState }) => (
                      <CustomInput
                        className=""
                        fieldData={{
                          id: "phone",
                          name: "phone",
                          label: "Телефон",
                          placeholder: "+7 (123) 456 78 90",
                          type: "tel",
                        }}
                        fieldValue={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        error={fieldState.error}
                        required
                        disabled={!isEditable}
                      />
                    )}
                  />
                </li>
              </ul>
            </div>
          )}

          <ProfileScreenNavigation
            isCommonInfo={isCommonInfo}
            cb={(state) => setIsCommonInfo(state)}
          />
        </div>
      </div>
    </form>
  );
};

export default ProfileScreenUserForm;
