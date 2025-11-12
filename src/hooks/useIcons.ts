import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import { FaLinkedinIn, FaInstagram, FaTiktok, FaChevronRight, FaChevronLeft, FaFacebook, FaTwitter } from "react-icons/fa";

import { BsSnapchat } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import modalCloseIcon from "../assets/icons/modal-close-icon.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";



































export const useIcons = () => {
  return {
    leftArrow: BiLeftArrowAlt,
    rightArrow: BiRightArrowAlt,
    LinkedIn: FaLinkedinIn,
    Instagram: FaInstagram,
    Tiktok: FaTiktok,
    Snapchat: BsSnapchat,
    RightNav: FaChevronRight,
    LeftNav: FaChevronLeft,
    Facebook: FaFacebook,
    Twitter: FaTwitter,
    Youtube: AiFillYoutube,
    
    EyeSlashIcon: AiOutlineEyeInvisible,
    EyeIcon: AiOutlineEye,modalCloseIcon
  };
};
