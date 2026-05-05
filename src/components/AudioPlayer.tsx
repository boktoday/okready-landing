import { useState, useRef, useEffect } from 'react';

interface AudioPlayerProps {
  src: string;
  title?: string;
}

export default function AudioPlayer({ src, title = "Listen to the full guide" }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => {
      setDuration(audio.duration);
      setLoaded(true);
    };
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onEnded = () => setPlaying(false);

    audio.addEventListener('loadedmetadata', onLoaded);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('canplaythrough', onLoaded);

    return () => {
      audio.removeEventListener('loadedmetadata', onLoaded);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('canplaythrough', onLoaded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const time = parseFloat(e.target.value);
    audio.currentTime = time;
    setCurrentTime(time);
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="mt-8 p-5 md:p-6 rounded-2xl border border-amber-500/15 bg-gradient-to-r from-amber-500/5 to-earth-900/50 backdrop-blur-sm">
      <audio ref={audioRef} src={src} preload="metadata" />

      <div className="flex items-start gap-4">
        {/* Play button */}
        <button
          onClick={togglePlay}
          className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/25 flex items-center justify-center hover:bg-amber-400/20 transition-all hover:scale-105 active:scale-95"
        >
          {playing ? (
            <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-amber-300 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Info + controls */}
        <div className="flex-1 min-w-0">
          {/* Title row */}
          <div className="flex items-center justify-between mb-2">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                <span className="text-sm font-medium text-earth-200 truncate">{title}</span>
              </div>
            </div>
            <span className="text-xs text-earth-500 flex-shrink-0 ml-3 tabular-nums">
              {loaded ? `${formatTime(currentTime)} / ${formatTime(duration)}` : '--:--'}
            </span>
          </div>

          {/* Progress bar */}
          <div className="relative h-1.5 rounded-full bg-earth-800 overflow-hidden group cursor-pointer"
               onClick={(e) => {
                 const rect = e.currentTarget.getBoundingClientRect();
                 const pct = (e.clientX - rect.left) / rect.width;
                 const audio = audioRef.current;
                 if (audio && duration) {
                   audio.currentTime = pct * duration;
                   setCurrentTime(audio.currentTime);
                 }
               }}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-300 transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-amber-300 shadow-lg shadow-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ left: `calc(${progress}% - 6px)` }}
            />
          </div>

          {/* Bottom row */}
          <div className="flex items-center justify-between mt-2">
            <a
              href={src}
              download
              className="flex items-center gap-1.5 text-xs text-earth-500 hover:text-amber-400 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download MP3
            </a>

            <div className="flex items-center gap-2">
              {loaded && (
                <span className="text-xs text-earth-600">
                  {duration > 300
                    ? `${Math.ceil(duration / 60)} min`
                    : `${Math.ceil(duration)} sec`}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
