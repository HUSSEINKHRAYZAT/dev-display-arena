
import { Button } from '@/components/ui/button';
import { Atom } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  useEffect(() => {
    // Set initial animation states
    setIsRotating(true);
    setTimeout(() => setIsProfileVisible(true), 300);
  }, []);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-start space-y-8 max-w-2xl">
            <span className="text-sm md:text-base font-semibold text-primary animate-fade-in">
              Hello, I'm
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in-1 flex items-center gap-4">
              Jane Doe
              <Atom 
                className={`text-primary ${isRotating ? 'animate-spin-slow' : ''}`}
                size={48}
              />
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in-2">
              Full Stack Developer building creative and functional web applications
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl animate-fade-in-3">
              I specialize in creating responsive web applications with clean code and exceptional user experiences.
              Currently focused on React, Node.js, and modern JavaScript frameworks.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-3">
              <Button asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>

          <div className={`relative mt-10 md:mt-0 ${isProfileVisible ? 'animate-profile-appear' : 'opacity-0'}`}>
            <div className="profile-container">
              <Avatar className="w-64 h-64 border-4 border-primary shadow-glow">
                <AvatarImage src="/profile-picture.jpg" alt="Jane Doe" className="object-cover" />
                <AvatarFallback className="bg-secondary text-4xl">JD</AvatarFallback>
              </Avatar>
              <div className="profile-orbit">
                <div className="profile-planet"></div>
              </div>
              <div className="profile-orbit profile-orbit-2">
                <div className="profile-planet profile-planet-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
