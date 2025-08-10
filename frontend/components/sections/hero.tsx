import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-accent/40 to-background" />
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Perabot Moden untuk Rumah Idaman
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Serikan ruang kediaman anda dengan koleksi perabot bergaya, tahan lama,
            dan mampu milik daripada Borong Perabot.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="#produk-unggul">Lihat Produk Unggul</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/hubungi-kami">Dapatkan Sebut Harga</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


