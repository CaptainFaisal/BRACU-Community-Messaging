import "./MiddleBox.css";
import BackgroundPic from "../LoginOrSignupBG/BackgroundPic";

interface Props {
  children?: React.ReactNode;
  classes?: string;
}

function MiddleBoxRaw({ children, classes }: Props) {
  return (
    <BackgroundPic>
      <div className={"center-box " + classes}>
        {children}
      </div>
    </BackgroundPic>
  );
}

export default MiddleBoxRaw;
