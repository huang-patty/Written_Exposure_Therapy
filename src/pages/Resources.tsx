import ResourceItem from "@/components/ResourceItem";
import { BookOpen, Video, GraduationCap, FileText, Globe } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      title: "National Center for PTSD - WET Overview",
      description:
        "Comprehensive information about Written Exposure Therapy from the National Center for PTSD, including treatment overview, evidence base, and implementation guidance.",
      tags: ["Clinician", "Overview"],
      link: "https://www.ptsd.va.gov/understand_tx/written_exposure_therapy.asp",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
    },
    {
      title: "Client Introduction Video",
      description:
        "An informative video designed for clients to learn about Written Exposure Therapy, what to expect during treatment, and how WET can help with PTSD symptoms.",
      tags: ["Client", "Video"],
      link: "https://www.youtube.com/watch?v=ptSljPTHPoA",
      videoEmbed: "https://www.youtube.com/embed/ptSljPTHPoA",
      icon: <Video className="h-6 w-6 text-primary" />,
    },
    {
      title: "Clinician Description of WET",
      description:
        "A descriptive overview for mental health professionals covering the background of Written Exposure Therapy, session structure, and clinical considerations.",
      tags: ["Clinician", "Overview", "Video"],
      link: "https://www.youtube.com/watch?v=DNuC68b6t9Y",
      videoEmbed: "https://www.youtube.com/embed/DNuC68b6t9Y",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
    },
    {
      title: "WET Continuing Education Overview",
      description:
        "Information about continuing education opportunities for clinicians, including CE credits and training workshops on Written Exposure Therapy implementation.",
      tags: ["Clinician", "CE / Training"],
      link: "https://www.ptsd.va.gov/professional/continuing_ed/WET_state_science.asp",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
    },
    {
      title: "WET Whiteboard Educational Video",
      description:
        "A resource for clients: An animated whiteboard-style video explaining the core concepts of Written Exposure Therapy, its mechanisms of action, and treatment process in an accessible format.",
      tags: ["Client", "Video"],
      link: "https://www.media.eo.va.gov/ptsd/MP4/wb_written_exposure_therapy.mp4",
      icon: <Video className="h-6 w-6 text-primary" />,
    },
    {
      title: "WET Training Modules",
      description:
        "The official WET training by Drs. Sloan and Marx. Includes session-by-session guidance, clinical examples, and implementation protocols.",
      tags: ["Clinician", "Manual"],
      link: "https://www.pesi.com/item/written-exposure-therapy-wet-ptsd-evidencebased-treatment-reduced-dropouts-improved-outcomes-sessions-144320?_gl=1*1vlytcj*_up*MQ..&gclid=ac7589dfa54d1e591092e0cb1e96cf20&gclsrc=3p.ds",
      icon: <FileText className="h-6 w-6 text-primary" />,
    },
    {
      title: "Publisher's Website (APA) - Written Exposure Therapy for PTSD, Second Edition",
      description:
        "Purchase the Second Edition directly from the American Psychological Association. APA members may receive a discount. Information on translated versions may also be found here.",
      tags: ["Clinician", "Publisher", "Manual"],
      link: "https://www.apa.org/pubs/books/written-exposure-therapy-ptsd-second-edition",
      icon: <Globe className="h-6 w-6 text-primary" />,
    },
    {
      title: "Peer-Reviewed Publications on Written Exposure Therapy",
      description:
        "Peer-reviewed research examining the effectiveness, outcomes, and clinical applications of Written Exposure Therapy across diverse populations.",
      tags: ["Research", "Published Studies", "Evidence-Based"],
      link: "/sources",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
    },
  ];

  // 1. Isolate the "Published Studies" card
  const topResource = resources.find((r) =>
    r.title.includes("Peer-Reviewed Publications")
  );

  // 2. Filter out the top resource to get the rest
  const otherResources = resources.filter(
    (r) => r.title !== topResource?.title
  );

  // 3. Split the remaining resources into Video vs. Non-Video (Text/Link)
  const videoResources = otherResources.filter((r) => r.videoEmbed);
  const textResources = otherResources.filter((r) => !r.videoEmbed);

  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">Resources</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive training materials, videos, and educational
              resources for both clinicians and clients
            </p>
          </div>

          {/* 1. Top Full-Width Resource (Published Studies) */}
          {topResource && (
            <div className="w-full">
              <ResourceItem
                title={topResource.title}
                description={topResource.description}
                tags={topResource.tags}
                link={topResource.link}
                videoEmbed={topResource.videoEmbed}
                icon={topResource.icon}
              />
            </div>
          )}

          {/* 2. Video Resources Grid */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">
              Video Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {videoResources.map((resource, index) => (
                <ResourceItem
                  key={`video-${index}`}
                  title={resource.title}
                  description={resource.description}
                  tags={resource.tags}
                  link={resource.link}
                  videoEmbed={resource.videoEmbed}
                  icon={resource.icon}
                />
              ))}
            </div>
          </div>

          {/* 3. Non-Video Resources Grid (Compact) */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">
              Additional Documentation & Tools
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {textResources.map((resource, index) => (
                <ResourceItem
                  key={`text-${index}`}
                  title={resource.title}
                  description={resource.description}
                  tags={resource.tags}
                  link={resource.link}
                  videoEmbed={resource.videoEmbed}
                  icon={resource.icon}
                />
              ))}
            </div>
          </div>

          {/* Additional Info Footer */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-xl p-8 border border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
            <p className="text-muted-foreground mb-6">
              For questions about training, implementation, or research
              inquiries, please contact us.
              <br />
              <br />
              <span className="font-semibold text-foreground">
                Looking for a Provider?
              </span>{" "}
              If you are a client looking for a WET therapist, please submit an
              inquiry directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;