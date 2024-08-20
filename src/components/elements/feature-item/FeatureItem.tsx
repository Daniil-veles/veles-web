interface Feature {
  id: number;
  img: string;
  title: string;
  description: string;
}

interface FeatureItemProps {
  feature: Feature;
}

const FeaturesItem: React.FC<FeatureItemProps> = ({ feature }) => {
  return (
    <li className="rounded-lg p-6 border border-gray-200 shadow-sm bg-gray-200/10 animate-duration-300">
      <img className="mb-4 w-12 h-12 rounded-full" src="" alt="" />

      <h3 className="mb-1 text-lg font-medium">{feature.title}</h3>

      <p className="text-base text-gray-700">{feature.description}</p>
    </li>
  );
};

export default FeaturesItem;
