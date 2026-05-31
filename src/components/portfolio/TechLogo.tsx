"use client";

import { Database } from "lucide-react";

interface TechLogoProps {
  name: string;
}

export const TechLogo = ({ name }: TechLogoProps) => {
  const logoMap: { [key: string]: { icon: string; color: string; useIcon?: boolean } } = {
    "C#": { icon: "csharp", color: "#9a15c2" },
    "Python": { icon: "python", color: "#3776ab" },
    "SQL": { icon: "postgresql", color: "#336791", useIcon: true },
    ".NET": { icon: "dotnet", color: "#512BD4" },
    "ASP.NET Core": { icon: "dotnet", color: "#512BD4" },
    "FastAPI": { icon: "fastapi", color: "#009688" },
    "PostgreSQL": { icon: "postgresql", color: "#336791" },
    "MongoDB": { icon: "mongodb", color: "#47A248" },
    "GCP": { icon: "googlecloud", color: "#4285F4" },
    "Supabase": { icon: "supabase", color: "#3ECF8E" },
    "Docker": { icon: "docker", color: "#2496ED" },
    "Git": { icon: "git", color: "#F05032" },
    "RabbitMQ": { icon: "rabbitmq", color: "#FF6600" },
    "Kafka": { icon: "apachekafka", color: "#ffffff" },
    "React": { icon: "react", color: "#61DAFB" },
    "Typescript": { icon: "typescript", color: "#3178C6" },
    "HTML": { icon: "html5", color: "#E34F26" },
    "Unity": { icon: "unity", color: "#ffffff" },
    "Javascript": { icon: "javascript", color: "#F7DF1E" },
    "Node.js": { icon: "nodedotjs", color: "#339933" },
    "Next.js": { icon: "nextdotjs", color: "#ffffff" },
    "CSS": { icon: "css3", color: "#1572B6" },
    "LLM APIs": { icon: "claude", color: "#ff7043" },
    "AI Workflows": { icon: "cursor", color: "#ffffff" },
    "Prompt Engineering": { icon: "googlegemini", color: "#ffffff" },
    "OpenAI": { icon: "openai", color: "#ffffff" },
    "API": { icon: "fastapi", color: "#009688" },
  };

  const tech = logoMap[name] || { icon: "github", color: "#ffffff" };
  
  // Use Database icon for SQL
  if (tech.useIcon && name === "SQL") {
    return <Database className="w-8 h-8" style={{ color: tech.color }} />;
  }
  
  // Using Iconify API for colored logos
  const iconUrl = `https://api.iconify.design/simple-icons:${tech.icon}.svg?color=${encodeURIComponent(tech.color)}`;

  return (
    <div className="w-8 h-8 flex items-center justify-center">
      <img
        src={iconUrl}
        alt={name}
        className="w-8 h-8"
        onError={(e) => {
          // Fallback to colored text if image fails
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `<span style="color: ${tech.color}; font-weight: bold; font-size: 0.75rem;">${name.substring(0, 2)}</span>`;
          }
        }}
      />
    </div>
  );
};

