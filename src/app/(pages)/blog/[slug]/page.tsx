import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { BlogImageCarousel } from '@/components/BlogImageCarousel';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Philjoseph Orlina`,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: post.seo?.keywords,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const contentParts = post.content.split('[[CAROUSEL]]');

  return (
    <div className="max-w-4xl mx-auto py-8 md:py-16">
        <Button asChild variant="ghost" className="mb-8">
            <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blogs
            </Link>
        </Button>
      <article>
        <header className="text-center mb-8 animate-fade-in">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">{post.title}</h1>
          <p className="text-muted-foreground text-lg">
            By {post.author} on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </header>
        
        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 shadow-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Image
            src={post.image.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
            data-ai-hint={post.image.imageHint}
          />
        </div>
        
        <div className="prose dark:prose-invert max-w-none text-foreground/90 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div dangerouslySetInnerHTML={{ __html: contentParts[0] }} />

          {post.carouselImages && contentParts.length > 1 && (
            <div className="not-prose my-12">
              <BlogImageCarousel images={post.carouselImages} />
            </div>
          )}

          {contentParts[1] && <div dangerouslySetInnerHTML={{ __html: contentParts[1] }} />}
        </div>
        
      </article>
    </div>
  );
}