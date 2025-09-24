export type LinkType = {
  id: number;
  title: string;
  href: string;
};

export type ImageType = {
  id: number;
  documentId: string;
  name: string;
  url: string;
  alternativeText: string;
};

export type LogoType = {
  id: number;
  alternativeText: string;
  image: ImageType;
};