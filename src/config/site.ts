export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  language: string;
  legalName: string;
  brandPhrase: string;
  responsibleNotice: string;
};

export const siteConfig = {
  name: "XULA",
  title: "XULA Mezcal Artesanal",
  description:
    "XULA es un mezcal artesanal joven de agave Cupeatra, con identidad mística y elegante inspirada en Michoacán.",
  url: "https://xulamezcal.com",
  language: "es-MX",
  legalName: "XULA Mezcal Artesanal",
  brandPhrase: "Mezcal artesanal con carácter místico.",
  responsibleNotice:
    "El abuso en el consumo de este producto es nocivo para la salud. Beber con moderación.",
} satisfies SiteConfig;
