export type AgeGroup = '2-4' | '5-7' | '8-10' | '11+';
export type Energy = 'low' | 'medium' | 'high';
export type Location = 'indoor' | 'outdoor' | 'either';
export type Season = 'spring' | 'summer' | 'autumn' | 'winter' | 'any';

export interface Activity {
  id: string;
  title: string;
  description: string;
  ageGroups: AgeGroup[];
  energy: Energy;
  location: Location;
  prepTime: number; // in minutes
  duration: number; // in minutes
  suppliesNeeded: string[];
  tags: string[];
  instructions: string[];
  tips?: string;
  season?: Season;
  isPremium?: boolean;
}

export interface Filters {
  ageGroup: AgeGroup | 'all';
  energy: Energy | 'all';
  location: Location | 'all';
  prepTime: number; // max minutes
  supplies: 'all' | 'none' | 'simple'; // none = no supplies, simple = ≤3 items
}