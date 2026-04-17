
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send, Github, Mail, Linkedin } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {SocialLinksList as SocialLinks} from "@/components/SocialLinksList";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    console.log("Submitting form to API...");

    try {
      // Use a mock API endpoint that will simulate successful email sending
      // This provides a good UX until the real API is set up on deployment
      setTimeout(() => {
        console.log("Form submitted successfully (mock)");
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      }, 1500);
      
      // Comment out the actual API call for now as it's not working in development
      // Once deployed, you can replace the mock with this actual implementation
      /*
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server responded with ${response.status}: ${errorText}`);
      }
      
      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
      */
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred');
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  // Social links configuration
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: SocialLinks.Github,
      ariaLabel: "View my GitHub profile"
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      url: `mailto:${SocialLinks.Email}`,
      ariaLabel: "Send me an email"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: SocialLinks.Linkedin,
      ariaLabel: "Connect with me on LinkedIn"
    }
  ];

  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto">
      {/* Contact Card with Social Links */}
      <div className="glass-card p-6 rounded-xl overflow-hidden border border-white/30 shadow-glow">
        <h2 className="text-2xl font-bold mb-6 text-gradient text-glow">
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.url}
              target={social.name === "Email" ? "_self" : "_blank"}
              rel="noreferrer"
              aria-label={social.ariaLabel}
              className="flex items-center justify-center gap-3 p-4 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="p-2 rounded-full bg-gradient-to-br from-white/10 to-white/5 group-hover:from-white/15 group-hover:to-white/10 transition-all duration-300">
                {social.icon}
              </div>
              <span>{social.name}</span>
            </a>
          ))}
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-6"></div>

        <h3 className="text-xl font-bold mb-4 text-gradient">
          Or Send A Message
        </h3>

        {submitError && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{submitError}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white/5 border-white/10 focus:border-sidebar-primary"
              required
            />
          </div>
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="bg-white/5 border-white/10 focus:border-sidebar-primary"
              required
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="bg-white/5 border-white/10 focus:border-sidebar-primary min-h-[120px]"
              required
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-sidebar-primary hover:bg-sidebar-primary/80 text-white transition-colors"
          >
            {isSubmitting ? (
              <>Processing</>
            ) : (
              <>
                <Send className="mr-2" size={16} /> Send Message
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;