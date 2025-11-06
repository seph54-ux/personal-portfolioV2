import { PageHeader } from "@/components/PageHeader";
import { affiliateProducts, techStack } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AffiliatesPage() {
  return (
    <>
      <PageHeader
        title="My Setup & Gear"
        subtitle="A curated list of hardware and peripherals I use and recommend for productivity, design, and gaming."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {affiliateProducts.map((product, index) => (
          <Card key={product.id} className="glassmorphic overflow-hidden group flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 100}ms`}}>
            <div className="aspect-video overflow-hidden bg-muted/50 flex items-center justify-center p-4">
              <Image
                src={product.image.imageUrl}
                alt={product.name}
                width={200}
                height={150}
                className="w-auto h-auto max-w-[200px] max-h-[150px] object-contain transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={product.image.imageHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="font-headline text-xl">
                {product.name}
              </CardTitle>
              <CardDescription className="text-sm !mt-1">
                Via <span className="font-semibold">{product.marketplace}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm">{product.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                {product.tags.map(tagKey => {
                    const tag = techStack[tagKey];
                    return tag ? <Badge key={tagKey} variant="secondary">{tag.name}</Badge> : null;
                })}
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href={product.url} target="_blank" rel="noopener noreferrer">
                  Find It <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12 text-sm text-muted-foreground">
        <p>Disclaimer: The links on this page are affiliate links. If you make a purchase through them, I may earn a small commission at no extra cost to you.</p>
      </div>
    </>
  );
}

    