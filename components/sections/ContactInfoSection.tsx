import { SectionWrapper } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";
import type { ContactContent } from "@/lib/types";

export interface ContactInfoSectionProps {
  data: ContactContent["info"];
}

export function ContactInfoSection({ data }: ContactInfoSectionProps) {
  return (
    <SectionWrapper spacing="md" muted>
      <FadeIn>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {data.title}
        </h2>
      </FadeIn>

      <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {data.items.map((item) => (
          <StaggerItem key={item.id}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-surface p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-ocean-medium/40 hover:shadow-xl hover:shadow-ocean-medium/15 dark:shadow-black/20 dark:hover:shadow-ocean-medium/20">
              {/* Decorative blob */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-ocean-light/10 blur-2xl transition-all group-hover:bg-ocean-medium/30" />
              
              <div className="relative z-10">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl icon-gradient-bg text-white shadow-md shadow-ocean-medium/30 dark:text-slate-950">
                  {item.type === "email" && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  )}
                  {item.type === "phone" && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  )}
                  {item.type === "whatsapp" && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5c1.5.8 3.3 1.3 5.2 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
                  )}
                  {item.type === "address" && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  )}
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-ocean-medium">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 block text-sm font-medium text-foreground transition-colors hover:text-ocean-deep dark:hover:text-ocean-light"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionWrapper>
  );
}
