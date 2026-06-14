export type SeoProps = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
};
