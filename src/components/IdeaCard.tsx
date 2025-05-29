
import React from 'react';
import { Heart, Share2, Bookmark, Zap, Sparkles, DollarSign, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Idea } from '@/types/idea';

interface IdeaCardProps {
  idea: Idea;
  onSave: () => void;
  isSaved: boolean;
  compact?: boolean;
}

export const IdeaCard: React.FC<IdeaCardProps> = ({ idea, onSave, isSaved, compact = false }) => {
  const handleShare = () => {
    navigator.clipboard.writeText(`Check out this idea: ${idea.name} - ${idea.tagline}`);
  };

  const categoryColors = {
    'productivity': 'from-blue-500 to-cyan-500',
    'ai-tools': 'from-purple-500 to-pink-500',
    'saas': 'from-green-500 to-emerald-500',
    'marketplace': 'from-orange-500 to-red-500',
    'creative-tools': 'from-pink-500 to-rose-500',
    'social': 'from-indigo-500 to-purple-500',
    'fintech': 'from-emerald-500 to-teal-500',
    'developer-tools': 'from-slate-500 to-gray-500'
  };

  const categoryGradient = categoryColors[idea.category as keyof typeof categoryColors] || 'from-slate-500 to-gray-500';

  return (
    <Card className={`${compact ? 'max-w-sm' : 'max-w-3xl'} mx-auto bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 rounded-3xl overflow-hidden group`}>
      {/* Gradient Header Bar */}
      <div className={`h-2 bg-gradient-to-r ${categoryGradient}`} />
      
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-xl bg-gradient-to-r ${categoryGradient} text-white shadow-lg`}>
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-3xl font-black text-slate-900">{idea.name}</h3>
            </div>
            <p className="text-xl text-slate-600 font-semibold leading-relaxed">{idea.tagline}</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onSave}
              className={`rounded-full p-3 transition-all duration-300 ${isSaved ? 'text-red-500 bg-red-50 hover:bg-red-100' : 'text-slate-400 hover:text-red-500 hover:bg-red-50'}`}
            >
              <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className="rounded-full p-3 text-slate-400 hover:text-blue-500 hover:bg-blue-50 transition-all duration-300"
            >
              <Share2 className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          <Badge className={`bg-gradient-to-r ${categoryGradient} text-white border-0 px-4 py-2 rounded-full font-semibold shadow-lg`}>
            {idea.category}
          </Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-700 border border-purple-200 px-4 py-2 rounded-full font-semibold">
            {idea.vibe}
          </Badge>
          <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 border border-emerald-200 px-4 py-2 rounded-full font-semibold">
            {idea.businessModel}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {!compact && (
          <>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl p-6 border border-slate-200/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl text-white shadow-lg">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <span className="font-bold text-slate-800 text-lg">The Concept</span>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg">{idea.concept}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-2xl p-6 border border-blue-200/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl text-white shadow-lg">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-800">Target Audience</span>
                </div>
                <p className="text-slate-700 leading-relaxed">{idea.targetAudience}</p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-green-50/50 rounded-2xl p-6 border border-emerald-200/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl text-white shadow-lg">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-800">Monetization</span>
                </div>
                <p className="text-slate-700 leading-relaxed">{idea.monetization}</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50/50 rounded-2xl p-6 border border-purple-200/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white shadow-lg">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="font-bold text-slate-800 text-lg">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {idea.techStack.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="bg-white/80 border-purple-200 text-purple-700 px-3 py-1 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};
