import {CSSProperties, useState} from "react";
import {BeatLoader} from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "2em auto",
  borderColor: "red",
};
type Props = {
  color?: string;
  isLoading: boolean;
}
export const SpinnerUi = (props: Props) => {
  const {isLoading}  = props;
  let [color, setColor] = useState("#FF7101");
  return (
    <BeatLoader color={color}
                loading={isLoading}
                cssOverride={override}
                size={8}
                speedMultiplier={0.8}
                aria-label="Loading Spinner"
                data-testid="loader" />
  )
}