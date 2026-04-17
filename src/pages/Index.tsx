
import { useState, useEffect, useMemo } from 'react';
import Taskbar from '@/components/Taskbar';
import MusicPlayer from '@/components/MusicPlayer';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import SocialLinks from '@/components/SocialLinks';
import BackgroundEffect from '@/components/BackgroundEffect';
import { cn } from '@/lib/utils';
import WelcomeSection from '@/components/WelcomeSection';
import { useIsMobile } from '@/hooks/use-mobile';
import { Toaster } from '@/components/ui/toaster';
import { MusicController } from '@/components/MusicController';

const Index = () => {

  // Single state to track which section is active
  const [activeSection, setActiveSection] = useState<string | null>('music');
  const isMobile = useIsMobile();

  const handleEnded = ()=>{
    controller.nextSong();
  }
  const controller = useMemo(() => new MusicController(), []);    
  controller.onEnded(handleEnded);
  
  // Set music as default on initial load
  useEffect(() => {

    // setActiveSection('music');
    setActiveSection(null)
  }, []);

  const handleMenuItemClick = (section: string) => {
    // Handle external links
    if (section === 'github') {
      window.open('https://github.com/manishtirkey', '_blank');
      return;
    }
    
    if (section === 'linkedin') {
      window.open('https://www.linkedin.com/in/manish-t-b02a67205/', '_blank');
      return;
    }
    
    // Toggle sections - if clicking the same section, set to null (nothing selected)
    // But don't affect music player state
    setActiveSection(prevSection => prevSection === section ? null : section);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      {/* Animated background */}
      <BackgroundEffect />
      
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-black/40 to-purple-900/10 -z-10"></div>
      
      {/* Mini Music Player - Always shown when music is not the active section */}
      {activeSection !== 'music' && (
        <div className="fixed z-50 bottom-8 right-10 transition-all duration-500">
           <MusicPlayer Controller={controller} isMini={true}/>
        </div>
      )}
      
      {/* Taskbar */}
      <Taskbar 
        onMenuItemClick={handleMenuItemClick}
        activeSection={activeSection || ''}
      />
      
      {/* Main content */}
      <div className={cn(
        "flex items-center justify-center min-h-screen",
        isMobile ? "py-20 pb-28" : "py-20" // Extra bottom padding on mobile for taskbar
      )}>
        <div className="container max-w-6xl px-4 mx-auto">
          {/* Content wrapper */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* Conditional rendering based on active section */}
            <div className="transition-all duration-500">
              {activeSection === 'about' && <AboutSection />}
              {activeSection === 'projects' && <ProjectsSection />}
              {activeSection === 'contact' && <ContactSection />}
              {activeSection === 'music' &&
              <MusicPlayer Controller={controller}/>
              }
              {activeSection === 'github' || activeSection === 'linkedin' ? <SocialLinks /> : null}
              {activeSection === null && <WelcomeSection />}
            </div>
          </div>
          
          {/* Footer */}
          <div className={cn(
            "text-center text-sm text-white/40",
            isMobile ? "mt-8 mb-16" : "mt-16" // Adjust footer spacing on mobile
          )}>
            <p>© 2024 Portfolio: Manish Tirkey · Built with React & Tailwind CSS</p>
          </div>
        </div>
      </div>
      
      {/* Toast notifications */}
      <Toaster />
    </div>
  );
};

export default Index;
