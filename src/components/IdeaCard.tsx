
import React from 'react';
import { Heart, Share2, Bookmark, Code, Users, DollarSign, Lightbulb } from 'lucide-react';
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

  return (
    <Card className={`${compact ? 'max-w-sm' : 'max-w-2xl'} mx-auto bg-white/80 backdrop-blur-sm border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] rounded-2xl overflow-hidden`}>
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{idea.name}</h3>
            <p className="text-lg text-slate-600 font-medium">{idea.tagline}</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onSave}
              className={`rounded-full ${isSaved ? 'text-red-500 hover:text-red-600' : 'text-slate-400 hover:text-red-500'}`}
            >
              <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className="rounded-full text-slate-400 hover:text-blue-500"
            >
              <Share2 className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
            {idea.category}
          </Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
            {idea.vibe}
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-700">
            {idea.businessModel}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {!compact && (
          <>
            <div className="bg-slate-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-yellow-500" />
                <span className="font-semibold text-slate-700">Concept</span>
              </div>
              <p className="text-slate-600">{idea.concept}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span className="font-semibold text-slate-700">Target Audience</span>
                </div>
                <p className="text-slate-600 text-sm">{idea.targetAudience}</p>
              </div>

              <div className="bg-green-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-green-500" />
                  <span className="font-semibold text-slate-700">Monetization</span>
                </div>
                <p className="text-slate-600 text-sm">{idea.monetization}</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <Code className="w-4 h-4 text-purple-500" />
                <span className="font-semibold text-slate-700">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {idea.techStack.map((tech, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
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
