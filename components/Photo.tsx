import Image from 'next/image';
import type { ImageRef } from '@/lib/types';
import { cn } from '@/lib/utils';

const ratios = {
  wide: 'aspect-[2/1]',
  landscape: 'aspect-[3/2]',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
} as const;

/**
 * Every photograph goes through here, so all of them carry intrinsic
 * dimensions and a fixed aspect box — nothing can shift the layout as it loads.
 *
 * Monochrome is the DEFAULT and not an option, because this archive spans
 * 2008 to now: a 2010 compact-camera print and a 2025 phone photograph look
 * like they belong to different websites in colour, and identical in
 * greyscale. `colour` exists for the rare case where it genuinely matters.
 */
export function Photo({
  image,
  ratio = 'landscape',
  priority = false,
  sizes = '100vw',
  colour = false,
  className,
}: {
  image: ImageRef;
  ratio?: keyof typeof ratios;
  priority?: boolean;
  sizes?: string;
  colour?: boolean;
  className?: string;
}) {
  return (
    <figure className={cn('m-0', className)}>
      <div
        className={cn('relative overflow-hidden bg-panel', ratios[ratio], !colour && 'mono')}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          className="object-cover"
        />
      </div>
      {image.caption ? (
        <figcaption className="mt-2.5 text-xs text-ink-faint">
          {image.caption}
          {image.credit ? <span className="ml-2 opacity-70">{image.credit}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
