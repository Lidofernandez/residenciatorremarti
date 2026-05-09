"use client"

import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              {t.about.tagline}
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
              {t.about.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t.about.description1}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {t.about.description2}
            </p>
            <ul className="mt-8 flex flex-col gap-4">
              {t.about.highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="size-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-primary/10 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="font-serif text-6xl font-bold text-primary">25+</div>
                  <div className="mt-2 text-lg text-muted-foreground">{t.about.yearsExcellence}</div>
                </div>
              </div>
            </div>
            {/* Decorative cards */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-card p-6 shadow-lg border border-border">
              <div className="font-serif text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">{t.about.happyResidents}</div>
            </div>
            <div className="absolute -top-6 -right-6 rounded-xl bg-card p-6 shadow-lg border border-border">
              <div className="font-serif text-3xl font-bold text-accent">100%</div>
              <div className="text-sm text-muted-foreground">{t.about.familySatisfaction}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
