// import styles from './OrganizationItem.module.scss';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Company } from "@/types/organization.interface";

interface IOrganizationItemProps {
  organization: Company;
}

// name: string;
//     phone: string;
//     email: string;
//     address: string;
//     info: string;
//     type: string;
//     INN: string;
//     KPP: string;
//     OGRN: string;
//     OKPO: string;
//     BIK: string;
//     corr_account: string;
//     employees: number;

const OrganizationItem: React.FC<IOrganizationItemProps> = ({
  organization,
}) => {
  const {
    name,
    phone,
    email,
    address,
    info,
    type,
    INN,
    KPP,
    OGRN,
    OKPO,
    BIK,
    corr_account,
    employees,
  } = organization;
  return (
    <div className="p-4 rounded-md border border-zinc-50 shadow">
      <Accordion type="single" collapsible>
        <AccordionItem className="border-none" value="item-1">
          <AccordionTrigger className="text-left">
            <h3 className="text-xl font-semibold">
              {name} &nbsp; (ИНН: {INN})
            </h3>
          </AccordionTrigger>
          <AccordionContent className="grid grid-cols-2 gap-x-4 gap-y-0.5 pb-0">
            <p>
              <strong>Телефон:</strong> {phone}
            </p>
            <p>
              <strong>Электронная почта:</strong> {email}
            </p>
            <p>
              <strong>Адрес:</strong> {address}
            </p>
            <p>
              <strong>Информация:</strong> {info}
            </p>
            <p>
              <strong>Тип:</strong> {type}
            </p>
            <p>
              <strong>ИНН:</strong> {INN}
            </p>
            <p>
              <strong>КПП:</strong> {KPP}
            </p>
            <p>
              <strong>ОГРН:</strong> {OGRN}
            </p>
            <p>
              <strong>ОКПО:</strong> {OKPO}
            </p>
            <p>
              <strong>БИК:</strong> {BIK}
            </p>
            <p>
              <strong>Корр. счет:</strong> {corr_account}
            </p>
            <p>
              <strong>Количество сотрудников:</strong> {employees}
            </p>

            <Button className="max-w-max bg-bg-fourth text-white px-3 py-2 mt-3">
                Редактировать
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default OrganizationItem;
