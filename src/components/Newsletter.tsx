import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { BellRing } from "lucide-react";

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);

    try {
      // Send data to the local backend route that saves to the JSON file
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json(); // Parse the JSON response from the server

      if (response.ok) {
        // Success (Status 200)
        toast({
          title: "Subscribed!",
          description: "You've been added to our mailing list.",
        });
        setEmail(""); // Clear input
      } else if (response.status === 409) {
        // Duplicate Email (Status 409)
        toast({
          title: "Already Subscribed",
          description: "This email is already on our list.",
        });
      } else {
        // Other Server Errors
        toast({
          variant: "destructive",
          title: "Error",
          description: data.message || "Could not subscribe. Please try again.",
        });
      }
    } catch (error) {
      // Network Errors (Server down, no internet)
      console.error(error);
      toast({
        variant: "destructive",
        title: "Network Error",
        description: "Please check your connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-muted/50 border-muted-foreground/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <BellRing className="h-5 w-5 text-primary" />
          Join our Mailing List
        </CardTitle>
        <CardDescription>
          Stay up to date with the latest training opportunities and research updates.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
          <Input 
            type="email" 
            placeholder="Enter your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-background"
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Joining..." : "Subscribe"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Newsletter;