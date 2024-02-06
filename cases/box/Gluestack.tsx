import { COUNT } from "../../utils";
import { GSBox } from "@tim-hortons-ventures/th-design-system";

const GluestackComponent = () => {
  return (
    <>
      {new Array(COUNT).fill(0).map((_, i) => (
        <GSBox p="$2" m="$1" backgroundColor="$interface_warmYellow_900" key={i.toString()} />
      ))}
    </>
  );
};

export default GluestackComponent;
