"use client"

import { Heart, Home, Users, Utensils, Activity, Shield } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const icons = [Heart, Home, Users, Utensils, Activity, Shield]

export function FeaturesSection() {
  const { t } = useLanguage()

  return (
    <section id="amenities" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {t.features.tagline}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            {t.features.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.features.description}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.items.map((feature, index) => {
              const Icon = icons[index]
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl bg-card p-8 shadow-sm border border-border transition-all hover:shadow-md hover:border-primary/20"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-card-foreground">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
