import { INDEX, ADMIN,  ABOUT, HOME, TESTIMONIAL, SCREENSHOT, PRICING, FEATURE, FAQ, CONTACT } from "../../../routes/paths.routes";
import authService from "../../../services/auth.services";
//import authService from "../../../services/auth.services";
import { INavLink } from "../../../types/general.types";


const isAuthenticated = authService.isAuthenticated();
const isSuperAdmin = authService.isSuperAdmin();






//export const navLinks = isAuthenticated && isSuperAdmin ? superAdminLink : isAuthenticated ? authenticatedNavLinks : unAuthenticatedNavLinks;







// const isAuthenticated = authService.isAuthenticated();
// const isSuperAdmin = authService.isSuperAdmin();


export const unAuthenticatedNavLinks :INavLink = [
  {
    id: 1,
    path: HOME,
    name: "Home",
  },
  {
    id: 2,
    path: FEATURE,
    name: "Features",
  },
  {
    id: 3,
    path: ABOUT,
    name: "About us",
  },
  {
    id: 4,
    path: PRICING,
    name: "Pricing",
  }, {
    id: 5,
    path: SCREENSHOT,
    name: "Screenshots",
  },
  {
    id: 6,
    path: TESTIMONIAL,
    name: "Testimonial",
  },
  {
    id: 7,
    path: FAQ,
    name: "Faq",
  },
  {
    id: 8,
    path: CONTACT,
    name: "Contact",
  },
 
];

const authenticatedNavLinks = [
  {
    id: 1,
    path: ADMIN,
    name: "Blogs",
  },
  {
    id: 2,
    path: ADMIN,
    name: "Events",
  },
  {
    id: 3,
    path: ADMIN,
    name: "Write Blog",
  },
  isSuperAdmin &&
  {
    id: 4,
    path: ADMIN,
    name: "Create Admin",
  },
];

//export const navLinks = isAuthenticated ? authenticatedNavLinks : unAuthenticatedNavLinks;
