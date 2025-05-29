
import React, { useState } from 'react';
import { Sparkles, Zap, Heart, Share2, Bookmark, Palette, Brain, Briefcase, Coffee, Github, Twitter, Globe } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/8 to-cyan-400/8 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-gradient-to-br from-pink-400/8 to-purple-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Abstract Lines and Shapes */}
        <div className="absolute top-32 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-purple-300/30 to-transparent"></div>
        <div className="absolute top-1/2 right-1/4 w-px h-40 bg-gradient-to-b from-transparent via-indigo-300/30 to-transparent rotate-45"></div>
        
        {/* Floating Dots */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-purple-400/40 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-2/3 right-1/5 w-1 h-1 bg-indigo-400/40 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/6 right-2/5 w-1.5 h-1.5 bg-pink-400/40 rounded-full animate-pulse delay-800"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Gradient Overlay Shapes */}
        <div className="absolute top-0 left-0 w-1/2 h-1/3 bg-gradient-to-br from-purple-500/5 to-transparent rounded-br-[200px]"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-indigo-500/5 to-transparent rounded-tl-[150px]"></div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-purple-200/30 text-purple-700 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <Sparkles className="w-4 h-4 animate-pulse" />
            For indie hackers, vibe coders, dreamers & doers 🚀
          </div>
          
          {/* Main Headline */}
          <h1 className="text-7xl md:text-8xl font-black mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-purple-800 to-indigo-900 bg-clip-text text-transparent leading-tight block">
              Your Next Big
            </span>
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent leading-tight block">
              Idea Starts Here
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-4 leading-relaxed font-medium">
            Get instantly inspired with creative app and website concepts tailored to your 
            <span className="text-purple-600 font-semibold"> style</span>, 
            <span className="text-indigo-600 font-semibold"> stack</span>, and 
            <span className="text-blue-600 font-semibold"> spark</span>.
          </p>
          
          <p className="text-lg text-slate-500 mb-12 font-medium">
            ✨ Stop staring at blank screens. Start building magic.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              onClick={handleGenerateIdea}
              size="lg"
              className="bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 hover:from-purple-600 hover:via-indigo-600 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 border-0"
            >
              <Zap className="w-6 h-6 mr-3" />
              Generate Idea
            </Button>
            
            <Button 
              onClick={handleFeelingLucky}
              variant="outline"
              size="lg"
              className="bg-white/80 backdrop-blur-md border-2 border-slate-200 hover:border-purple-300 hover:bg-white/90 px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-slate-700 hover:text-purple-700"
            >
              <Sparkles className="w-6 h-6 mr-3" />
              I'm Feeling Lucky
            </Button>
          </div>
        </div>

        {/* Enhanced Filter Panel */}
        <div className="mb-16">
          <FilterPanel filters={filters} onFiltersChange={setFilters} />
        </div>

        {/* Current Idea Display */}
        {currentIdea && (
          <div className="mt-16 flex justify-center animate-fade-in">
            <IdeaCard 
              idea={currentIdea} 
              onSave={() => handleSaveIdea(currentIdea)}
              isSaved={savedIdeas.some(saved => saved.id === currentIdea.id)}
            />
          </div>
        )}

        {/* Saved Ideas */}
        {savedIdeas.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-purple-700 bg-clip-text text-transparent mb-4 flex items-center justify-center">
                <Bookmark className="w-8 h-8 mr-3 text-purple-600" />
                Your Saved Ideas ({savedIdeas.length})
              </h2>
              <p className="text-slate-600 text-lg">The sparks that caught your attention ✨</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Enhanced Footer */}
        <footer className="mt-32 text-center">
          <div className="mb-8">
            <p className="text-lg text-slate-600 mb-6 font-medium">
              ✨ Made with code & caffeine for creators who never run out of dreams.
            </p>
            
            <div className="flex justify-center gap-6 mb-8">
              <a href="#" className="text-slate-400 hover:text-purple-500 transition-colors duration-300 transform hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-500 transition-colors duration-300 transform hover:scale-110">
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-slate-200 pt-8">
            <p className="text-slate-500 flex items-center justify-center gap-2">
              Built for makers who turn ideas into reality 
              <Coffee className="w-4 h-4 text-amber-500" />
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
