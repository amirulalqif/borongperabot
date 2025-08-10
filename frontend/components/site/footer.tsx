import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/40">
      <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-md bg-primary" />
            <span className="text-lg font-semibold">Borong Perabot</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-prose">
            Perabot moden, berkualiti dan mampu milik untuk setiap ruang kediaman.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Pautan</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:text-primary" href="/">Utama</Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/tentang-kami">Tentang Kami</Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/hubungi-kami">Hubungi Kami</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Kategori Popular</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Sofa & Kerusi</li>
            <li>Meja Makan</li>
            <li>Kabinet & Rak</li>
            <li>Tilam & Katil</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Hubungi</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>E-mel: hello@borongperabot.com</li>
            <li>
              WhatsApp: <a className="hover:text-primary" href="https://wa.me/60196500088" target="_blank" rel="noopener noreferrer">+60196500088</a>
            </li>
            <li>Waktu: Isnin - Jumaat, 9 pagi - 6 petang</li>
          </ul>
        </div>
      </div>
      <Separator />
      <div className="container mx-auto px-4 py-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Borong Perabot. Hak cipta terpelihara.</p>
        <div className="text-xs text-muted-foreground flex items-center gap-3">
          <Link href="#">Terma</Link>
          <span>•</span>
          <Link href="#">Privasi</Link>
        </div>
      </div>
    </footer>
  );
}


