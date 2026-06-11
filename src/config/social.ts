export type SocialChannel = {
  label: string;
  href: string;
};

export const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
  },
] satisfies SocialChannel[];
