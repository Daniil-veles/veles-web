// import styles from './OrganizationInfo.module.scss';

import { Button } from "@/components/ui/button";
import ChangerData from "@/components/ui/changer-data/ChangerData";
import CreateOrganizationForm from "@/components/ui/create-organization-form/CreateOrganizationForm";
import { companyInfoFields, exampleOrgData } from "@/const/const";
import { OrganizationService } from "@/services/organisation.service";
import { ChevronLeft, PlusCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import OrganizationList from "../organization-list/OrganizationList";
import Modal from "@/components/ui/modal/Modal";

const OrganizationInfo: React.FC = () => {
  // Состояния для модальных окон
  const [modalState, setModalState] = useState({
    isOpen: false,
  });

  const [organizationInfo, setOrganizationInfo] = useState(null);
  const isSetOrganization = true;

  // useEffect(() => {
  //   async function getOrganizationInfo(id: number) {
  // try {
  //       const response = await OrganizationService.getInfo(id);
  // } catch (error) {
  //   console.error("Failed to create organization:", error.response);
  // }
  //     setOrganizationInfo(response);
  //   }

  //   getOrganizationInfo(1);
  // }, []);

  // console.log(modalState);

  const closeModal = () => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <div>
      <div className="flex justify-between items-bottom mb-6">
        <h2 className="flex text-xl items-end">Ваши организации:</h2>

        <Button
          className="max-w-max bg-blue-500 text-white px-3 py-2 hover:bg-blue-800"
          onClick={() => setModalState({ ...modalState, isOpen: true })}
        >
          Добавить организацию
          <PlusCircle className="ml-2" />
        </Button>
      </div>

      <OrganizationList organizationList={exampleOrgData} />

      {modalState.isOpen ? (
        <Modal className="" onClose={closeModal}>
          <CreateOrganizationForm />
        </Modal>
      ) : null}
    </div>
  );
};

export default OrganizationInfo;
