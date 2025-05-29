
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Palette, Brain, Briefcase, Zap } from 'lucide-react';
import type { Filters } from '@/types/idea';

interface FilterPanelProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({ filters, onFiltersChange }) => {
  const updateFilter = (key: keyof Filters, value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const filterConfig = [
    {
      key: 'category' as keyof Filters,
      label: 'Category',
      icon: Zap,
      placeholder: 'Any category',
      options: [
        { value: 'any', label: 'Any Category' },
        { value: 'productivity', label: 'Productivity' },
        { value: 'ai-tools', label: 'AI Tools' },
        { value: 'saas', label: 'SaaS' },
        { value: 'marketplace', label: 'Marketplace' },
        { value: 'creative-tools', label: 'Creative Tools' },
        { value: 'social', label: 'Social' },
        { value: 'fintech', label: 'Fintech' },
        { value: 'developer-tools', label: 'Developer Tools' },
      ]
    },
    {
      key: 'vibe' as keyof Filters,
      label: 'Vibe',
      icon: Palette,
      placeholder: 'Any vibe',
      options: [
        { value: 'any', label: 'Any Vibe' },
        { value: 'minimalist', label: 'Minimalist' },
        { value: 'aesthetic', label: 'Aesthetic' },
        { value: 'experimental', label: 'Experimental' },
        { value: 'mobile-first', label: 'Mobile First' },
        { value: 'retro', label: 'Retro' },
        { value: 'futuristic', label: 'Futuristic' },
        { value: 'playful', label: 'Playful' },
      ]
    },
    {
      key: 'techStack' as keyof Filters,
      label: 'Tech Stack',
      icon: Brain,
      placeholder: 'Any tech',
      options: [
        { value: 'any', label: 'Any Tech' },
        { value: 'nextjs', label: 'Next.js' },
        { value: 'react', label: 'React' },
        { value: 'flutter', label: 'Flutter' },
        { value: 'webflow', label: 'Webflow' },
        { value: 'bubble', label: 'Bubble' },
        { value: 'supabase', label: 'Supabase' },
        { value: 'firebase', label: 'Firebase' },
        { value: 'mobile', label: 'Mobile Native' },
      ]
    },
    {
      key: 'businessModel' as keyof Filters,
      label: 'Business Model',
      icon: Briefcase,
      placeholder: 'Any model',
      options: [
        { value: 'any', label: 'Any Model' },
        { value: 'free', label: 'Free' },
        { value: 'freemium', label: 'Freemium' },
        { value: 'paid', label: 'Paid' },
        { value: 'micro-saas', label: 'Micro-SaaS' },
        { value: 'community-driven', label: 'Community Driven' },
        { value: 'subscription', label: 'Subscription' },
      ]
    }
  ];

  return (
    <Card className="max-w-6xl mx-auto bg-white/70 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl overflow-hidden">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Filter Your Perfect Idea</h3>
          <p className="text-slate-600">Fine-tune the magic to match your vibe</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filterConfig.map((config) => {
            const IconComponent = config.icon;
            return (
              <div key={config.key} className="space-y-3">
                <Label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <div className="p-2 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg">
                    <IconComponent className="w-4 h-4 text-purple-600" />
                  </div>
                  {config.label}
                </Label>
                <Select 
                  value={filters[config.key]} 
                  onValueChange={(value) => updateFilter(config.key, value)}
                >
                  <SelectTrigger className="rounded-2xl border-2 border-white/40 bg-white/50 backdrop-blur-sm hover:border-purple-300 focus:border-purple-400 transition-all duration-300 shadow-lg">
                    <SelectValue placeholder={config.placeholder} />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border border-white/20 bg-white/95 backdrop-blur-xl shadow-2xl">
                    {config.options.map((option) => (
                      <SelectItem 
                        key={option.value} 
                        value={option.value}
                        className="rounded-lg hover:bg-purple-50 focus:bg-purple-50 transition-colors"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
