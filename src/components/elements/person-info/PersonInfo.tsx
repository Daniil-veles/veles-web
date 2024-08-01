// import styles from './OrganizationInfo.module.scss';

import { ChevronLeft, PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/hooks";
import { UserServerData } from "@/types/user.interface";
import { UserService } from "@/services/user.service";
import { adaptToUserData } from "@/utils/utils";
import { setUserInfo } from "@/store/slices/userSlice";

const PersonInfo: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const response: UserServerData = await UserService.getUserInfo();
        const userInfo = adaptToUserData(response);
        console.log(userInfo);

        // Обновляет данные пользователя в сторе
        dispatch(setUserInfo(userInfo));
      } catch (error) {
        console.error("Error fetching user info:", error.message);
      } 
    }

    fetchUserInfo();
  }, [dispatch]);

  return (
    <>
      <h2 className="flex items-center text-xl mb-4 ">
        Ваша информация


        {/* <button onClick={() => setIsModalOpen(true)} className="ml-2">
          <PlusCircle />
        </button> */}
      </h2>
    </>
  );
};

export default PersonInfo;
