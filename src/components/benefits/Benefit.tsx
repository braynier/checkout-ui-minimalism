import { ElementType } from "react";
import { Text } from "../ui/Text";

interface BenefitProps {
  benefit: {
    title: string;
    description: string;
    icon: ElementType;
  };
}

const Benefit = ({ benefit }: BenefitProps) => {
  const { title, description, icon: Icon } = benefit;

  return (
    <div className="flex gap-4">
      <div>
        <Icon />
      </div>

      <div className="flex flex-col gap-2">
        <Text size="xs" color="darkest" bold>
          {title}
        </Text>
        <Text size="xs" color="dark">
          {description}
        </Text>
      </div>
    </div>
  );
};

export default Benefit;
