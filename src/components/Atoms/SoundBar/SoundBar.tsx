import React from "react";
import { useEffect, useRef, useState } from "react";

interface SoundBarProps {
  src: string;
}

const SoundBar = React.memo(({src}: SoundBarProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timelineWidth, setTimelineWidth] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio?.pause();
    } else {
      audio?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const updateTime = () => {
    const audio = audioRef.current;
    const timeline = timelineRef.current;
    if (audio && timeline) {
      const percentage = (audio.currentTime / audio.duration) * 100;
      setTimelineWidth((timeline.offsetWidth * percentage) / 100);
    }
  };

  const handleTimelineClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const timeline = timelineRef.current;
    if (timeline) {
      const rect = timeline.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const percentage = (offsetX / timeline.offsetWidth) * 100;
      const audio = audioRef.current;
      if (audio) {
        audio.currentTime = (audio.duration * percentage) / 100;
        setTimelineWidth(offsetX);
      }
    }
  };

  useEffect(() => {
    // Reset the component state when src changes
    setIsPlaying(false);
    setTimelineWidth(0);
  }, [src]);

  return (
    <div key={src} className="flex justify-center items-center w-full">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={updateTime}
        onEnded={() => setIsPlaying(false)}
      />
      <button className="h-16 w-16" onClick={togglePlay}>
        <img className="h-full w-full" src={!isPlaying ? '/assets/images/icons/play.webp' : '/assets/images/icons/krizec.webp'} alt='play' />
      </button>
      <div className="bg-white w-full h-6 rounded-full ml-4">
        <div
          className="relative h-full"
          ref={timelineRef}
          onClick={handleTimelineClick}
        >
          <div className="absolute left-0 top-0 h-full bg-gray-200 w-full rounded-full overflow-hidden">
            <div className="absolute left-0 top-0 h-full bg-white" style={{ width: `${timelineWidth}px` }} />
          </div>
          
        </div>
      </div>
    </div>
  );
});

export { SoundBar };