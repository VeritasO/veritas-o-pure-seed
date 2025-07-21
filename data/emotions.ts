// /data/emotions.ts

/**
 * Emotional States Taxonomy & Grief Scaling
 * - Defines emotions, grief levels, sorrow mapping, and emotional sovereignty descriptors.
 * - Used by KAIROS and emotional calibration protocols.
 */

export interface EmotionalState {
  id: string;            // e.g., "E001"
  name: string;          // e.g., "Grief"
  description: string;   // Explanation of emotional state
  intensityScale: number; // 1-10 scale
  synonyms?: string[];   // alternative names or related feelings
  restorativeActions?: string[]; // recommended restorative rituals or steps
}

export const EMOTIONS: EmotionalState[] = [
  {
    id: "E001",
    name: "Grief",
    description: "Deep sorrow resulting from loss or harm.",
    intensityScale: 10,
    synonyms: ["Sorrow", "Lament", "Mourning"],
    restorativeActions: ["Grief Temporal Anchoring", "Return Ceremony"]
  },
  {
    id: "E002",
    name: "Anger",
    description: "Intense displeasure or hostility.",
    intensityScale: 8,
    synonyms: ["Frustration", "Irritation"],
    restorativeActions: ["Conflict De-escalation Rite"]
  },
  {
    id: "E003",
    name: "Peace",
    description: "Calmness and emotional balance.",
    intensityScale: 2,
    restorativeActions: ["Mindful Witnessing"]
  },
  // Additional emotional states here
];

/**
 * Lookup by ID
 */
export const EMOTIONS_BY_ID = EMOTIONS.reduce<Record<string, EmotionalState>>((acc, e) => {
  acc[e.id] = e;
  return acc;
}, {});
