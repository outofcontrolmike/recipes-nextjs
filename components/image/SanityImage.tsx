import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { configuredSanityClient } from "../../lib/newSanity";

interface Props {
  image: string;
  className?: string;
  alt: string;
  width: number;
}

const customLoader = ({ src }: { src: string }) => {
  return src;
};

export const SanityImage = ({ image, className, alt, width }: Props) => {
  const imageProps = useNextSanityImage(configuredSanityClient, image);

  return (
    <Image
      {...imageProps}
      layout="intrinsic"
      className={className}
      loader={customLoader}
      alt={alt}
      width={width}
    />
  );
};
