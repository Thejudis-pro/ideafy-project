
import type { Idea, Filters } from '@/types/idea';

const variations = {
  businessModelTweaks: {
    'freemium': ['subscription', 'one-time', 'community-driven'],
    'subscription': ['freemium', 'micro-saas', 'paid'],
    'paid': ['freemium', 'subscription', 'community-driven'],
    'micro-saas': ['freemium', 'subscription', 'paid'],
    'community-driven': ['freemium', 'subscription', 'micro-saas'],
    'free': ['freemium', 'community-driven', 'subscription']
  },
  
  vibeTweaks: {
    'minimalist': ['aesthetic', 'experimental', 'mobile-first'],
    'aesthetic': ['minimalist', 'retro', 'playful'],
    'experimental': ['futuristic', 'playful', 'minimalist'],
    'mobile-first': ['minimalist', 'aesthetic', 'playful'],
    'retro': ['aesthetic', 'playful', 'experimental'],
    'futuristic': ['experimental', 'aesthetic', 'minimalist'],
    'playful': ['retro', 'aesthetic', 'experimental']
  },

  audienceModifiers: [
    'for busy professionals',
    'for creative teams',
    'for remote workers',
    'for small businesses',
    'for indie creators',
    'for digital nomads',
    'for students',
    'for entrepreneurs'
  ],

  conceptHooks: [
    'with AI-powered insights',
    'with real-time collaboration',
    'with social features',
    'with gamification elements',
    'with voice controls',
    'with mobile-first design',
    'with blockchain integration',
    'with AR/VR capabilities'
  ]
};

// Apply creative variations to make an idea feel fresh
export function applyIdeaVariations(baseIdea: Idea): Idea {
  const variationTypes = ['businessModel', 'vibe', 'audience', 'concept'];
  const selectedVariation = variationTypes[Math.floor(Math.random() * variationTypes.length)];
  
  const newIdea = { ...baseIdea };
  
  switch (selectedVariation) {
    case 'businessModel':
      const currentBizModel = baseIdea.businessModel;
      const bizModelOptions = variations.businessModelTweaks[currentBizModel as keyof typeof variations.businessModelTweaks] || ['freemium'];
      newIdea.businessModel = bizModelOptions[Math.floor(Math.random() * bizModelOptions.length)];
      newIdea.monetization = generateNewMonetization(newIdea.businessModel);
      break;
      
    case 'vibe':
      const currentVibe = baseIdea.vibe;
      const vibeOptions = variations.vibeTweaks[currentVibe as keyof typeof variations.vibeTweaks] || ['minimalist'];
      newIdea.vibe = vibeOptions[Math.floor(Math.random() * vibeOptions.length)];
      break;
      
    case 'audience':
      const audienceModifier = variations.audienceModifiers[Math.floor(Math.random() * variations.audienceModifiers.length)];
      newIdea.targetAudience = `${audienceModifier} - ${baseIdea.targetAudience}`;
      break;
      
    case 'concept':
      const conceptHook = variations.conceptHooks[Math.floor(Math.random() * variations.conceptHooks.length)];
      newIdea.concept = `${baseIdea.concept} ${conceptHook}`;
      newIdea.tagline = `${baseIdea.tagline} ${conceptHook}`;
      break;
  }
  
  // Update the ID to reflect the variation
  newIdea.id = Math.random().toString(36).substr(2, 9);
  
  return newIdea;
}

function generateNewMonetization(businessModel: string): string {
  const monetizationMap: Record<string, string[]> = {
    'freemium': ['Free tier with premium features for advanced users', 'Basic free version with paid pro features'],
    'subscription': ['Monthly subscription with tiered pricing', 'Annual subscription with discount pricing'],
    'paid': ['One-time purchase with lifetime access', 'Premium pricing for professional features'],
    'micro-saas': ['Low-cost monthly subscription for niche market', 'Pay-per-use pricing model'],
    'community-driven': ['Community contributions with optional donations', 'Open source with enterprise support'],
    'free': ['Completely free with optional donations', 'Free with community support and documentation']
  };
  
  const options = monetizationMap[businessModel] || monetizationMap['freemium'];
  return options[Math.floor(Math.random() * options.length)];
}
