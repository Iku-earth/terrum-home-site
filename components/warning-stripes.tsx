export default function WarningStripes() {
  return (
    <div
      className="w-full h-12"
      style={{
        backgroundImage: `repeating-linear-gradient(
          -80deg,
          #FFC404 0px,
          #FFC404 20px,
          #000 20px,
          #000 36px
        )`,
      }}
      role="presentation"
      aria-hidden="true"
    />
  );
}
