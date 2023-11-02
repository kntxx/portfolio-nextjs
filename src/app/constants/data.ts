interface NavLink {
  id: string;
  title: string;
}

export const navLinks: NavLink[] = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
interface MyDetails {
  id: 1;
  title: string;
  describe: string;
}
export const myDetails: MyDetails[] = [
  {
    id: 1,
    title: "Kent Gesoro",
    describe: "A passionate college student on a journey to become a",
  },
];

interface aboutDetails extends MyDetails {
  describe2: string;
}
export const aboutDetails = [
  {
    id: 2,
    title: "About Me",
    describe:
      "As a college student pursuing a Bachelor of Science degree in Information Technology, I have been actively expanding my skills in Front-End Development.",
    describe2:
      "My focus has been on mastering technologies such as HTML, CSS, Javascript, React, and Tailwind CSS to create engaging and dynamic user experiences.",
  },
];
