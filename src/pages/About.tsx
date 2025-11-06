import { CheckCircle2, Clock, FileText, Users, Video } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">About WET</h1>
            <p className="text-xl text-muted-foreground">
              Understanding Written Exposure Therapy for PTSD
            </p>
          </div>

          {/* What Happens in WET */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl">What Happens in WET?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Written Exposure Therapy consists of 5 structured sessions designed to help individuals process traumatic experiences through writing:
              </p>

              <div className="grid gap-4">
                <div className="flex items-start gap-4 p-4 bg-secondary/20 rounded-lg">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">5 Sessions, 50 Minutes Each</h3>
                    <p className="text-sm text-muted-foreground">
                      A brief, time-limited treatment that respects your schedule while delivering effective results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary/20 rounded-lg">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">30 Minutes of Writing Per Session</h3>
                    <p className="text-sm text-muted-foreground">
                      Each session includes dedicated time to write about the most distressing traumatic experience in detail.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary/20 rounded-lg">
                  <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Therapist Provides Psychoeducation and Guidance</h3>
                    <p className="text-sm text-muted-foreground">
                      Your therapist will help you understand PTSD and guide you through the writing process with evidence-based support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary/20 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">No Outside-of-Session Homework Required</h3>
                    <p className="text-sm text-muted-foreground">
                      All therapeutic work happens during your scheduled sessions, making it easier to maintain treatment adherence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary/20 rounded-lg">
                  <Video className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Telehealth Compatible</h3>
                    <p className="text-sm text-muted-foreground">
                      WET can be effectively delivered via telehealth platforms, increasing accessibility and convenience.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Treatment Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Where WET Can Be Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Clinical Settings</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Mental health clinics
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      VA hospitals
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Private practice
                    </li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Primary Care Settings</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Primary care clinics
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Community health centers
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Integrated care models
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Evidence Base */}
          <Card className="bg-gradient-to-br from-primary/5 to-accent/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Evidence-Based Treatment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/90">
                WET has been rigorously tested and shown to be effective for PTSD related to:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Child abuse",
                  "Combat trauma",
                  "Sexual assault",
                  "Physical assault",
                  "Car accidents",
                  "Natural disasters"
                ].map((trauma, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>{trauma}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground pt-4 border-t">
                Research has demonstrated that WET is as effective as longer PTSD treatments while showing significantly better treatment adherence rates.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
