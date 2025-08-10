"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    // eslint-disable-next-line no-console
    console.log("Hubungi Kami (MVP):", payload);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      (e.currentTarget as HTMLFormElement).reset();
    }, 700);
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4">
      <div className="grid gap-2">
        <label htmlFor="nama" className="text-sm font-medium">Nama Penuh</label>
        <Input id="nama" name="nama" placeholder="Contoh: Ali Bin Abu" required />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium">E-mel</label>
        <Input id="email" name="email" type="email" placeholder="nama@emel.com" required />
      </div>
      <div className="grid gap-2">
        <label htmlFor="telefon" className="text-sm font-medium">Nombor Telefon</label>
        <Input id="telefon" name="telefon" type="tel" placeholder="Contoh: +6012xxxxxxx" />
      </div>
      <div className="grid gap-2">
        <label htmlFor="subjek" className="text-sm font-medium">Subjek</label>
        <Input id="subjek" name="subjek" placeholder="Contoh: Sebut Harga Meja Makan" />
      </div>
      <div className="grid gap-2">
        <label htmlFor="mesej" className="text-sm font-medium">Mesej</label>
        <Textarea id="mesej" name="mesej" rows={5} placeholder="Tulis mesej anda di sini..." required />
      </div>
      <div className="pt-2">
        <Button type="submit" disabled={loading} className="min-w-40">
          {loading ? "Menghantar..." : "Hantar Mesej"}
        </Button>
        {submitted && (
          <span className="ml-3 text-sm text-green-600">Terima kasih! Mesej anda telah dihantar.</span>
        )}
      </div>
    </form>
  );
}


