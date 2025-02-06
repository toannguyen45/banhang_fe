"use client";

import { CldImage } from "next-cloudinary";

interface ClientOnlyCldImageProps {
  src: string;
  alt: string;
  width: number | `${number}` | undefined;
  height: number | `${number}` | undefined;
  sizes?: string;
  className?: string;
}

const ClientOnlyCldImage: React.FC<ClientOnlyCldImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  return (
    <CldImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      crop="fill"
      sizes="100vw"
    />
  );
};

export default ClientOnlyCldImage;
