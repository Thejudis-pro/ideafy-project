import type { Idea } from '@/types/idea';

interface IdeaHash {
  hash: string;
  timestamp: number;
}

// Generate a unique hash for an idea based on key characteristics
export function generateIdeaHash(idea: Idea): string {
  const key = `${idea.name}_${idea.category}_${idea.vibe}_${idea.businessModel}`;
  return btoa(key).replace(/[^a-zA-Z0-9]/g, '').substring(0, 16);
}

// Get stored idea history from localStorage
export function getIdeaHistory(): IdeaHash[] {
  try {
    const stored = localStorage.getItem('idea_history');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

// Store a new idea in history
export function storeIdeaInHistory(idea: Idea): void {
  try {
    const history = getIdeaHistory();
    const hash = generateIdeaHash(idea);
    const timestamp = Date.now();
    
    // Remove duplicates and old entries (keep last 50 ideas)
    const filteredHistory = history
      .filter(item => item.hash !== hash)
      .slice(-49);
    
    filteredHistory.push({ hash, timestamp });
    localStorage.setItem('idea_history', JSON.stringify(filteredHistory));
  } catch (error) {
    console.error('Failed to store idea in history:', error);
  }
}

// Check if an idea has been seen before
export function hasIdeaBeenSeen(idea: Idea): boolean {
  const history = getIdeaHistory();
  const hash = generateIdeaHash(idea);
  return history.some(item => item.hash === hash);
}

// Clear old history entries (older than 30 days)
export function cleanupOldHistory(): void {
  try {
    const history = getIdeaHistory();
    const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
    const recentHistory = history.filter(item => item.timestamp > thirtyDaysAgo);
    localStorage.setItem('idea_history', JSON.stringify(recentHistory));
  } catch (error) {
    console.error('Failed to cleanup old history:', error);
  }
}
