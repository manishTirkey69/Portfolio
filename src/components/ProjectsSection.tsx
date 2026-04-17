
import { ExternalLink, Github, Image, Lock, Camera, FileText, SquareCheck } from 'lucide-react';
import { useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';
import { useIsProjects } from '@/hooks/use-projects';

const projects = [
  {
    title: "Face Recognition for Attendance",
    description: "Highly customizable Face Recognition for Attendance based on customtkinter and MySql to store records. Automates attendance tracking with high accuracy facial detection.",
    tech: ["Python", "customtkinter", "MySQL", "OpenCV", "Face Recognition"],
    github: "https://github.com/ManishTirkey/Face-Recognition-for-Attendance",
    demo: "#",
    icon: "image",
    screenshots: [
      "https://raw.githubusercontent.com/ManishTirkey/Face-Recognition-for-Attendance/main/public/Project%20ScreenShots/Screenshot%20(66).png",
      "https://raw.githubusercontent.com/ManishTirkey/Face-Recognition-for-Attendance/main/public/Project%20ScreenShots/Screenshot%20(67).png"
    ]
  },
  {
    title: "Password Manager",
    description: "A password manager application built with ElectronJS, HTML, CSS, and JavaScript, utilizing AES-256-CBC encryption for secure password storage. User credentials and passwords are encrypted and stored in MongoDB, ensuring robust security.",
    tech: ["ElectronJS", "JavaScript", "MongoDB", "AES-256-CBC", "HTML/CSS"],
    github: "https://github.com/ManishTirkey/Password-Manager",
    demo: "#",
    icon: "lock",
    screenshots: [
      "https://raw.githubusercontent.com/ManishTirkey/Password-Manager/main/Screenshots/1.png",
      "https://raw.githubusercontent.com/ManishTirkey/Password-Manager/main/Screenshots/2.png",
      "https://raw.githubusercontent.com/ManishTirkey/Password-Manager/main/Screenshots/3.png",
      "https://raw.githubusercontent.com/ManishTirkey/Password-Manager/main/Screenshots/4.png",
      "https://raw.githubusercontent.com/ManishTirkey/Password-Manager/main/Screenshots/5.png"
    ]
  },
  {
    title: "QT Screenshot Application",
    description: "Sleek and efficient screenshot utility built with QT framework. Features a top-level preview window that stays above other applications, enabling quick image capture with keyboard shortcuts for saving (Ctrl+S) and copying to clipboard (Ctrl+Shift+S).",
    tech: ["QT", "C++", "GUI Development", "Keyboard Shortcuts"],
    github: "https://github.com/ManishTirkey/QT-ScreenShot",
    demo: "#",
    icon: "camera",
    screenshots: [
      "https://raw.githubusercontent.com/ManishTirkey/QT-ScreenShot/main/Screenshots/1.png",
      "https://raw.githubusercontent.com/ManishTirkey/QT-ScreenShot/main/Screenshots/2.png"
    ]
  },
  {
    title: "Screenshot by Electron JS",
    description: "Hybrid screenshot application combining ElectronJS and Python technologies. Creates a seamless cross-platform experience for capturing, editing, and sharing screenshots with a modern and intuitive user interface.",
    tech: ["ElectronJS", "Python", "JavaScript", "Cross-platform"],
    github: "https://github.com/ManishTirkey/ScreenShot",
    demo: "#",
    icon: "camera",
    screenshots: [
      "https://raw.githubusercontent.com/ManishTirkey/ScreenShot/v1.0.0/Screenshots/1.png",
      "https://raw.githubusercontent.com/ManishTirkey/ScreenShot/v1.0.0/Screenshots/2.png",
      "https://raw.githubusercontent.com/ManishTirkey/ScreenShot/v1.0.0/Screenshots/3.png",
      "https://raw.githubusercontent.com/ManishTirkey/ScreenShot/v1.0.0/Screenshots/Tray.png"
    ]
  },
  {
    title: "Todo Application",
    description: "A lightweight cross-platform solution for managing application autostart functionality in Electron apps that remains as a top window. Seamlessly enables your application to launch on system startup and stay visible above other windows across Windows, macOS, and Linux.",
    tech: ["ElectronJS", "JavaScript", "Auto-Launch", "Cross-platform"],
    github: "#",
    demo: "#",
    icon: "square-check",
    screenshots: []
  },
];

const ProjectsSection = () => {
  // breakpoints
  const isProjects = useIsProjects();

  const [expanded, setExpanded] = useState<number | null>(null);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "image":
        return <Image className="text-sidebar-primary" size={24} />;
      case "lock":
        return <Lock className="text-sidebar-primary" size={24} />;
      case "camera":
        return <Camera className="text-sidebar-primary" size={24} />;
      case "file-text":
        return <FileText className="text-sidebar-primary" size={24} />;
      case "square-check":
        return <SquareCheck className="text-sidebar-primary" size={24} />;
      default:
        return <FileText className="text-sidebar-primary" size={24} />;
    }
  };

  // const toggleExpand = (index: number) => {
  //   setExpanded(expanded === index ? null : index);
  // };

  return (
    <div className={cn(
      "glass-card p-6 w-full",
      isProjects ? "max-w-2xl" : "max-w-4xl")}>
      <h2 className="text-2xl font-bold mb-6 text-gradient text-glow">Projects</h2>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={cn(
              "glass-morphism rounded-lg p-5 transition-all duration-500 hover:bg-white/10",
              // expanded === index ? "shadow-glow" : ""
              "shadow-glow"
            )}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-full bg-white/5">
                {getIconComponent(project.icon)}
              </div>
              <h3 className="text-xl font-bold">{project.title}</h3>
            </div>
            
            <p className="text-gray-300 mb-3">{project.description}</p>
            
            {/* Project screenshots carousel - only shown when expanded */}
            {/* {expanded === index && project.screenshots.length > 0 && ( */}
            {project.screenshots.length > 0 && (
              <div className="mb-4 rounded-lg overflow-hidden">
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.screenshots.map((screenshot, screenshotIndex) => (
                      <CarouselItem key={screenshotIndex}>
                        <div className="p-1">
                          <div className="relative aspect-video rounded-lg overflow-hidden bg-black/20">
                            <img 
                              src={screenshot} 
                              alt={`${project.title} screenshot ${screenshotIndex + 1}`}
                              className="object-contain w-full h-full"
                              onError={(e) => {
                                // Fall back to a placeholder if image fails to load
                                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800";
                              }}
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
            )}
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-white/10 px-2 py-1 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <a 
                  href={project.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm hover:text-sidebar-primary transition-colors"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
                {project.demo !== "#" && (
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 text-sm hover:text-sidebar-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
              
              {/* Expand/collapse button */}
              {/* {project.screenshots.length > 0 && (
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-sm text-gray-300 hover:text-sidebar-primary transition-colors"
                >
                  {expanded === index ? "Collapse" : "View Screenshots"}
                </button>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
