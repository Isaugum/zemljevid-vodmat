import React, { useState, useRef, useEffect } from 'react';
import './style/sound-component.scss';

interface SoundComponentProps {
  src: string;
}

const SoundComponent = ({ src }: SoundComponentProps) => {
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
    <div key={src} className="audio-container">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={updateTime}
        onEnded={() => setIsPlaying(false)}
      />
      <button className="play-btn" onClick={togglePlay}>
        {!isPlaying ? <img className='play-icon' src='/assets/images/icons/play.webp' alt='play' /> : <img className='play-icon' src='/assets/images/icons/krizec.webp' alt='play' />}
      </button>
      <div className="progress-container">
        <div
          className="timeline"
          ref={timelineRef}
          onClick={handleTimelineClick}
        >
          <div className="progress" style={{ width: `${timelineWidth}px` }} />
        </div>
      </div>
    </div>
  );
};

export { SoundComponent };