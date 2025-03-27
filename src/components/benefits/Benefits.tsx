import Benefit from "./Benefit";
import { Text } from "../ui/Text";
import { benefits } from "../../../data/data";
import Line from "../ui/Line";

const Benefits = () => {
  return (
    <aside className="px-4 pb-4">
      <div className="mb-4 flex items-center gap-4">
        <Line />
        <Text size="sm" position="center" color="darkest">
          Why Choose Logolpsum
        </Text>
        <Line />
      </div>

      <div className="flex flex-col gap-4">
        {benefits.map((benefit) => (
          <Benefit key={benefit.id} benefit={benefit} />
        ))}
      </div>
    </aside>
  );
};

export default Benefits;
