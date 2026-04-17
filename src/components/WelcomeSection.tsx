
import React from 'react';
import { ChevronRight } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <div className="glass-card p-8 max-w-xl">
      <h1 className="text-4xl font-bold mb-6 text-gradient text-glow font-display">Welcome to My Portfolio</h1>
      
      <p className="mb-4 font-light leading-relaxed text-lg">
        Thanks for stopping by! I'm a creative developer passionate about building 
        beautiful digital experiences with modern web technologies.
      </p>
      
      <p className="mb-6 font-light leading-relaxed text-lg">
        Feel free to explore my projects, learn more about me, or get in touch.
        The music player is always available for your enjoyment while you browse.
      </p>
      
      <div className="flex flex-wrap gap-4 mt-8">
        <div className="glass-button flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-all group">
          <span className="font-medium">Explore Projects</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
        
        <div className="glass-button flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-all group">
          <span className="font-medium">About Me</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
