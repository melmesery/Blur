import Image from "next/image";
import { Photo } from "../models/Images.ts";
import Link from "next/link";

type Props = {
  photo: Photo;
};

export default function ImgContainer({ photo }: Props) {
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(300 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 15) + 1;

  return (
    <div
      className="w-[300px] justify-self-center"
      style={{ gridRow: `span ${photoSpans}`}}
    >
      <div className="rounded-2xl overflow-hidden group">
        <Link
          href={photo.url}
          target="_blank"
          className="grid place-content-center"
        >
          <Image
            src={photo.src.large}
            alt={photo.alt}
            width={300}
            height={galleryHeight}
            sizes="300px"
            placeholder="blur"
            blurDataURL={photo.blurredDataUrl} 
            className="transition duration-700 hover:scale-105 filter grayscale hover:filter-none"
          />
        </Link>
      </div>
    </div>
  );
}
