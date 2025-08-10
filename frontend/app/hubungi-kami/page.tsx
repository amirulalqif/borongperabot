import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Hubungi Kami | Borong Perabot",
  description: "Hubungi Borong Perabot untuk pertanyaan, sebut harga, dan bantuan pelanggan.",
  alternates: { canonical: "/hubungi-kami" },
};

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/9KXMYXBiGKxAEdGT8?g_st=iw";
const STORE_EMAIL = "hello@borongperabot.com";

export default function HubungiKamiPage() {
  return (
    <div className="container mx-auto px-4 py-10 md:py-14">
      <section className="mb-8 md:mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Hubungi Kami</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Ada pertanyaan tentang produk atau ingin dapatkan sebut harga? Hantarkan mesej melalui borang berikut
          atau hubungi kami secara terus.
        </p>
      </section>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Borang */}
        <Card>
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">Borang Pertanyaan</h2>
            <ContactForm />
          </CardContent>
        </Card>

        {/* Maklumat & Peta */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6 md:p-8 space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight">Maklumat Perhubungan</h2>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href={`https://wa.me/60196500088`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  WhatsApp: +60196500088
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${STORE_EMAIL}`} className="hover:underline">{STORE_EMAIL}</a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-semibold tracking-tight mb-3">Lokasi & Peta</h3>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-secondary to-accent/70 ring-1 ring-border">
                <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground px-4 text-center">
                  Peta Placeholder. Klik butang di bawah untuk membuka lokasi di Google Maps.
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <Button asChild variant="secondary">
                  <Link href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-4 w-4" /> Buka di Google Maps
                  </Link>
                </Button>
              </div>
              <Separator className="my-6" />
              <p className="text-xs text-muted-foreground">
                Nota: Untuk MVP, peta tertanam belum diaktifkan. Pautan Google Maps akan dibuka di tab baharu.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}


