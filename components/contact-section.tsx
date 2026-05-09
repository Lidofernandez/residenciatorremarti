"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [serviceInterest, setServiceInterest] = useState("")
  const [submitError, setSubmitError] = useState("")
  const { t } = useLanguage()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    const form = e.currentTarget
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      serviceInterest,
      questions: (form.elements.namedItem("questions") as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("server_error")
      setIsSubmitted(true)
    } catch {
      setSubmitError(t.contact.submitError)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-primary/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Content */}
          <div>
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 mb-4">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-sm font-medium text-accent">{t.contact.tagline}</span>
            </div>

            <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
              {t.contact.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t.contact.description}
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div>
                <h3 className="font-semibold text-foreground">{t.contact.visitUs}</h3>
                <p className="mt-1 text-muted-foreground whitespace-pre-line">
                  {t.contact.address}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{t.contact.callUs}</h3>
                <p className="mt-1 text-muted-foreground">
                  {t.contact.phone}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{t.contact.hours}</h3>
                <p className="mt-1 text-muted-foreground whitespace-pre-line">
                  {t.contact.hoursText}
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
                  {t.contact.thankYou}
                </h3>
                <p className="mt-2 text-muted-foreground max-w-sm">
                  {t.contact.thankYouMessage}
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsSubmitted(false)
                    setServiceInterest("")
                  }}
                  className="mt-6"
                >
                  {t.contact.submitAnother}
                </Button>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-xl font-semibold text-card-foreground">
                  {t.contact.formTitle}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t.contact.formDescription}
                </p>

                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="firstName">{t.contact.firstName}</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="María"
                        required
                        autoComplete="given-name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="lastName">{t.contact.lastName}</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="García López"
                        required
                        autoComplete="family-name"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone">{t.contact.phoneLabel}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+34 600 123 456"
                      required
                      autoComplete="tel"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="serviceInterest">{t.contact.serviceInterest}</Label>
                    <input
                      type="hidden"
                      name="serviceInterest"
                      value={serviceInterest}
                      required
                    />
                    <Select value={serviceInterest} onValueChange={setServiceInterest}>
                      <SelectTrigger id="serviceInterest" className="w-full">
                        <SelectValue placeholder={t.contact.serviceInterestPlaceholder} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>{t.contact.stayTypes.longTermLabel}</SelectLabel>
                          <SelectItem value={t.contact.stayTypes.indefiniteStay}>
                            {t.contact.stayTypes.indefiniteStay}
                          </SelectItem>
                          <SelectItem value={t.contact.stayTypes.dayCenterStay}>
                            {t.contact.stayTypes.dayCenterStay}
                          </SelectItem>
                        </SelectGroup>
                        <SelectSeparator />
                        <SelectGroup>
                          <SelectLabel>{t.contact.stayTypes.temporaryLabel}</SelectLabel>
                          <SelectItem value={t.contact.stayTypes.recoveryStay}>
                            {t.contact.stayTypes.recoveryStay}
                          </SelectItem>
                          <SelectItem value={t.contact.stayTypes.postSurgeryRehab}>
                            {t.contact.stayTypes.postSurgeryRehab}
                          </SelectItem>
                          <SelectItem value={t.contact.stayTypes.familyRespite}>
                            {t.contact.stayTypes.familyRespite}
                          </SelectItem>
                          <SelectItem value={t.contact.stayTypes.specificDayVacation}>
                            {t.contact.stayTypes.specificDayVacation}
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="questions">{t.contact.questions}</Label>
                    <Textarea
                      id="questions"
                      name="questions"
                      placeholder={t.contact.questionsPlaceholder}
                      className="min-h-32 resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting || !serviceInterest}>
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
                        {t.contact.sending}
                      </>
                    ) : (
                      t.contact.submit
                    )}
                  </Button>

                  {submitError && (
                    <p className="text-sm text-destructive text-center">{submitError}</p>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
