
import React, { useState } from 'react';
import { Sparkles, Zap, Heart, Share2, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { IdeaCard } from '@/components/IdeaCard';
import { FilterPanel } from '@/components/FilterPanel';
import { generateIdea } from '@/utils/ideaGenerator';
import type { Idea, Filters } from '@/types/idea';

const Index = () => {
  const [currentIdea, setCurrentIdea] = useState<Idea | null>(null);
  const [savedIdeas, setSavedIdeas] = useState<Idea[]>([]);
  const [filters, setFilters] = useState<Filters>({
    category: 'any',
    techStack: 'any',
    vibe: 'any',
    businessModel: 'any'
  });

  const handleGenerateIdea = () => {
    const newIdea = generateIdea(filters);
    setCurrentIdea(newIdea);
  };

  const handleFeelingLucky = () => {
    const luckyIdea = generateIdea({
      category: 'any',
      techStack: 'any',
      vibe: 'any',
      businessModel: 'any'
    });
    setCurrentIdea(luckyIdea);
  };

  const handleSaveIdea = (idea: Idea) => {
    if (!savedIdeas.find(saved => saved.id === idea.id)) {
      setSavedIdeas([...savedIdeas, idea]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            For Indie Makers & Vibe Coders
          </div>
          
          <h1 className="text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent mb-6">
            Ideafy
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Stop staring at blank screens. Get instant, actionable app ideas tailored to your vibe, 
            tech stack, and creative energy. From concept to code in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleGenerateIdea}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Generate Idea
            </Button>
            
            <Button 
              onClick={handleFeelingLucky}
              variant="outline"
              size="lg"
              className="border-2 border-slate-300 hover:border-slate-400 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" />
              I'm Feeling Lucky
            </Button>
          </div>
        </div>

        {/* Filter Panel */}
        <FilterPanel filters={filters} onFiltersChange={setFilters} />

        {/* Current Idea Display */}
        {currentIdea && (
          <div className="mt-12 flex justify-center">
            <IdeaCard 
              idea={currentIdea} 
              onSave={() => handleSaveIdea(currentIdea)}
              isSaved={savedIdeas.some(saved => saved.id === currentIdea.id)}
            />
          </div>
        )}

        {/* Saved Ideas */}
        {savedIdeas.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <Bookmark className="w-6 h-6 mr-2" />
              Saved Ideas ({savedIdeas.length})
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedIdeas.map((idea) => (
                <IdeaCard 
                  key={idea.id} 
                  idea={idea} 
                  onSave={() => {}} 
                  isSaved={true}
                  compact
                />
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-20 text-center text-slate-500">
          <p>Built for makers who turn ideas into reality ✨</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
