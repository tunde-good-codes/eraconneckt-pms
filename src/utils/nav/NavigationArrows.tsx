import { useNavigate } from "react-router";
import { useIcons } from "../../hooks/useIcons";
import { Colors } from "../colors/colors";
import P from "../p/P";



type IProps = {
  navText: string;
  link?: string;
};


const { primaryColor } = Colors();


export const BackNav = ({ navText }: IProps) => {


  const {
    LeftNav
  } = useIcons();
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(-1)}
      className="read-more" style={{ marginTop: "20px" }}>
      <LeftNav
        className="fw-bold fs-5 right-nav"
      />
      <P
        isAnimatable={true}
        style={{
          marginBottom: "0",
          cursor: "pointer",
        }}
        textColor={primaryColor}
        text={navText}
      />
    </div>
  );
};



export const ProceedNav = ({ navText, link }: IProps) => {

  const navigate = useNavigate();


  const {
    RightNav
  } = useIcons();

  return (
    <div
      onClick={() => navigate(link as string) as any}
      className="read-more" style={{ marginTop: "20px" }}>
      <P
        isAnimatable={true}
        style={{
          marginBottom: "0",
          cursor: "pointer",
        }}
        textColor={primaryColor}
        text={navText}
      />

      <RightNav
        className="fw-bold fs-5 right-nav"
      />
    </div>
  );
};