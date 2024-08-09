// import styles from './OrganizationItem.module.scss';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Company } from "@/types/organization.interface";
import Link from "next/link";

interface IOrganizationItemProps {
  organization: Company;
  index: number;
  openIndex: number;
  value: string;
}

const OrganizationItem: React.FC<IOrganizationItemProps> = ({
  organization,
  index,
  openIndex,
  value,
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
    <Accordion
      type="single"
      collapsible
      defaultValue={index === openIndex ? value : ""}
    >
      <AccordionItem
        className="p-4 rounded-md border-2 border-zinc-50 shadow data-[state=open]:border-blue-500 hover:shadow-lg transition-all duration-200"
        value={value}
      >
        <AccordionTrigger className="text-left py-3 data-[state=open]:text-blue-500 hover:text-blue-800 data-[state=open]:hover:text-blue-800">
          <Link href={`/organization/${index}`}>
            <h3 className="text-xl font-semibold">
              {name} &nbsp;(ИНН: {INN})
            </h3>
          </Link>
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

          {/* <Button className="max-w-max bg-blue-500 text-white px-3 py-2 mt-3">
            Редактировать
          </Button> */}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default OrganizationItem;
