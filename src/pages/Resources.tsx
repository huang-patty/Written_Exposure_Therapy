import ResourceItem from "@/components/ResourceItem";
import { BookOpen, Video, GraduationCap, FileText } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      title: "National Center for PTSD - WET Overview",
      description: "Comprehensive information about Written Exposure Therapy from the National Center for PTSD, including treatment overview, evidence base, and implementation guidance.",
      tags: ["Clinician", "Overview"],
      link: "https://www.ptsd.va.gov/professional/treat/txessentials/wet_pro.asp",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
    },
    {
      title: "Client Introduction Video",
      description: "An informative video designed for clients to learn about Written Exposure Therapy, what to expect during treatment, and how WET can help with PTSD symptoms.",
      tags: ["Client", "Video"],
      link: "https://www.youtube.com/watch?v=ptSljPTHPoA",
      videoEmbed: "https://www.youtube.com/embed/ptSljPTHPoA",
      icon: <Video className="h-6 w-6 text-primary" />,
    },
    {
      title: "Clinician Training Video",
      description: "Detailed training video for mental health professionals covering the implementation of Written Exposure Therapy, session structure, and clinical considerations.",
      tags: ["Clinician", "Training", "Video"],
      link: "https://www.youtube.com/watch?v=DNuC68b6t9Y",
      videoEmbed: "https://www.youtube.com/embed/DNuC68b6t9Y",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
    },
    {
      title: "WET Continuing Education Overview",
      description: "Information about continuing education opportunities for clinicians, including CE credits and training workshops on Written Exposure Therapy implementation.",
      tags: ["Clinician", "CE / Training"],
      link: "https://www.ptsd.va.gov/professional/continuing_ed/WET_state_science.asp",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
    },
    {
      title: "WET Whiteboard Educational Video",
      description: "An animated whiteboard-style video explaining the core concepts of Written Exposure Therapy, its mechanisms of action, and treatment process in an accessible format.",
      tags: ["Client", "Clinician", "Video"],
      link: "https://www.media.eo.va.gov/ptsd/MP4/wb_written_exposure_therapy.mp4",
      icon: <Video className="h-6 w-6 text-primary" />,
    },
    {
      title: "Treatment Manual",
      description: "The official WET treatment manual by Drs. Sloan and Marx, available for purchase. Includes session-by-session guidance, clinical examples, and implementation protocols. Available in multiple languages.",
      tags: ["Clinician", "Manual"],
      link: "https://www.amazon.com/dp/143384437X",
      icon: <FileText className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">Resources</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive training materials, videos, and educational resources for both clinicians and clients
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <ResourceItem
                key={index}
                title={resource.title}
                description={resource.description}
                tags={resource.tags}
                link={resource.link}
                videoEmbed={resource.videoEmbed}
                icon={resource.icon}
              />
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-xl p-8 border border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
            <p className="text-muted-foreground mb-6">
              For questions about training, implementation, or research inquiries, please visit our contact page or explore the National Center for PTSD resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
              >
                Contact Us
              </a>
              <a
                href="https://www.ptsd.va.gov/professional/index.asp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors font-medium"
              >
                Visit PTSD.VA.gov
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
