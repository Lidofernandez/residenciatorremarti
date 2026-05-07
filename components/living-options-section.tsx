import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const livingOptions = [
  {
    name: "Independent Living",
    description: "Maintain your active lifestyle with the freedom you deserve. Enjoy maintenance-free living with access to community amenities and social activities.",
    features: ["Private apartments", "Housekeeping services", "Social activities", "Transportation"],
  },
  {
    name: "Assisted Living",
    description: "Receive personalized support while maintaining independence. Our caring staff provides assistance with daily activities tailored to your needs.",
    features: ["24/7 care staff", "Medication management", "Personal care assistance", "Wellness programs"],
  },
  {
    name: "Memory Care",
    description: "Specialized care for those with Alzheimer&apos;s or dementia. Our secure environment and trained staff provide compassionate, dignified care.",
    features: ["Secure environment", "Specialized programming", "Trained caregivers", "Family support"],
  },
]

export function LivingOptionsSection() {
  return (
    <section id="living" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Living Options
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            Find Your Perfect Living Arrangement
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer a range of living options to meet your unique needs and preferences.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {livingOptions.map((option, index) => (
            <div
              key={option.name}
              className={`relative rounded-2xl p-8 ${
                index === 1 
                  ? "bg-primary text-primary-foreground shadow-xl scale-105" 
                  : "bg-card border border-border shadow-sm"
              }`}
            >
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-medium text-accent-foreground">
                  Most Popular
                </div>
              )}
              <h3 className={`font-serif text-xl font-semibold ${
                index === 1 ? "text-primary-foreground" : "text-card-foreground"
              }`}>
                {option.name}
              </h3>
              <p className={`mt-4 text-sm leading-relaxed ${
                index === 1 ? "text-primary-foreground/80" : "text-muted-foreground"
              }`}>
                {option.description}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <ArrowRight className={`size-4 ${
                      index === 1 ? "text-primary-foreground/60" : "text-accent"
                    }`} />
                    <span className={index === 1 ? "text-primary-foreground/90" : "text-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button 
                className="mt-8 w-full" 
                variant={index === 1 ? "secondary" : "default"}
                asChild
              >
                <Link href="#contact">Learn More</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
