// import styles from './OrganizationInfo.module.scss';

import { Button } from "@/components/ui/button";
import ChangerData from "@/components/ui/changer-data/ChangerData";
import CreateOrganizationForm from "@/components/ui/create-organization-form/CreateOrganizationForm";
import { companyInfoFields, exampleOrgData } from "@/const/const";
import { organizationService } from "@/services/organisation.service";
import { ChevronLeft, PlusCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import OrganizationList from "../organization-list/OrganizationList";

const OrganizationInfo: React.FC = () => {
  const [organizationInfo, setOrganizationInfo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isSetOrganization = true;

  // useEffect(() => {
  //   async function getOrganizationInfo(id: number) {
  //     const response = await organizationService.getInfo(id);
  //     setOrganizationInfo(response);
  //   }

  //   getOrganizationInfo(1);
  // }, []);

  return (
    <>
      <h2 className="flex items-center text-xl mb-4 ">
        Ваши организации
        <button onClick={() => setIsModalOpen(true)} className="ml-2">
          <PlusCircle />
        </button>
      </h2>

      <OrganizationList organizationList={exampleOrgData} />

      {/* {isSetOrganization ? (
        <div className="mb-6 bg-blue-50 p-6 rounded-md">
        <Link className="flex items-center mb-2" href={"/"}>
        <ChevronLeft className="mr-1" size={20} />
        Вернуться назад
      </Link>

          <h2 className="text-xl mb-3">Информация о компании</h2>

          <div className="mb-5">
            {companyInfoFields && organizationInfo
              ? companyInfoFields.map((item) => (
                  <div key={item.field} className="grid grid-cols-2 gap-5 items-center h-8 mb-1">
                    <p className="font-medium">{item.field}</p>

                    <ChangerData value={organizationInfo[item.value]} />
                  </div>
                ))
              : "Организация не найдена"}
          </div>

          <Button className="bg-blue-500 text-white">Редактировать</Button>
        </div>
      ) : (
        <CreateOrganizationForm />
      )} */}

      {isModalOpen ? (
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-black/40">
          <div className="w-2/3  bg-blue-50 bg-blue-50 shadow rounded p-6 z-10">
          <CreateOrganizationForm />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default OrganizationInfo;
