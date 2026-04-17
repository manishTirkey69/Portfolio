
import { useState } from 'react';
import { User, FolderKanban, Mail, Github, Linkedin, Music } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

interface TaskbarProps {
  onMenuItemClick: (section: string) => void;
  activeSection: string;
}

const Taskbar = ({ onMenuItemClick, activeSection }: TaskbarProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [tooltipOpen, setTooltipOpen] = useState<{ [key: string]: boolean }>({});
  const isMobile = useIsMobile();

  const menuItems = [
    { id: 'about', icon: User, label: 'About' },
    { id: 'projects', icon: FolderKanban, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact Me' },
    { id: 'github', icon: Github, label: 'GitHub' },
    { id: 'linkedin', icon: Linkedin, label: 'LinkedIn' },
    { id: 'music', icon: Music, label: 'Music' },
  ];

  const handleClick = (id: string) => {
    // Close tooltip when clicking a button
    setTooltipOpen(prev => ({ ...prev, [id]: false }));
    onMenuItemClick(id);
  };

  // Mobile taskbar at bottom
  if (isMobile) {
    return (
      <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
        <div className="glass-taskbar-enhanced flex items-center justify-between px-4 py-3 rounded-full shadow-glow">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={cn(
                  "p-2 mx-1 rounded-full transition-all duration-300 icon-hover",
                  isActive 
                    ? "bg-sidebar-primary text-white shadow-glow-sm scale-110" 
                    : "text-sidebar-foreground hover:text-white"
                )}
              >
                <item.icon size={20} className={isActive ? "animate-float" : ""} />
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop taskbar on side
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
      <div className="glass-taskbar-enhanced flex flex-col items-center justify-center py-8 px-4 gap-8 rounded-full shadow-glow">
        <TooltipProvider>
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            
            return (
              <Tooltip 
                key={item.id}
                open={tooltipOpen[item.id]}
                onOpenChange={(open) => {
                  setTooltipOpen(prev => ({ ...prev, [item.id]: open }));
                }}
              >
                <TooltipTrigger asChild>
                  <button
                    onClick={() => handleClick(item.id)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={cn(
                      "p-2 rounded-full transition-all duration-300 icon-hover",
                      isActive 
                        ? "bg-sidebar-primary text-white shadow-glow-sm scale-110" 
                        : "text-sidebar-foreground hover:text-white"
                    )}
                  >
                    <item.icon size={24} className={isActive ? "animate-float" : ""} />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right" className="glass-morphism">
                  <span className="text-sm font-medium font-display">{item.label}</span>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Taskbar;