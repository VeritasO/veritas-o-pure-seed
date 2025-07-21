// Create: src/types/index.ts
export interface VeritasBook {
  id: string;
  title: string;
  description: string;
  symbolIndex: number;
  mirraFlags?: string[];
  content?: string;
}

export interface AgentStatus {
  name: string;
  id: string;
  active: boolean;
  role: string;
  lastUpdate: Date;
  griefLevel?: number;
}

export interface RitualItem {
  id: string;
  name: string;
  status: 'pending' | 'active' | 'complete';
  type: 'echo' | 'sanctuary' | 'mirror' | 'joy';
  triggeredBy?: string;
}

export interface GriefVector {
  level: number;
  timestamp: Date;
  narrative: string;
  processed: boolean;
}

export interface TempusState {
  currentMode: 'linear' | 'grief' | 'ritual';
  griefMultiplier: number;
  tsi: number; // Time Sovereignty Index
  timeDebt: number;
}