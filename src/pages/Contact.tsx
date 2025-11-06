import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // For now, using mailto as fallback (will be replaced with Lovable Cloud later)
    const mailtoLink = `mailto:contact@example.org?subject=${encodeURIComponent(
      `WET Contact Form - ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    toast({
      title: "Opening email client...",
      description: "Your default email client will open with the message pre-filled.",
    });

    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Have questions about Written Exposure Therapy or training opportunities? We'd love to hear from you.
            </p>
          </div>

          {/* Contact Form Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Send Us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label htmlFor="subject">I am a... *</Label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) => setFormData({ ...formData, subject: value })}
                    required
                  >
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clinician">Clinician / Mental Health Professional</SelectItem>
                      <SelectItem value="patient">Patient / Client</SelectItem>
                      <SelectItem value="researcher">Researcher</SelectItem>
                      <SelectItem value="media">Media / Press</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Additional Contact Info */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-xl p-8 border border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                For general information about PTSD and treatment options, visit the{" "}
                <a
                  href="https://www.ptsd.va.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  National Center for PTSD
                </a>
                .
              </p>
              <p>
                If you're a clinician interested in training, please review our{" "}
                <a href="/resources" className="text-primary hover:underline font-medium">
                  resources page
                </a>{" "}
                for information about continuing education opportunities.
              </p>
              <p className="text-sm pt-4 border-t">
                <strong>Note:</strong> This form is for informational inquiries only. If you are experiencing a mental health crisis, please contact the{" "}
                <a
                  href="https://988lifeline.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  988 Suicide & Crisis Lifeline
                </a>{" "}
                or call 988.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
