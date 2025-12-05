/**
 * File: src/pages/Team.tsx
 * Purpose: Team/authors page listing the treatment developers and bios.
 * Influenced by: UI Card components; Influences: linked from navigation.
 */

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const authors = [
    {
      name: "Denise M. Sloan, Ph.D.",
      credentials: "Associate Director for Research, National Center for PTSD",
      bio: `Denise M. Sloan, Ph.D., is Associate Director for Research in the National Center for PTSD, Behavioral Science Division at VA Boston Healthcare System and a Professor in the Department of Psychiatry at Boston University School of Medicine. Dr. Sloan received her B.A. in psychology from Rutgers University and her M.A. and Ph.D. in clinical psychology from the State University of New York at Binghamton. She completed her clinical internship at Brown University and a post-doctoral fellowship at Harvard Medical School and Massachusetts General Hospital.

Dr. Sloan's research has been continuously funded by the Department of Veterans Affairs (DVA) and the National Institute of Mental Health for the past 20 years. She has over 160 peer-reviewed publications. Dr. Sloan is a member of the American Psychological Association where she is a fellow in Divisions 12 (Clinical), 38 (Health), and 56 (Trauma Psychology). She has served on several editorial boards of scientific journals and is currently a guest editor for the Journal of Traumatic Stress and an Associate Editor for the journal Emotion.

Her work has been recognized with numerous awards including the 2018 Robert S. Laufer Memorial Award for Outstanding Scientific Achievement and the 2017 award for Outstanding Contributions to Science in the Field of Traumatic Stress from the International Society for Traumatic Stress Studies.`,
      imageUrl: "/assets/Denise.JPG",
    },
    {
      name: "Brian P. Marx, Ph.D.",
      credentials: "Deputy Director, National Center for PTSD",
      bio: `Brian P. Marx, Ph.D., is the Deputy Director of the National Center for PTSD and Associate Director for Research in the National Center for PTSD, Behavioral Science Division at VA Boston Healthcare System. He is a Professor in the Department of Psychiatry at Boston University School of Medicine. Dr. Marx received his B.A. in psychology from the University of Minnesota and his M.A. and Ph.D. in clinical psychology from the University at Buffalo, SUNY. He completed his clinical internship at the VA Palo Alto Healthcare System and a post-doctoral fellowship at Harvard Medical School and Massachusetts General Hospital.

Dr. Marx's research has been continuously funded by the Department of Defense (DoD) and the Department of Veterans Affairs (DVA) for the past 20 years. He has over 150 peer-reviewed publications. Dr. Marx is a member of the American Psychological Association where he is a fellow in Division 56 (Trauma Psychology). He has served on several editorial boards of scientific journals and is currently the Editor-in-Chief of the Journal of Traumatic Stress.

His work has been recognized with numerous awards including the 2018 Robert S. Laufer Memorial Award for Outstanding Scientific Achievement from the International Society for Traumatic Stress Studies, 2011 Early Career Award for Outstanding Contributions to Research from DVA's Health Services Research & Development (HSR&D) Service, and the 2004 Outstanding Dissertation Award from the International Society for Traumatic Stress Studies.`,
      imageUrl: "/assets/Marx.JPG",
    },
  ];

  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">Treatment Authors</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the developers of Written Exposure Therapy, leading researchers in trauma psychology and PTSD treatment
            </p>
          </div>

          {/* Author Cards */}
          <div className="space-y-8">
            {authors.map((author, index) => (
              <Card key={index} className="overflow-hidden bg-card/50">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Image Section - Portrait Rectangle */}
                    <div className="w-full md:w-64 flex-shrink-0">
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border bg-muted shadow-sm">
                        <img
                          src={author.imageUrl}
                          alt={author.name}
                          className="absolute inset-0 h-full w-full object-cover object-top"
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold">{author.name}</h3>
                        <p className="text-primary font-medium text-lg">
                          {author.credentials}
                        </p>
                      </div>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        {author.bio.split("\n\n").map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Training CTA */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 text-center space-y-4 border border-primary/20">
            <h2 className="text-2xl sm:text-3xl font-bold">
              More Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Clinicians seeking training in Written Exposure Therapy can explore
              available resources and continuing education opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <Link to="/resources">View Training Resources</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;