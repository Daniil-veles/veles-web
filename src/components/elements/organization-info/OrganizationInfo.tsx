// import styles from './OrganizationInfo.module.scss';

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
      // console.log(response);

      setOrganizationInfo(response);
    }

    getOrganizationInfo(1);
  }, []);

  console.log(organizationInfo);

  return (
    <div className="">
      {isSetOrganization ? (
        <div className="mb-6 bg-bg-first p-6 rounded-md">
          <h2 className="text-xl mb-3">Информация о компании</h2>

          <div>
            {companyInfoFields
              ? companyInfoFields.map((item) => (
                  <div key={item.field} className="grid grid-cols-2 gap-5">
                    <p className="font-medium">{item.field}</p>

                    <p>{organizationInfo[item.value]}</p>
                  </div>
                ))
              : ""}
          </div>
        </div>
      ) : (
        <CreateOrganizationForm />
      )}
    </div>
  );
};

export default OrganizationInfo;
