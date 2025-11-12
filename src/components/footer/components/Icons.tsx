

import { socialMediaLinks } from "../../../constants/socialMediaLinks";
import { useIcons } from "../../../hooks/useIcons";
import Icon from "../../../utils/icon/Icon";

const Icons = () => {
  const { LINKEDIN, INSTAGRAM, SNAPCHAT, TIKTOK } = socialMediaLinks();
  const { LinkedIn, Instagram, Twitter, Facebook } = useIcons();

  return (
    <div
      className="d-flex gap-5"
    >
      <Icon
        Icon={LinkedIn}
        link={LINKEDIN}
      />
      <Icon
        Icon={Instagram}
        link={INSTAGRAM}
      />
      <Icon
        Icon={Facebook}
        link={SNAPCHAT}
      />
      <Icon
        Icon={Twitter}
        link={TIKTOK}
      />
    </div>
  )
}

export default Icons