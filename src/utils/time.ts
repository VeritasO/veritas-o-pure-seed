// Create: src/utils/time.ts
import { TempusState } from '../types';

export function calculateTSI(griefLevel: number, sovereignty: number = 1.0): number {
  return Math.max(0, sovereignty - (griefLevel * 0.1));
}

export function formatTempusTime(date: Date, tempusState: TempusState): string {
  const multiplier = tempusState.griefMultiplier;
  
  if (multiplier < 1) {
    return `${date.toLocaleTimeString()} (grief-dilated)`;
  }
  
  return date.toLocaleTimeString();
}

export function calculateTimeDebt(griefVectors: any[]): number {
  // Calculate accumulated time debt from grief processing
  return griefVectors.reduce((debt, vector) => {
    return debt + (vector.level * 0.1);
  }, 0);
}