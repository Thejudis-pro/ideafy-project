
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import type { Filters } from '@/types/idea';

interface FilterPanelProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({ filters, onFiltersChange }) => {
  const updateFilter = (key: keyof Filters, value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <Card className="max-w-4xl mx-auto bg-white/50 backdrop-blur-sm border border-slate-200 rounded-2xl">
      <CardContent className="p-6">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label htmlFor="category" className="text-sm font-semibold text-slate-700">
              Category
            </Label>
            <Select value={filters.category} onValueChange={(value) => updateFilter('category', value)}>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Any category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Category</SelectItem>
                <SelectItem value="productivity">Productivity</SelectItem>
                <SelectItem value="ai-tools">AI Tools</SelectItem>
                <SelectItem value="saas">SaaS</SelectItem>
                <SelectItem value="marketplace">Marketplace</SelectItem>
                <SelectItem value="creative-tools">Creative Tools</SelectItem>
                <SelectItem value="social">Social</SelectItem>
                <SelectItem value="fintech">Fintech</SelectItem>
                <SelectItem value="developer-tools">Developer Tools</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="vibe" className="text-sm font-semibold text-slate-700">
              Vibe
            </Label>
            <Select value={filters.vibe} onValueChange={(value) => updateFilter('vibe', value)}>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Any vibe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Vibe</SelectItem>
                <SelectItem value="minimalist">Minimalist</SelectItem>
                <SelectItem value="aesthetic">Aesthetic</SelectItem>
                <SelectItem value="experimental">Experimental</SelectItem>
                <SelectItem value="mobile-first">Mobile First</SelectItem>
                <SelectItem value="retro">Retro</SelectItem>
                <SelectItem value="futuristic">Futuristic</SelectItem>
                <SelectItem value="playful">Playful</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="techStack" className="text-sm font-semibold text-slate-700">
              Tech Stack
            </Label>
            <Select value={filters.techStack} onValueChange={(value) => updateFilter('techStack', value)}>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Any tech" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Tech</SelectItem>
                <SelectItem value="nextjs">Next.js</SelectItem>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="flutter">Flutter</SelectItem>
                <SelectItem value="webflow">Webflow</SelectItem>
                <SelectItem value="bubble">Bubble</SelectItem>
                <SelectItem value="supabase">Supabase</SelectItem>
                <SelectItem value="firebase">Firebase</SelectItem>
                <SelectItem value="mobile">Mobile Native</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="businessModel" className="text-sm font-semibold text-slate-700">
              Business Model
            </Label>
            <Select value={filters.businessModel} onValueChange={(value) => updateFilter('businessModel', value)}>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Any model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Model</SelectItem>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="freemium">Freemium</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="micro-saas">Micro-SaaS</SelectItem>
                <SelectItem value="community-driven">Community Driven</SelectItem>
                <SelectItem value="subscription">Subscription</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
