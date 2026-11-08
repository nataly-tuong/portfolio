import { useEffect, useRef, useState } from 'react';

type VideoBackgroundProps = {
  className?: string;
};

export default function VideoBackground({
  className = '',
}: VideoBackgroundProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateMotion = () => {
      const video = ref.current;
      if (!video) return;

      if (query.matches) {
        video.pause();
        setPaused(true);
      } else {
        void video.play().catch(() => setPaused(true));
      }
    };

    updateMotion();
    query.addEventListener('change', updateMotion);
    return () => query.removeEventListener('change', updateMotion);
  }, []);

  const togglePlayback = () => {
    const video = ref.current;
    if (!video) return;

    if (video.paused) {
      void video.play().catch(() => setPaused(true));
    } else {
      video.pause();
    }
  };

  return (
    <>
      <div
        aria-hidden="true"
        className={`video-background ${className}`}
      >
        <video
          ref={ref}
          src={`${import.meta.env.BASE_URL}hero-bg.mp4`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onPlay={() => setPaused(false)}
          onPause={() => setPaused(true)}
          onError={() => setPaused(true)}
        />
      </div>
      <button
        type="button"
        className="video-control"
        onClick={togglePlayback}
        aria-label={paused ? 'Play background video' : 'Pause background video'}
      >
        <span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span>{' '}
        {paused ? 'Play motion' : 'Pause motion'}
      </button>
    </>
  );
}
