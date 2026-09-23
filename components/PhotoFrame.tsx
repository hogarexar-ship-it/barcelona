import Image from "next/image";
import type { Photo } from "@/lib/photos";

export function PhotoFrame({
  photo,
  className = "aspect-[4/3]",
  sizes = "(min-width: 1024px) 45vw, 100vw",
  priority = false,
}: {
  photo: Photo;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl2 ${className}`}>
      <Image src={photo.src} alt={photo.alt} fill priority={priority} sizes={sizes} className="object-cover" />
    </div>
  );
}

export function PhotoGallery({ photos }: { photos: Photo[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {photos.map((photo) => (
        <PhotoFrame key={photo.src} photo={photo} className="aspect-[4/3]" sizes="(min-width: 640px) 33vw, 100vw" />
      ))}
    </div>
  );
}
