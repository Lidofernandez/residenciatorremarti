"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-primary/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Contact Us
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
              Ready to Learn More?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We would love to hear from you. Fill out the form and our team will 
              reach out to answer your questions and schedule a personalized tour 
              of our community.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div>
                <h3 className="font-semibold text-foreground">Visit Us</h3>
                <p className="mt-1 text-muted-foreground">
                  123 Golden Oaks Lane<br />
                  Serenity Valley, CA 90210
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Call Us</h3>
                <p className="mt-1 text-muted-foreground">
                  (555) 123-4567
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Hours</h3>
                <p className="mt-1 text-muted-foreground">
                  Tours available 7 days a week<br />
                  9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl bg-card p-8 shadow-lg border border-border">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-accent/10">
                  <CheckCircle className="size-8 text-accent" />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-card-foreground">
                  Thank You!
                </h3>
                <p className="mt-2 text-muted-foreground max-w-sm">
                  We have received your information and will be in touch within 24 hours 
                  to discuss how Golden Oaks can be your new home.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6"
                >
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-xl font-semibold text-card-foreground">
                  Request Information
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill out the form below and we will send you a brochure and contact you 
                  to schedule a tour.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        required
                        autoComplete="given-name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Smith"
                        required
                        autoComplete="family-name"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      autoComplete="email"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      autoComplete="tel"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="interest">I am interested in</Label>
                    <select
                      id="interest"
                      name="interest"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="independent">Independent Living</option>
                      <option value="assisted">Assisted Living</option>
                      <option value="memory">Memory Care</option>
                      <option value="tour">Schedule a Tour</option>
                      <option value="general">General Information</option>
                    </select>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your needs or questions..."
                      className="min-h-24 resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <svg
                          className="size-4 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Request Information"
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
