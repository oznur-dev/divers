import { SectionWrapper } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Motion";
import type { HomeContent } from "@/lib/types";
import type { Locale } from "@/lib/i18n/config";
import { localizeHref } from "@/lib/i18n/utils";

export interface ContactCTASectionProps {
  data: HomeContent["contactCta"];
  locale: Locale;
}

export function ContactCTASection({ data, locale }: ContactCTASectionProps) {
  return (
    <SectionWrapper spacing="md">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl cta-gradient-panel px-6 py-14 text-center shadow-2xl shadow-ocean-medium/40 sm:px-12 sm:py-20">
          {/* Mesh gradient overlay */}
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "radial-gradient(at 20% 30%, rgba(255,255,255,0.15) 0px, transparent 50%), radial-gradient(at 80% 70%, rgba(255,255,255,0.1) 0px, transparent 50%)",
            }}
          />
          
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          
          {/* Animated bubbles */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-[10%] top-[20%] h-16 w-16 animate-[bubble_8s_ease-in-out_infinite] rounded-full bg-white" />
            <div className="absolute right-[15%] top-[40%] h-12 w-12 animate-[bubble_6s_ease-in-out_infinite_2s] rounded-full bg-white" />
            <div className="absolute left-[70%] bottom-[30%] h-20 w-20 animate-[bubble_10s_ease-in-out_infinite_4s] rounded-full bg-white" />
          </div>

          {/* Wave bottom */}
          <svg className="absolute bottom-0 left-0 right-0 w-full text-white/10" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
            <path fill="currentColor" d="M0,32 C240,64 480,8 720,32 C960,56 1200,16 1440,40 L1440,80 L0,80 Z" />
          </svg>
          
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-white" />
              {data.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              {data.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              {data.subtitle}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={localizeHref(locale, data.cta.href)}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-base font-semibold text-ocean-deep shadow-xl shadow-ocean-deep/30 ring-1 ring-white/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-2xl hover:shadow-ocean-deep/40 hover:text-ocean-dark"
              >
                {data.cta.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=905382684857"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 text-base font-medium text-white backdrop-blur-sm transition-all hover:border-white/70 hover:bg-white/20"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5c1.5.8 3.3 1.3 5.2 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
