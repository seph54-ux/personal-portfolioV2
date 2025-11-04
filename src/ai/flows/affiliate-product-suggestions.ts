'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating affiliate product suggestions based on design assets.
 *
 * The flow takes a description of a design asset as input and returns a list of suggested products
 * from affiliate marketplaces that are relevant to the asset.
 *
 * @param {string} assetDescription - A description of the design asset.
 * @returns {Promise<AffiliateProductSuggestion[]>} A promise that resolves to an array of affiliate product suggestions.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AffiliateProductSuggestionSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  marketplace: z.string().describe('The affiliate marketplace the product is available on.'),
  productUrl: z.string().url().describe('The URL of the product on the marketplace.'),
  reason: z.string().describe('Why this product is relevant to the design asset.'),
});

export type AffiliateProductSuggestion = z.infer<typeof AffiliateProductSuggestionSchema>;

const AffiliateProductSuggestionsInputSchema = z.object({
  assetDescription: z.string().describe('A detailed description of the design asset.'),
});

export type AffiliateProductSuggestionsInput = z.infer<typeof AffiliateProductSuggestionsInputSchema>;

const AffiliateProductSuggestionsOutputSchema = z.array(AffiliateProductSuggestionSchema);

export type AffiliateProductSuggestionsOutput = z.infer<typeof AffiliateProductSuggestionsOutputSchema>;

export async function suggestAffiliateProducts(input: AffiliateProductSuggestionsInput): Promise<AffiliateProductSuggestionsOutput> {
  return affiliateProductSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'affiliateProductSuggestionsPrompt',
  input: {schema: AffiliateProductSuggestionsInputSchema},
  output: {schema: AffiliateProductSuggestionsOutputSchema},
  prompt: `You are an AI assistant designed to suggest relevant products from affiliate marketplaces based on a description of a design asset.

  Given the following description of a design asset:
  {{assetDescription}}

  Suggest a list of products (maximum 5) from affiliate marketplaces that would be relevant to someone viewing this asset. For each product, include the product name, the marketplace it is available on, the URL of the product, and a brief explanation of why it is relevant.

  Ensure that the productUrl is a valid URL and the marketplace name is accurate.
  Format the output as a JSON array of AffiliateProductSuggestion objects.
`,
});

const affiliateProductSuggestionsFlow = ai.defineFlow(
  {
    name: 'affiliateProductSuggestionsFlow',
    inputSchema: AffiliateProductSuggestionsInputSchema,
    outputSchema: AffiliateProductSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
