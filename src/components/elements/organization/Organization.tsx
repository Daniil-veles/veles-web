// import styles from './OrganizationInfo.module.scss';

import { Button } from "@/components/ui/button";
import ChangerData from "@/components/ui/changer-data/ChangerData";
import CreateOrganizationForm from "@/components/ui/create-organization-form/CreateOrganizationForm";
import { companyInfoFields, exampleOrgData } from "@/const/const";
import { OrganizationService } from "@/services/organisation.service";
import { ChevronLeft, PlusCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "@/components/ui/modal/Modal";
import ButtonLittle from "@/components/ui/custom-button/button-little/ButtonLittle";
import OrganizationInfo from "../organization-info/OrganizationInfo";
import ScreenTitle from "@/components/ui/screen-title/ScreenTitle";

const Organization: React.FC = () => {
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
      <div className="flex justify-between items-center mb-6">
        <ScreenTitle title="Ваша организация" />

        <ButtonLittle
          onClick={() => setModalState({ ...modalState, isOpen: true })}
        >
          Добавить организацию
          <PlusCircle className="ml-2" />
        </ButtonLittle>
      </div>

      <OrganizationInfo organization={exampleOrgData} />

      {modalState.isOpen ? (
        <Modal className="" onClose={closeModal}>
          <CreateOrganizationForm />
        </Modal>
      ) : null}
    </div>
  );
};

export default Organization;
