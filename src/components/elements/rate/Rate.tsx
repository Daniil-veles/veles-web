import RateList from "@/components/elements/rate-list/RateList";
import Container from "@/components/container/Container";

const Rate: React.FC = () => {
  return (
    <div className="bg-blue-50">
      <Container className="py-20 px-24">
        <h2 className="text-center mb-4 text-2xl font-bold">Features</h2>

        <p className="text-center mb-10 px-20 text-gray-700">
          This starter template is a guide to help you get started with Next.js
          for large scale applications. Feel free to add or remove features to
          suit your needs.
        </p>

        <RateList />
      </Container>
    </div>
  );
};

export default Rate;
