
import type { Idea, Filters } from '@/types/idea';

const ideaTemplates = {
  names: [
    'FlowState', 'MindMeld', 'ZenBuild', 'CodeCraft', 'VibeCheck', 'MakerHub', 'BuildFlow',
    'CreativeSpace', 'IdeasSync', 'MoodBoard', 'LaunchPad', 'DevVibe', 'MakerMood',
    'CodeZen', 'BuildVibe', 'FlowCraft', 'MindBuild', 'CreativeFlow', 'IdeaFlow',
    'DevFlow', 'MakerFlow', 'BuildSpace', 'CodeFlow', 'VibeSpace', 'MindSpace'
  ],
  
  concepts: {
    productivity: [
      'A minimalist task manager that adapts to your energy levels throughout the day',
      'Time blocking app that suggests optimal work sessions based on your mood',
      'Focus timer with ambient soundscapes that match your current vibe',
      'Digital notebook that organizes thoughts using AI-powered mood detection'
    ],
    'ai-tools': [
      'AI-powered code review assistant that learns your coding style',
      'Smart content generator that matches your brand voice',
      'AI mood-based music generator for deep work sessions',
      'Intelligent design feedback tool that suggests improvements'
    ],
    saas: [
      'Customer feedback analyzer with sentiment-based insights',
      'Team mood tracker for remote work optimization',
      'Automated social media scheduler with vibe-matching content',
      'Project timeline generator based on team energy patterns'
    ],
    marketplace: [
      'Platform for trading unused software licenses',
      'Marketplace for micro-SaaS ideas and starter templates',
      'Designer-developer collaboration hub with project matching',
      'Indie maker skill exchange platform'
    ],
    'creative-tools': [
      'Color palette generator based on mood and music',
      'Collaborative moodboard tool for design teams',
      'AI-powered logo generator with vibe customization',
      'Typography pairing tool with aesthetic matching'
    ]
  },

  audiences: [
    'Indie makers and solo developers',
    'Remote teams and digital nomads',
    'Creative professionals and designers',
    'Small business owners',
    'Content creators and influencers',
    'Productivity enthusiasts',
    'Developer communities',
    'Design agencies'
  ],

  monetizations: [
    'Freemium with premium features for power users',
    'One-time purchase with lifetime updates',
    'Monthly subscription with usage-based tiers',
    'Commission-based marketplace model',
    'Sponsored content and partnerships',
    'Premium templates and add-ons',
    'Enterprise licensing for teams',
    'Pay-per-use API access'
  ],

  techStacks: {
    nextjs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Vercel'],
    react: ['React', 'TypeScript', 'Styled Components', 'Firebase', 'Netlify'],
    flutter: ['Flutter', 'Dart', 'Firebase', 'GetX', 'Material Design'],
    webflow: ['Webflow', 'Custom CSS', 'Zapier', 'Memberstack', 'Finsweet'],
    bubble: ['Bubble', 'Plugins', 'API Connector', 'Database', 'Responsive Engine'],
    supabase: ['React', 'Supabase', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    firebase: ['React', 'Firebase', 'Material-UI', 'Cloud Functions', 'Hosting'],
    mobile: ['React Native', 'Expo', 'TypeScript', 'NativeBase', 'App Store']
  }
};

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function filterByPreference<T>(items: T[], preference: string, defaultValue: string = 'any'): T[] {
  if (preference === defaultValue) return items;
  return items.filter((item: any) => 
    item.toLowerCase().includes(preference.toLowerCase()) || 
    preference.toLowerCase().includes(item.toLowerCase())
  );
}

export function generateIdea(filters: Filters): Idea {
  const id = Math.random().toString(36).substr(2, 9);
  
  // Select category
  const categories = Object.keys(ideaTemplates.concepts);
  const selectedCategory = filters.category === 'any' 
    ? getRandomItem(categories)
    : filters.category;
  
  // Generate concept based on category
  const concepts = ideaTemplates.concepts[selectedCategory as keyof typeof ideaTemplates.concepts] || 
                  ideaTemplates.concepts.productivity;
  const concept = getRandomItem(concepts);
  
  // Generate name and tagline
  const name = getRandomItem(ideaTemplates.names);
  const taglines = [
    `${concept.split(' ').slice(0, 4).join(' ')} for modern makers`,
    `Streamline your ${selectedCategory.replace('-', ' ')} workflow`,
    `The ${filters.vibe !== 'any' ? filters.vibe : 'smart'} way to ${concept.split(' ').slice(-3).join(' ')}`,
    `Build, ship, and scale your ${selectedCategory.replace('-', ' ')} ideas faster`
  ];
  const tagline = getRandomItem(taglines);
  
  // Select tech stack
  const techStackKey = filters.techStack === 'any' 
    ? getRandomItem(Object.keys(ideaTemplates.techStacks))
    : filters.techStack;
  const techStack = ideaTemplates.techStacks[techStackKey as keyof typeof ideaTemplates.techStacks] || 
                   ideaTemplates.techStacks.react;
  
  // Select other properties
  const targetAudience = getRandomItem(ideaTemplates.audiences);
  const monetization = getRandomItem(ideaTemplates.monetizations);
  
  const vibes = ['minimalist', 'aesthetic', 'experimental', 'mobile-first', 'retro', 'futuristic', 'playful'];
  const businessModels = ['freemium', 'paid', 'micro-saas', 'community-driven', 'subscription', 'free'];
  
  const vibe = filters.vibe === 'any' ? getRandomItem(vibes) : filters.vibe;
  const businessModel = filters.businessModel === 'any' ? getRandomItem(businessModels) : filters.businessModel;

  return {
    id,
    name,
    tagline,
    concept,
    targetAudience,
    monetization,
    techStack,
    category: selectedCategory,
    vibe,
    businessModel
  };
}
