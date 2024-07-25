// import styles from './OrganizationInfo.module.scss';

import { Button } from "@/components/ui/button";
import ChangerData from "@/components/ui/changer-data/ChangerData";
import CreateOrganizationForm from "@/components/ui/create-organization-form/CreateOrganizationForm";
import { companyInfoFields } from "@/const/const";
import { organizationService } from "@/services/organisation.service";
import { useEffect, useState } from "react";

const OrganizationInfo: React.FC = () => {
  const [organizationInfo, setOrganizationInfo] = useState(null);
  const isSetOrganization = true;

  useEffect(() => {
    async function getOrganizationInfo(id: number) {
      const response = await organizationService.getInfo(id);

      setOrganizationInfo(response);
    }

    getOrganizationInfo(1);
  }, []);

  return (
    <div className="">
      {isSetOrganization ? (
        <div className="mb-6 bg-bg-first p-6 rounded-md">
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

          <Button className="bg-bg-fourth text-c-first">Редактировать</Button>
        </div>
      ) : (
        <CreateOrganizationForm />
      )}
    </div>
  );
};

export default OrganizationInfo;
