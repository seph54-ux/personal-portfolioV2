'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import type { AffiliateProductSuggestion } from '@/ai/flows/affiliate-product-suggestions';
import { suggestAffiliateProducts } from '@/ai/flows/affiliate-product-suggestions';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Loader2 } from 'lucide-react';
import Link from 'next/link';

const FormSchema = z.object({
  assetDescription: z.string().min(10, {
    message: 'Please provide a more detailed description (at least 10 characters).',
  }),
});

export function AffiliateForm() {
  const [suggestions, setSuggestions] = useState<AffiliateProductSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      assetDescription: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setSuggestions([]);
    try {
      const result = await suggestAffiliateProducts({ assetDescription: data.assetDescription });
      setSuggestions(result);
    } catch (error) {
      console.error('Error suggesting affiliate products:', error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: 'Failed to get product suggestions. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      <div className="animate-fade-in">
        <h2 className="font-headline text-2xl font-semibold mb-4">Find Relevant Products</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="assetDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Design Asset Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., 'A vintage-style logo for a coffee shop with a hand-drawn look'"
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isLoading ? 'Generating...' : 'Get Suggestions'}
            </Button>
          </form>
        </Form>
      </div>
      <div className="space-y-4">
        <h2 className="font-headline text-2xl font-semibold">Suggestions</h2>
        {isLoading && (
            <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                    <Card key={i} className="animate-pulse">
                        <CardHeader>
                            <div className="h-6 w-3/4 bg-muted rounded"></div>
                        </CardHeader>
                        <CardContent>
                            <div className="h-4 w-full bg-muted rounded mb-2"></div>
                            <div className="h-4 w-5/6 bg-muted rounded"></div>
                        </CardContent>
                        <CardFooter>
                            <div className="h-6 w-1/4 bg-muted rounded"></div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        )}

        {!isLoading && suggestions.length === 0 && (
          <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg h-full">
            <p className="text-muted-foreground">Your suggested products will appear here.</p>
          </div>
        )}

        {!isLoading && suggestions.length > 0 && (
          <div className="space-y-4">
            {suggestions.map((item, index) => (
              <Card key={index} className="glassmorphic animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <CardTitle className="text-lg font-headline">{item.productName}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.reason}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Badge variant="secondary">{item.marketplace}</Badge>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={item.productUrl} target="_blank" rel="noopener noreferrer">
                      View Product <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
