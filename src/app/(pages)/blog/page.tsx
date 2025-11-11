
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function BlogListPage() {
  return (
    <>
      <PageHeader
        title="Behind the Pixels"
        subtitle="Stories & insights from my journey in design, gaming, and creative tech."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {blogPosts.map((post, index) => (
          <Card key={post.slug} className="glassmorphic overflow-hidden group flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 100}ms`}}>
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={post.image.imageUrl}
                  alt={post.title}
                  width={600}
                  height={338}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={post.image.imageHint}
                />
              </div>
            </Link>
            <CardHeader>
              <CardTitle className="font-headline text-xl">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription>
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="p-0 h-auto">
                <Link href={`/blog/${post.slug}`}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
