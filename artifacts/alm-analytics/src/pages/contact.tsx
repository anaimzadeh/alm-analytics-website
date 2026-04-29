import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

import { useDocumentMeta } from "@/hooks/use-document-meta";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// TODO: Replace with actual endpoint using import.meta.env.VITE_CONTACT_ENDPOINT
// const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required." }),
  email: z.string().email({ message: "A valid email is required." }),
  organization: z.string().min(2, { message: "Organization is required." }),
  projectType: z.string().min(1, { message: "Please select a project type." }),
  message: z.string().min(10, { message: "Please provide a brief message." }),
});

export default function Contact() {
  useDocumentMeta({
    title: "Contact | ALM Analytics",
    description: "Get in touch to discuss your data science and analytics needs.",
  });

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      projectType: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for reaching out. I will get back to you shortly.",
      });
      form.reset();
    }, 1000);
  }

  return (
    <div className="min-h-[100dvh] pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 max-w-6xl mx-auto">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Contact</h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Have a dashboard, data pipeline, AI workflow, or analytics problem you want to bring online?
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">Direct Email</h3>
              <a 
                href="mailto:hello@almanalytics.net" 
                className="text-2xl font-medium text-foreground hover:text-primary transition-colors flex items-center group"
              >
                <Mail className="mr-3 h-6 w-6 text-primary" />
                hello@almanalytics.net
                <ArrowRight className="ml-3 h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-muted-foreground" />
              </a>
            </div>
            
            <div className="text-sm text-muted-foreground leading-relaxed">
              <p>
                Based in the United States. Available for specialized consulting, technical prototyping, and advisory engagements.
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
              {isSuccess ? (
                <div className="py-16 text-center flex flex-col items-center justify-center space-y-4">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Inquiry Received</h3>
                  <p className="text-muted-foreground max-w-md">
                    Thank you for your interest. I'll review your requirements and respond via email within 1-2 business days.
                  </p>
                  <Button variant="outline" className="mt-8" onClick={() => setIsSuccess(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Jane Doe" {...field} className="bg-background" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="jane@example.com" {...field} className="bg-background" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organization / Agency</FormLabel>
                          <FormControl>
                            <Input placeholder="Department of..." {...field} className="bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Primary Area of Interest</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background">
                                <SelectValue placeholder="Select a project type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Analytics Dashboards">Analytics Dashboards</SelectItem>
                              <SelectItem value="Data Engineering">Data Engineering / Pipelines</SelectItem>
                              <SelectItem value="Data Science">Data Science / ML Models</SelectItem>
                              <SelectItem value="AI Workflows">AI / RAG Workflows</SelectItem>
                              <SelectItem value="Advisory">Technical Advisory</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Details</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Briefly describe the operational problem or technical requirement..." 
                              className="min-h-[120px] bg-background" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Submit Inquiry"}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
