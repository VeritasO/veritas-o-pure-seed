// Create: src/utils/grief.ts
import { GriefVector } from '@/types';

export function calculateGriefLevel(vectors: GriefVector[]): number {
  if (vectors.length === 0) return 0;
  
  const recentVectors = vectors.filter(v => 
    Date.now() - v.timestamp.getTime() < 24 * 60 * 60 * 1000 // Last 24 hours
  );
  
  const totalGrief = recentVectors.reduce((sum, v) => sum + v.level, 0);
  return Math.min(Math.round(totalGrief / recentVectors.length), 10);
}

export function getGriefTimeMultiplier(griefLevel: number): number {
  if (griefLevel >= 8) return 0.3; // Severe time dilation
  if (griefLevel >= 6) return 0.5;
  if (griefLevel >= 4) return 0.7;
  return 1.0; // Normal time flow
}

export function shouldTriggerSanctuary(griefLevel: number, threshold: number = 7): boolean {
  return griefLevel >= threshold;
}