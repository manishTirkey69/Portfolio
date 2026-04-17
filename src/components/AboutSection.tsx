import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Cpu, FileCode, Database, Braces,
  Workflow, Layout, Code, Terminal,
  ServerCog, RadioTower, GraduationCap, Circle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

import {
  DockerOriginal,
  MysqlOriginalWordmark,
  Css3OriginalWordmark,
  DjangoPlainWordmark,
  MongodbOriginalWordmark,
  TypescriptOriginal,
  RaspberrypiOriginal,
  GitOriginalWordmark,
  GithubOriginalWordmark,
  GithubactionsOriginal,
  NodejsOriginalWordmark,
  JavascriptOriginal,

} from 'devicons-react'

import { FaReact } from "react-icons/fa";
import {IconContext} from 'react-icons';
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { IoLogoElectron } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { VscVscode } from "react-icons/vsc";
import { SiJupyter } from "react-icons/si";
import { SiPycharm } from "react-icons/si";


const AboutSection = () => {
  const skills = [
    // { name: "C/C++", icon: Cpu, color: "bg-green-500" },
    // { name: "Python", icon: FileCode, color: "bg-yellow-500" },
    // { name: "HTML/CSS", icon: Layout, color: "bg-orange-500" },
    // { name: "JavaScript", icon: Braces, color: "bg-yellow-400" },
    // { name: "React", icon: Code, color: "bg-cyan-500" },

    // { name: "Djnago", icon: Database, color: "bg-green-500" },
    // { name: "MySQL", icon: Database, color: "bg-green-500" },
    // { name: "MongoDB", icon: Database, color: "bg-green-500" },

    // { name: "TypeScript", icon: Code, color: "bg-blue-600" },
    // { name: "Docker", icon: ServerCog, color: "bg-blue-700" },
    // { name: "Linux", icon: Terminal, color: "bg-gray-700" },
    // { name: "Raspberry Pi", icon: RadioTower, color: "bg-red-500" },

    // { name: "Git", icon: Circle, color: "bg-gray-600" },
    // { name: "AI/ML", icon: Workflow, color: "bg-purple-600" },
    // { name: "LLMs Applications", icon: Database, color: "bg-purple-600" },
    // { name: "Open Source LLM Models", icon: Database, color: "bg-green-500" },

    { icon: TbBrandCpp, },
    { icon: FaPython},
    { icon: JavascriptOriginal},
    
    { icon: TiHtml5, },
    { icon: Css3OriginalWordmark,},
    { icon: TypescriptOriginal, },

    { icon: DjangoPlainWordmark, },
    { icon: FaReact, },
    { icon: IoLogoElectron, },
    
    { icon: MysqlOriginalWordmark,},
    { icon: MongodbOriginalWordmark, },

    { icon: FcLinux },
  
    { icon: NodejsOriginalWordmark},
    
    
    // tootls
    { icon: VscVscode, },
    { icon: SiPycharm, },
    { icon: SiJupyter },
    { icon: DockerOriginal, },
    { icon: GitOriginalWordmark, },
    { icon: GithubOriginalWordmark,},
    { icon: GithubactionsOriginal, },
    { icon: RaspberrypiOriginal, },

    
  ];

  const education = [
    {
      degree: "Master of Computer Application",
      institution: "Dr. Shyama Prasad University Ranchi, Jharkhand",
      period: "2022 - 2024",
      details: "Specialized in Artificial Intelligence and Machine Learning"
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "Dr. Shyama Prasad University Ranchi, Jharkhand",
      period: "2019 - 2022",
      details: "Focus on Software Engineering and Data Structures"
    },
    {
      degree: "Intermediate",
      institution: "St. Ignatius Inter College, Gumla, Jharkhand",
      period: "2017 - 2019",
      details: "Science and Mathematics"
    },
    {
      degree: "High School",
      institution: "St. Patric's High School Gumla, Jharkhand",
      period: "2017",
      details: "Science and Mathematics"
    }
  ];

  return (
    <div className="flex flex-col gap-12 w-full max-w-4xl mx-auto">
      {/* Section 1: About Me with Image - Enhanced with better spacing and animations */}
      <div className="glass-card p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 hover:bg-white/5 transition-all duration-500">
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-xs aspect-square overflow-hidden rounded-xl border border-white/20 shadow-glow group">
            <img
              src="https://avatars.githubusercontent.com/u/65901594?s=400&u=bfc62001c3edf5742ff4d7180c323d0ba51b9735&v=4"
              alt="Developer"
              className="object-cover w-full h-full group-hover:scale-105 transition-all duration-700 group-hover:rotate-2"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <div className="bg-black/60 backdrop-blur-sm p-3 rounded-lg">
                <h3 className="text-white text-sm font-medium">Developer</h3>
                <p className="text-white/80 text-xs">Software Engineer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-gradient text-glow font-display relative">
            About Me
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-sidebar-primary rounded-full"></span>
          </h2>
          <p className="mb-4 font-light leading-relaxed">
            Hey there! I'm a curious and passionate software developer who loves diving into all things tech—especially when it comes to AI and building smart, useful applications.
          </p>
          <p className="mb-4 font-light leading-relaxed">
            Whether it's crafting clean, responsive interfaces with React and Tailwind, experimenting with machine learning models,
            or tinkering with microcontrollers like the ESP32, I enjoy learning by doing—and turning ideas into real, working systems.
          </p>
          <p className="font-light leading-relaxed">
            For me, coding isn’t just work—it’s a tool to solve meaningful problems, explore new ideas, and bring creative visions to life.
          </p>
        </div>
      </div>

      {/* Skills Section - Enhanced with better animations and hover effects */}
      <div className="transform hover:-translate-y-1 transition-all duration-500">
        <h2 className="text-3xl font-bold mb-6 text-center text-gradient text-glow font-display relative inline-block mx-auto">
          Skills
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-sidebar-primary rounded-full"></span>
        </h2>
        <div className="p-6 sm:p-8 transition-all duration-500">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="glass-morphism-white p-4 rounded-lg flex flex-col items-center justify-center gap-3 hover:bg-white/50 transition-all transform hover:-translate-y-1 hover:scale-105 duration-300"
              >
                <div className={`red p-3 rounded-lg animate-pulse-slow`}>
                  <IconContext.Provider value={{ color: "black" }}>
                    <skill.icon size={80} />
                  </IconContext.Provider>
                </div>
                {/* <span className="text-sm font-medium text-center">{skill.name}</span> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education Section with Enhanced Timeline */}
      <div className="transform hover:-translate-y-1 transition-all duration-500">
        <h2 className="text-3xl font-bold mb-6 text-center text-gradient text-glow font-display relative inline-block mx-auto">
          Education
          <span className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-full h-1 bg-sidebar-primary rounded-full"></span>
        </h2>
        <div className="p-6 sm:p-8 relative transition-all duration-500">
          {/* Education Timeline - Enhanced */}
          <div className="relative pl-8">
            {/* Vertical timeline line - Thinner and elegant */}
            <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/5 via-sidebar-primary/100 to-white/5"></div>

            <div className="space-y-12">
              {education.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot - Enhanced with glow effect */}
                  <div className="absolute left-[-38px] top-1.5">
                    <div className="w-8.5 h-8.5 rounded-full border-2 border-sidebar-primary/50 bg-sidebar flex items-center justify-center group-hover:border-sidebar-primary group-hover:shadow-[0_0_10px_rgba(147,51,234,0.5)] transition-all duration-300">
                      <GraduationCap size={25} className="text-sidebar-primary" />
                    </div>
                  </div>

                  {/* Content - Enhanced with better hover effects */}
                  <div className="glass-morphism p-5 rounded-lg hover:bg-white/5 transition-all duration-300 group-hover:translate-x-1">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-sidebar-primary transition-colors">{item.degree}</h4>
                        <p className="text-sm text-white/70">{item.institution}</p>
                        <p className="text-xs text-white/50 mt-1.5">{item.details}</p>
                      </div>
                      <div className="mt-2 sm:mt-0 sm:ml-4">
                        <span className="inline-block bg-sidebar/80 px-3 py-1 rounded-full text-xs font-medium text-white/80 group-hover:bg-sidebar-primary/30 transition-colors">
                          {item.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
