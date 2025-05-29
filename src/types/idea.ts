
export interface Idea {
  id: string;
  name: string;
  tagline: string;
  concept: string;
  targetAudience: string;
  monetization: string;
  techStack: string[];
  category: string;
  vibe: string;
  businessModel: string;
}

export interface Filters {
  category: string;
  techStack: string;
  vibe: string;
  businessModel: string;
}
