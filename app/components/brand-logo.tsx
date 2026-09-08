import Image from "next/image";

export default function BrandLogo({ height = 32 }: { height?: number }) {
  const width = Math.round(height * 217.09 / 247.84);

  return (
    <Image
      src="/images/techcraft-logomark.svg"
      alt=""
      width={width}
      height={height}
      unoptimized
      style={{ display: "block", width, height, objectFit: "contain", flexShrink: 0 }}
    />
  );
}
