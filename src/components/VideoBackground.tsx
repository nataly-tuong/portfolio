type VideoBackgroundProps = {
  src: string;
  className?: string;
};

export default function VideoBackground({
  src,
  className = "",
}: VideoBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}
