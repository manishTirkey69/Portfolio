
import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Volume } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { MusicController } from './MusicController';
import { useIsMobile } from '@/hooks/use-mobile';
import { Progress } from '@/components/ui/progress';

interface MusicPlayerProps {
  Controller: MusicController;
  isMini?: boolean; // optional
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ Controller, isMini = false }) => {
  // mobile devices
  const isMobile = useIsMobile();


  const [CurrentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(Controller.volume); // Initialize volume state with Controller's initial volume

  const handleTime = (time: number) => {
    setCurrentTime(time);
  }

  const handleVolume = (vol: number) => {
    setVolume(vol);
    Controller.setVolume(vol);
  }

  useEffect(() => {
    Controller.onLoadedMetadata(async () => {
      setDuration(await Controller.getDuration() || 0);
    });

    Controller.onTimeUpdate(handleTime);

    setCurrentTime(Controller.getCurrentTime());
    setVolume(Controller.volume); // Initialize volume state
  }, [])

  // Render mini player version
  if (isMini) {

    // render for mobile devices
    if (isMobile) {
      return (
        <div className="fixed z-50 bottom-20 right-4 transition-all duration-500 bg-black/20 backdrop-blur-md rounded-lg shadow-lg border border-white/10 overflow-hidden">
          <div className="glass-card flex flex-col items-center gap-2 p-2 shadow-glow">
            {/* Mini cover art */}
            <div className="relative w-10 h-10 rounded-md overflow-hidden shadow-glow-sm">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974')] bg-cover bg-center rounded-md"></div>
            </div>

            {/* Mini controls - vertical layout for mobile */}
            <div className="flex flex-col items-center gap-2">
              {/* prevSong */}
              <button
                onClick={Controller.prevSong}
                className="text-gray-400 hover:text-white transition-colors w-8 h-8 flex items-center justify-center"
              >
                <SkipBack size={16} />
              </button>

              {/* play/pause */}
              <button
                onClick={Controller.togglePlay}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                {Controller.isPlaying ? <Pause size={14} /> : <Play size={14} />}
              </button>

              {/* nextSong */}
              <button
                onClick={Controller.nextSong}
                className="text-gray-400 hover:text-white transition-colors w-8 h-8 flex items-center justify-center"
              >
                <SkipForward size={16} />
              </button>
            </div>
          </div>

          {/* 1px progress bat at bottom */}
          <Progress 
          value={(CurrentTime / ( Controller.Duration() || 1)) * 100} 
          className="h-1 w-full rounded-none bg-black/30"
          />
        </div>
      );
    }

    // render for tab/desktop
    else {
      return (
        <div className="fixed z-50 bottom-6 right-6 transition-all duration-500 bg-red-100/20 backdrop-blur-md rounded-lg shadow-lg border border-white/10 overflow-hidden">
          <div className="glass-card p-2 flex items-center gap-2 w-auto shadow-glow">
            {/* Mini cover art */}
            <div className="relative w-10 h-10 rounded-md overflow-hidden shadow-glow-sm">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974')] bg-cover bg-center rounded-md"></div>
            </div>

            {/* Mini controls */}
            <div className="flex items-center gap-2">

              {/* prevSong */}
              <button
                onClick={Controller.prevSong}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SkipBack size={16} />
              </button>

              {/* play/pause */}
              <button
                onClick={Controller.togglePlay}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                {Controller.isPlaying ? <Pause size={14} /> : <Play size={14} />}
              </button>

              {/* nextSong */}
              <button
                onClick={Controller.nextSong}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SkipForward size={16} />
              </button>
            </div>
          </div>

          <Progress 
          value={(CurrentTime/ (Controller.Duration() || 1)) * 100} 
          className="h-1 w-full rounded-none bg-black/30"
          />
        </div>
      );
    }
  }

  // Render full player version
  return (
    <div className="glass-card w-[340px] p-5">
      <div className="flex flex-col gap-4">
        {/* Album art */}
        <div className="mx-auto relative w-48 h-48">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-lg animate-pulse-slow"></div>
          <div className="absolute inset-2 rounded-lg bg-[url('https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] rounded-lg"></div>
          <div className={cn(
            "absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg transition-opacity",
            Controller.isPlaying ? "opacity-0" : "opacity-100"
          )}>
            <Play
              size={40}
              fill="white"
              className="cursor-pointer"
              onClick={Controller.togglePlay}
            />
          </div>
        </div>

        {/* Track info */}
        <div className="text-center">
          <h3 className="text-lg font-bold text-gradient">{Controller.currentSong().title}</h3>
          <p className="text-sm text-gray-400">{Controller.currentSong().artist}</p>
        </div>

        {/* Playback controls */}
        <div className="flex items-center justify-center gap-4">

          {/* prevSong */}
          <button
            onClick={Controller.prevSong}
            className="text-gray-400 hover:text-white transition-colors">
            <SkipBack size={20} />
          </button>

          {/* play/pause */}
          <button
            onClick={Controller.togglePlay}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            {Controller.isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          {/* nextSong */}
          <button
            onClick={Controller.nextSong}
            className="text-gray-400 hover:text-white transition-colors">
            <SkipForward size={20} />
          </button>
        </div>

        {/* Seek bar */}
        <div className="space-y-1">
          <Slider
            value={[CurrentTime]}
            max={Controller.Duration()}
            step={1}
            onValueChange={(values) => Controller.seekTo(values[0])}
            className="cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>{Controller.formatedCurTime()}</span>
            <span>{Controller.formatedDuration()}</span>
          </div>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-2">
          <Volume2 size={16} className="text-gray-400" />
          <Slider
            value={[volume]} // Use the volume state variable
            max={1}
            step={0.01}
            onValueChange={(values) => handleVolume(values[0])}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
