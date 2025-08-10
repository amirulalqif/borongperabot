import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">Halaman Tidak Ditemui</h1>
      <p className="mt-3 text-muted-foreground">
        Maaf, halaman yang anda cari tiada atau telah dipindahkan.
      </p>
      <div className="mt-6">
        <Button asChild>
          <Link href="/">Kembali ke Utama</Link>
        </Button>
      </div>
    </div>
  );
}


