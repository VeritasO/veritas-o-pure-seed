// Create: src/state/useGlobalState.ts
import { create } from 'zustand';
import { RitualItem, GriefVector, TempusState } from '@/types';

interface GlobalState {
  // Grief & Emotional State
  griefLevel: number;
  griefVectors: GriefVector[];
  
  // Time & Temporal
  tempusState: TempusState;
  
  // Rituals
  ritualQueue: RitualItem[];
  activeRituals: RitualItem[];
  
  // System
  harmonyIndex: number;
  systemStatus: 'active' | 'maintenance' | 'ritual_pause';
  
  // Actions
  setGriefLevel: (level: number) => void;
  addGriefVector: (vector: GriefVector) => void;
  addToRitualQueue: (ritual: RitualItem) => void;
  updateTempusState: (state: Partial<TempusState>) => void;
  setHarmonyIndex: (index: number) => void;
}

export const useGlobalState = create<GlobalState>((set, get) => ({
  // Initial state
  griefLevel: 0,
  griefVectors: [],
  tempusState: {
    currentMode: 'linear',
    griefMultiplier: 1.0,
    tsi: 1.0,
    timeDebt: 0
  },
  ritualQueue: [],
  activeRituals: [],
  harmonyIndex: 0.988,
  systemStatus: 'active',

  // Actions
  setGriefLevel: (level) => set({ griefLevel: level }),
  
  addGriefVector: (vector) => set((state) => ({
    griefVectors: [...state.griefVectors, vector]
  })),
  
  addToRitualQueue: (ritual) => set((state) => ({
    ritualQueue: [...state.ritualQueue, ritual]
  })),
  
  updateTempusState: (newState) => set((state) => ({
    tempusState: { ...state.tempusState, ...newState }
  })),
  
  setHarmonyIndex: (index) => set({ harmonyIndex: index })
}));