"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ApiProduct = {
  id: string;
  name: string;
  price: number;
  currency: string;
  image_url?: string | null;
  category?: string | null;
  featured?: boolean;
};

const currencyFormat = (amount: number, currency: string) => {
  try {
    return new Intl.NumberFormat("ms-MY", { style: "currency", currency }).format(amount);
  } catch {
    return `RM${amount.toFixed(2)}`;
  }
};

export function FeaturedProductsSection() {
  const [products, setProducts] = useState<ApiProduct[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";
    fetch(`${baseUrl}/products`, { signal: controller.signal })
      .then(async (res) => {
        if (!res.ok) throw new Error(`Gagal memuat produk: ${res.status}`);
        return res.json();
      })
      .then((data: ApiProduct[]) => setProducts(data))
      .catch((err) => setError(err.message));
    return () => controller.abort();
  }, []);

  const list = products ?? [];

  return (
    <section id="produk-unggul" className="container mx-auto px-4 py-14 md:py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Produk Unggul</h2>
          <p className="text-muted-foreground mt-1">Pilihan terbaik untuk setiap ruang rumah anda.</p>
        </div>
      </div>
      {error ? (
        <p className="text-sm text-red-600">{error}</p>
      ) : null}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p) => (
          <Card key={p.id} className="group">
            <CardHeader className="p-0">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg bg-secondary">
                <Image
                  src={p.image_url || "/next.svg"}
                  alt={p.name}
                  fill
                  className="object-contain p-8 transition-transform duration-300 group-hover:scale-[1.03]"
                />
                {p.featured ? (
                  <div className="absolute left-3 top-3">
                    <Badge>Terpilih</Badge>
                  </div>
                ) : null}
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium">{p.name}</h3>
                <span className="text-primary font-semibold">{currencyFormat(p.price, p.currency)}</span>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button className="w-full" variant="secondary">
                Lihat Butiran
              </Button>
            </CardFooter>
          </Card>
        ))}
        {products === null && (
          <div className="col-span-full text-sm text-muted-foreground">Memuatkan produk...</div>
        )}
        {products?.length === 0 && (
          <div className="col-span-full text-sm text-muted-foreground">Tiada produk untuk dipaparkan.</div>
        )}
      </div>
    </section>
  );
}


