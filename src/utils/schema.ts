import { siteConfig } from "../config/site";
import { socialLinks } from "../config/social";

type ImageInput = string | undefined;

export const absoluteUrl = (path: string) => new URL(path, siteConfig.url).toString();

export const getAbsoluteImage = (image: ImageInput) => {
  if (!image) {
    return absoluteUrl("/images/brand/hero-bottles.png");
  }

  return image.startsWith("http") ? image : absoluteUrl(image);
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  logo: absoluteUrl("/images/brand/logo_blue.png"),
  image: absoluteUrl("/images/brand/hero-bottles.png"),
  description: siteConfig.description,
  sameAs: socialLinks
    .map((link) => link.href)
    .filter((href) => href !== "https://wa.me/"),
} satisfies Record<string, unknown>;
