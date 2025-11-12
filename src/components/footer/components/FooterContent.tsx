
import { useExport } from "../../../hooks/useExport";
import { useDate } from "../../../hooks/useDate";
import Icons from "./Icons";


export default function FooterContent() {
  const { logoPms } = useExport()
  const {
    year
  } = useDate();

  return (
    <div>
      <div
        className="line-div mx-auto"
      >
        <div className="line" />
      </div>
      <div
        className="content-div">
        <img src={logoPms} alt="era-pms-logo" />
        <p
          className="footer-text"
        >
          Copyright © ERAPMS, {year}
        </p>
        <Icons />
      </div>

      <p
        className="footer-text credit text-center"
      >
        Built with ❤ by <a className="link" href="https://bacfinc.com" target="_blank" rel="noreferrer nofollow noopener">BACF, Inc.</a>
      </p>
    </div>
  );
}
