import Container from "@/components/container/Container";
import FeatureList from "@/components/elements/feature-list/FeaturesList";

const Features: React.FC = () => {
  return (
    <div>
      <Container className="py-20 px-30">
        <h2 className="text-center mb-4">Features</h2>

        <p className="px-20 text-center mb-10">
          This starter template is a guide to help you get started with Next.js
          for large scale applications. Feel free to add or remove features to
          suit your needs.
        </p>

        <FeatureList />
      </Container>
    </div>
  );
};

export default Features;
