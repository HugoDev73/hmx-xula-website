export type NavigationItem = {
  label: string;
  href: string;
};

export const navigationItems = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Productos",
    href: "/productos",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Acerca de",
    href: "/acerca-de",
  },
] satisfies NavigationItem[];
