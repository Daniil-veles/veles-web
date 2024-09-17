import ScreenTitle from "@/components/ui/dashboard-title/ScreenTitle";
import TariffTime from "@/components/ui/tariff-time/TariffTime";
import TariffList from "../tariff-list/TariffList";

const TariffInfo: React.FC = () => {
  return (
    <div className="">
      <ScreenTitle className="text-3xl text-center mb-8" title="Тарифные планы" />

      <div>
        <TariffTime />

        <TariffList />
      </div>
    </div>
  );
};

export default TariffInfo;
