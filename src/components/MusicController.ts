// lib/MusicController.ts

import { SongList } from '@/components/SongList'

export class MusicController {
  public audioRef: HTMLAudioElement;

  private songs: { title: string; artist: string; url: string }[];
  private currentIndex: number;
  public isPlaying: boolean;
  public volume: number;


  constructor() {
    this.audioRef = new Audio();
    this.songs = SongList;
    this.currentIndex = Math.floor(Math.random() * this.songs.length);
    this.isPlaying = false;
    this.volume = 0.7;

    this.audioRef.src = this.songs[this.currentIndex].url;
    this.audioRef.volume = this.volume;
  }

  private play = async () => {
    try {
      await this.audioRef.play();
      this.isPlaying = true;
    } catch (err) {
      console.error('Audio playback failed:', err);
    }
  };

  private pause = () => {
    this.audioRef.pause();
    this.isPlaying = false;
  };

  togglePlay = () => {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  };

  nextSong = () => {
    this.currentIndex = (this.currentIndex + 1) % this.songs.length;
    this.loadCurrentSong();
  };

  prevSong = () => {
    this.currentIndex =
      this.currentIndex === 0 ? this.songs.length - 1 : this.currentIndex - 1;
    this.loadCurrentSong();
  };

  private loadCurrentSong = () => {
    const currentSong = this.songs[this.currentIndex];
    this.audioRef.src = currentSong.url;
    this.audioRef.volume = this.volume;
    this.audioRef.currentTime = 0;
    if (this.isPlaying) {
      this.play();
    }
  };

  currentSong = () => {
    return this.songs[this.currentIndex];
  }

  setVolume = (value: number) => {
    this.volume = value;
    this.audioRef.volume = value;
  };

  seekTo = (value: number) => {
    this.audioRef.currentTime = value;
  };

  getCurrentTime = () => this.audioRef.currentTime;

  getDuration = () => {
    return new Promise<number>((resolve) => {
      if (this.audioRef.readyState >= 2) { // Check if metadata is already loaded
        resolve(this.audioRef.duration);
      } else {
        this.audioRef.addEventListener('loadedmetadata', () => resolve(this.audioRef.duration), { once: true });
      }
    });
  };

  Duration = () => {
    return this.audioRef.duration;
  }

  onTimeUpdate = (callback: (time: number) => void) => {
    this.audioRef.addEventListener('timeupdate', () => {
      callback(this.audioRef.currentTime);
    });
  };

  onLoadedMetadata = (callback: () => void) => {
    this.audioRef.addEventListener('loadedmetadata', callback, { once: true });
  };


  formatTime = (seconds: number) => {
    if (seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }
    else return `00:00`
  }

  formatedCurTime = () => {
    return this.formatTime(this.audioRef.currentTime);
  }

  formatedDuration = () => {
    return this.formatTime(this.audioRef.duration);
  }

  onEnded = (callback: () => void) => {
    this.audioRef.addEventListener('ended', callback);
  };

}
