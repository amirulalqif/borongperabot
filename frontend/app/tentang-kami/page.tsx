import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Tentang Kami | Borong Perabot",
  description:
    "Kenali kisah Borong Perabot, misi kami, dan komitmen terhadap kualiti serta nilai untuk pelanggan di Malaysia.",
  alternates: { canonical: "/tentang-kami" },
};

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/9KXMYXBiGKxAEdGT8?g_st=iw";

export default function TentangKamiPage() {
  return (
    <div className="container mx-auto px-4 py-10 md:py-14">
      {/* Hero */}
      <section className="mb-10 md:mb-14">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Tentang Kami
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Di Borong Perabot, kami percaya setiap ruang kediaman berhak tampak
          cantik, selesa, dan berfungsi dengan harga yang berpatutan.
        </p>
      </section>

      <div className="grid gap-10 md:gap-12 lg:grid-cols-3">
        {/* Cerita & Misi */}
        <section className="lg:col-span-2 space-y-8">
          <Card>
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold tracking-tight">Kisah Kami</h2>
              <p className="mt-3 text-muted-foreground">
                Bermula sebagai perniagaan kecil keluarga, Borong Perabot kini
                berkembang menjadi destinasi pilihan untuk perabot moden dan tahan lama.
                Kami bekerjasama dengan pembekal yang dipercayai untuk memastikan setiap
                produk memenuhi standard kualiti yang tinggi.
              </p>
              <p className="mt-3 text-muted-foreground">
                Fokus kami adalah menawarkan rekaan bergaya yang praktikal—sesuai
                untuk gaya hidup masa kini, dari ruang tamu hingga ke bilik tidur.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold tracking-tight">Misi Kami</h2>
              <ul className="mt-4 grid gap-3">
                {[
                  "Menyediakan perabot berkualiti pada harga mampu milik.",
                  "Mengutamakan ketahanan dan fungsi dalam setiap rekaan.",
                  "Memberi pengalaman membeli-belah yang mesra pelanggan.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Galeri ringkas */}
        <aside className="space-y-6">
          <h3 className="text-xl font-semibold tracking-tight">Galeri</h3>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative aspect-square rounded-lg bg-gradient-to-br from-secondary to-accent/70 ring-1 ring-border"
              >
                <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground">
                  Imej Contoh {i}
                </div>
              </div>
            ))}
          </div>

          <Separator />

          {/* Lokasi ringkas dengan pautan Google Maps */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold tracking-tight">Lokasi Kami</h3>
            <p className="text-sm text-muted-foreground">
              Untuk arah tuju, sila lihat lokasi kami di Google Maps.
            </p>
            <Link
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border bg-background px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              <MapPin className="h-4 w-4" /> Lihat di Google Maps
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}


