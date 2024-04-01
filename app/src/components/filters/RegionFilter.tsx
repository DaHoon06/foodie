import { HorizontalNavBar } from "@components/nav/HorizontalBar";
import { regionDo } from "./state/region";

interface RegionFilterProps {
  filter: (region: string) => void;
}
export const RegionFilter = ({ filter }: RegionFilterProps) => {
  const currentRegion = (value: string) => {
    filter(value);
  };

  return <HorizontalNavBar onClickHandle={currentRegion} lists={regionDo} />;
};
