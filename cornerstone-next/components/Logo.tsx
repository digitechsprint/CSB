const SRC_W = 1080;
const SRC_H = 1350;
const CROP = 680;
const OFFSET_X = 200;
const OFFSET_Y = 270;

export default function Logo({ size = 40 }: { size?: number }) {
  const scale = size / CROP;
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
          left: -OFFSET_X * scale,
          top: -OFFSET_Y * scale,
          maxWidth: 'none',
        }}
      />
    </span>
  );
}
