
import { useEffect, useRef } from 'react';

const BackgroundEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Particles configuration
    const particleCount = 50;
    const particles: Particle[] = [];
    const colors = ['#7B68EE', '#9370DB', '#8A2BE2', '#9932CC', '#9400D3'];
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      speed: number;
      directionX: number;
      directionY: number;
      alpha: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 5 + 3;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speed = Math.random() * 0.5 + 0.1;
        this.directionX = Math.random() * 2 - 1;
        this.directionY = Math.random() * 2 - 1;
        this.alpha = Math.random() * 0.5 + 0.1;
      }
      
      update() {
        this.x += this.directionX * this.speed;
        this.y += this.directionY * this.speed;
        
        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) {
          this.directionX = -this.directionX;
        }
        
        if (this.y < 0 || this.y > canvas.height) {
          this.directionY = -this.directionY;
        }
      }
      
      draw() {
        if (!ctx) return;
        
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        );
        gradient.addColorStop(0, `${this.color}`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.globalAlpha = this.alpha;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Clear canvas with semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(10, 10, 20, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw bloom effect
      ctx.globalCompositeOperation = 'lighter';
      particles.forEach(particle => {
        const bloomRadius = particle.radius * 2;
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, bloomRadius
        );
        gradient.addColorStop(0, `${particle.color}10`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.globalAlpha = particle.alpha * 0.3;
        ctx.arc(particle.x, particle.y, bloomRadius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalCompositeOperation = 'source-over';
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default BackgroundEffect;
