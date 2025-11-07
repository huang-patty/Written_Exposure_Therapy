/**
 * Home Page Component
 * 
 * Landing page of the Written Exposure Therapy website.
 * 
 * Structure:
 * 1. Hero Section - Main title and introduction
 * 2. About WET Section - Overview with BookCard sidebar
 * 3. Key Benefits - List of treatment benefits
 * 4. Call to Action - Links to other pages
 * 
 * Related Components:
 * - BookCard: Displays treatment manual information
 * - Button: UI component for calls-to-action
 */

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BookCard from "@/components/BookCard";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/30 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Written Exposure Therapy
            </h1>
            <p className="text-xl sm:text-2xl text-foreground/80 font-medium">
              For Posttraumatic Stress Disorder
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A brief, evidence-based cognitive-behavioral treatment that delivers results in just 5 sessions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <Link to="/about" className="flex items-center gap-2">
                  Learn More <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/resources">View Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-xl shadow-sm border p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Welcome</h2>
              <p className="text-lg text-center text-muted-foreground mb-8">
                Welcome to the official website for Written Exposure Therapy (WET) hosted by the treatment authors: <span className="font-semibold text-foreground">Denise Sloan, PhD</span> and <span className="font-semibold text-foreground">Brian Marx, PhD</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About WET Section with Book Card */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Main Content - 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Written Exposure Therapy</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground/90 leading-relaxed">
                    Written exposure therapy (WET) is a brief cognitive-behavioral treatment for posttraumatic stress disorder (PTSD). WET was developed from a systematic line of work examining the necessary and sufficient components for effective treatment of PTSD. It has been shown to be effective in reducing PTSD symptoms related to a variety of traumatic events, including child abuse, combat, sexual assault, physical assault, car accidents, and natural disasters. Studies directly comparing WET to more time-intensive PTSD treatments, such as cognitive processing therapy, prolonged exposure therapy, and trauma-focused cognitive behavior therapy for adolescents, have demonstrated that WET is as effective as these more time-intensive treatments, but has significantly better treatment adherence rates. The published treatment manual has been translated into four languages (Japanese, Korean, Chinese, Turkish) with additional translations underway.
                  </p>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="bg-card rounded-xl shadow-sm border p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  Key Advantages
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90">Brief treatment - only 5 sessions required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90">As effective as longer PTSD treatments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90">Better treatment adherence rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90">No homework required between sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90">Can be delivered via telehealth</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Book Card Sidebar - 1 column */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <BookCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to Learn More?</h2>
            <p className="text-lg text-muted-foreground">
              Explore our comprehensive resources, training materials, and information about the treatment developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <Link to="/about">About the Treatment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/team">Meet the Authors</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
