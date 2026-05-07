"use client"

import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/language-context"
import type { Locale } from "@/lib/translations"

const locales: { value: Locale; label: string }[] = [
  { value: "es", label: "Español" },
  { value: "ca", label: "Català" },
]

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Change language">
          <Globe className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc.value}
            onClick={() => setLocale(loc.value)}
            className={locale === loc.value ? "bg-accent" : ""}
          >
            {loc.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
