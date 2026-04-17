import { SocialLinksList } from '@/components/SocialLinksList';
import { Github, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  const socials = [
    {
      name: "GitHub",
      icon: Github,
      url: SocialLinksList.Github,
      color: "bg-gradient-to-br from-gray-700 to-gray-900"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: SocialLinksList.Linkedin,
      color: "bg-gradient-to-br from-blue-600 to-blue-800"
    }
  ];

  return (
    <div className="glass-card p-6 flex flex-col items-center gap-6 max-w-xs">
      <h2 className="text-2xl font-bold text-gradient text-glow">Connect</h2>
      
      <div className="flex flex-col gap-4 w-full">
        {socials.map((social) => (
          <a 
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 glass-morphism hover:bg-white/10 p-4 rounded-lg transition-all duration-300 group"
          >
            <div className={`${social.color} p-2 rounded-lg group-hover:animate-float`}>
              <social.icon size={24} className="text-white" />
            </div>
            <span className="text-lg">{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
