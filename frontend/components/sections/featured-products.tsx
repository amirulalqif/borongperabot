import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Product = {
  id: string;
  name: string;
  price: string;
  imageSrc: string;
  badge?: string;
};

const placeholderProducts: Product[] = [
  {
    id: "1",
    name: "Sofa Fabrik Lux",
    price: "RM1,299",
    imageSrc: "/next.svg",
    badge: "Terlaris",
  },
  {
    id: "2",
    name: "Meja Makan Kayu Padu",
    price: "RM899",
    imageSrc: "/next.svg",
  },
  {
    id: "3",
    name: "Kabinet TV Minimalis",
    price: "RM499",
    imageSrc: "/next.svg",
  },
  {
    id: "4",
    name: "Kerusi Rekaan Nordik",
    price: "RM259",
    imageSrc: "/next.svg",
    badge: "Baru",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="produk-unggul" className="container mx-auto px-4 py-14 md:py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Produk Unggul</h2>
          <p className="text-muted-foreground mt-1">Pilihan terbaik untuk setiap ruang rumah anda.</p>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {placeholderProducts.map((p) => (
          <Card key={p.id} className="group">
            <CardHeader className="p-0">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg bg-secondary">
                <Image
                  src={p.imageSrc}
                  alt={p.name}
                  fill
                  className="object-contain p-8 transition-transform duration-300 group-hover:scale-[1.03]"
                />
                {p.badge ? (
                  <div className="absolute left-3 top-3">
                    <Badge>{p.badge}</Badge>
                  </div>
                ) : null}
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium">{p.name}</h3>
                <span className="text-primary font-semibold">{p.price}</span>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button className="w-full" variant="secondary">
                Lihat Butiran
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}


