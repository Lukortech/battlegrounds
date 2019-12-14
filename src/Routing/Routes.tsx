import { Home, About, Contact } from "../pages";

type RoutesProps = {
  path: string;
  componentName: string;
  component: React.FC;
}[];

export const Routes: RoutesProps = [
  {
    path: "/",
    componentName: "Home",
    component: Home,
  },
  {
    path: "/about",
    componentName: "About",
    component: About,
  },
  {
    path: "/contact",
    componentName: "Contact",
    component: Contact,
  },
];
