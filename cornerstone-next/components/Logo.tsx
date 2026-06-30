const SRC_W = 1080;
const SRC_H = 1350;

// Icon-only crop: just the gold ring + "CS" mark.
const ICON_CROP = 680;
const ICON_OFFSET_X = 200;
const ICON_OFFSET_Y = 240;

// Full lockup crop: ring + "CS" + the "Beyond Sales. Built on Solutions." tagline, readable.
const FULL_CROP = 786;
const FULL_OFFSET_X = 144;
const FULL_OFFSET_Y = 308;

export default function Logo({ size = 40, variant = 'icon' }: { size?: number; variant?: 'icon' | 'full' }) {
  const crop = variant === 'full' ? FULL_CROP : ICON_CROP;
  const offsetX = variant === 'full' ? FULL_OFFSET_X : ICON_OFFSET_X;
  const offsetY = variant === 'full' ? FULL_OFFSET_Y : ICON_OFFSET_Y;
  const scale = size / crop;
  return (
    <span style={{ width: size, height: size, overflow: 'hidden', position: 'relative', display: 'inline-block', flexShrink: 0 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/csb.png"
        alt="CornerStone Buildcom"
        style={{
          position: 'absolute',
          width: SRC_W * scale,
          height: SRC_H * scale,
          left: -offsetX * scale,
          top: -offsetY * scale,
          maxWidth: 'none',
        }}
      />
    </span>
  );
}
