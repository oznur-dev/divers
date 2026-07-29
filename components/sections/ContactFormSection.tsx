"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { SectionWrapper } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Motion";
import type { ContactContent } from "@/lib/types";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Lütfen adınızı giriniz.";
  if (!values.email.trim()) {
    errors.email = "Lütfen e-posta adresinizi giriniz.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Lütfen geçerli bir e-posta giriniz.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Mesaj en az 10 karakter olmalıdır.";
  }
  return errors;
}

export interface ContactFormSectionProps {
  data: ContactContent["form"];
}

export function ContactFormSection({ data }: ContactFormSectionProps) {
  const [values, setValues] = React.useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [status, setStatus] = React.useState<"idle" | "loading" | "success">(
    "idle",
  );

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((prev) => ({ ...prev, [field]: e.target.value }));

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    // Placeholder: when a backend exists, POST `values` to the API here.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
    setValues({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper spacing="md">
      <div className="grid gap-10 md:grid-cols-5 md:gap-12">
        <FadeIn className="md:col-span-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {data.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {data.subtitle}
            </p>
            <div className="mt-6 space-y-3 rounded-2xl border border-border bg-surface p-5">
              <div className="flex items-center gap-3 text-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg icon-gradient-bg text-white shadow-md dark:text-slate-950">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </span>
                <div>
                  <p className="font-semibold text-foreground">Hızlı Yanıt</p>
                  <p className="text-xs text-muted-foreground">1 iş günü içinde dönüş</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg icon-gradient-bg text-white shadow-md dark:text-slate-950">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </span>
                <div>
                  <p className="font-semibold text-foreground">Güvenli</p>
                  <p className="text-xs text-muted-foreground">Bilgileriniz korunur</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg icon-gradient-bg text-white shadow-md dark:text-slate-950">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6M23 11h-6"/></svg>
                </span>
                <div>
                  <p className="font-semibold text-foreground">Profesyonel Destek</p>
                  <p className="text-xs text-muted-foreground">Uzman danışmanlar</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.05} className="md:col-span-3">
          <form
            onSubmit={onSubmit}
            noValidate
            className="relative space-y-4 overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-xl shadow-ocean-light/10 sm:p-8"
          >
            {/* Decorative blob */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-ocean-light/10 blur-3xl dark:bg-ocean-medium/10" />
            
            <div className="relative">
              <Input
                label="Adınız Soyadınız"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={update("name")}
                errorMessage={errors.name}
                required
              />
            </div>
            <div className="relative">
              <Input
                label="E-posta"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={update("email")}
                errorMessage={errors.email}
                required
              />
            </div>
            <div className="relative">
              <Textarea
                label="Mesajınız"
                name="message"
                value={values.message}
                onChange={update("message")}
                errorMessage={errors.message}
                required
              />
            </div>

            <div className="relative flex flex-col items-stretch justify-between gap-4 pt-2 sm:flex-row sm:items-center">
              <p
                role={status === "success" ? "status" : undefined}
                aria-live="polite"
                className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400"
              >
                {status === "success" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                )}
                {status === "success" ? data.successMessage : ""}
              </p>
              <Button
                type="submit"
                variant="primary"
                size="md"
                loading={status === "loading"}
                className="w-full sm:w-auto"
              >
                {data.submitLabel}
              </Button>
            </div>
          </form>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
