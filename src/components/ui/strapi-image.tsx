import { getStrapiMedia } from "@/utils/get-strapi-media";
import Image, { ImageProps } from "next/image";

type StrapiImageProps = Omit<ImageProps, "src"> & {
  src: string | { url: string } | null;
};

export function StrapiImage({ src, alt, ...props }: StrapiImageProps) {
  const rawSrc = typeof src === "string" ? src : src?.url ?? null;
  const imageUrl = getStrapiMedia(rawSrc);

  if (!imageUrl) return null;

  return <Image src={imageUrl} alt={alt} {...props} />;
}
