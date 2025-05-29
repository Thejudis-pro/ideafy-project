
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Palette, Brain, Briefcase, Zap, X, Sparkles } from 'lucide-react';
import type { Filters } from '@/types/idea';

interface FilterPanelProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({ filters, onFiltersChange }) => {
  const updateFilter = (key: keyof Filters, value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    onFiltersChange({
      category: 'any',
      vibe: 'any',
      techStack: 'any',
      businessModel: 'any'
    });
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== 'any');

  const filterConfig = [
    {
      key: 'category' as keyof Filters,
      label: 'Category',
      icon: Zap,
      placeholder: 'Any category',
      emoji: '⚡',
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
      emoji: '🎨',
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
      emoji: '⚙️',
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
      emoji: '💼',
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
    <div className="relative">
      {/* Background Magic */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
      
      <Card className="relative max-w-7xl mx-auto bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl overflow-hidden hover:shadow-purple-500/20 transition-all duration-700">
        <CardContent className="p-8 lg:p-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-800 mb-4 flex items-center justify-center gap-3">
              <span className="text-3xl animate-pulse">🎯</span>
              Tailor Your Dream Project
            </h2>
            <p className="text-sm sm:text-lg text-slate-600 italic font-medium">
              Dial in your vibe, tools, and strategy — we'll handle the inspiration.
            </p>
          </div>

          {/* Filters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {filterConfig.map((config, index) => {
              const IconComponent = config.icon;
              const isActive = filters[config.key] !== 'any';
              
              return (
                <div 
                  key={config.key} 
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`relative rounded-full p-6 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 ${
                    isActive 
                      ? 'bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border-2 border-purple-400/50 shadow-lg shadow-purple-500/20' 
                      : 'bg-white/30 hover:bg-white/40 border border-white/40'
                  } backdrop-blur-md`}>
                    
                    {/* Glow Effect for Active */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-indigo-400/20 blur-sm"></div>
                    )}
                    
                    <div className="relative space-y-4">
                      <Label className="text-sm font-bold text-slate-800 flex items-center gap-3 justify-center">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                          {config.emoji}
                        </span>
                        <span className="group-hover:text-purple-700 transition-colors duration-300">
                          {config.label}
                        </span>
                      </Label>
                      
                      <Select 
                        value={filters[config.key]} 
                        onValueChange={(value) => updateFilter(config.key, value)}
                      >
                        <SelectTrigger className={`rounded-full border-2 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl focus:shadow-purple-500/25 ${
                          isActive 
                            ? 'bg-white/80 border-purple-300 text-purple-800' 
                            : 'bg-white/60 border-white/60 hover:border-purple-300 focus:border-purple-400'
                        }`}>
                          <SelectValue placeholder={config.placeholder} />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border border-white/30 bg-white/95 backdrop-blur-2xl shadow-2xl z-50">
                          {config.options.map((option) => (
                            <SelectItem 
                              key={option.value} 
                              value={option.value}
                              className="rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 focus:bg-gradient-to-r focus:from-purple-50 focus:to-indigo-50 transition-all duration-200 cursor-pointer"
                            >
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <div className="flex justify-center animate-fade-in">
              <Button
                onClick={clearFilters}
                variant="outline"
                className="rounded-full bg-white/60 backdrop-blur-md border-white/60 hover:bg-white/80 hover:border-red-300 text-slate-700 hover:text-red-600 px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <X className="w-4 h-4 mr-2" />
                Clear Filters
              </Button>
            </div>
          )}

          {/* Sparkle Decoration */}
          <div className="absolute top-4 right-4 opacity-30">
            <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
          </div>
          <div className="absolute bottom-4 left-4 opacity-30">
            <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" style={{ animationDelay: '500ms' }} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
