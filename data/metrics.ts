// /data/metrics.ts

/**
 * Canonical Metrics for Fairness, Grief, and Justice Tier Scaling
 * This file contains base data structures and values used for evaluating
 * tribunal cases and agent audits.
 */

export interface GriefMetric {
  id: string;           // Unique metric identifier (e.g., "G01")
  name: string;         // Human-readable name
  description: string;  // Brief description
  scaleMin: number;     // Minimum value on the scale
  scaleMax: number;     // Maximum value on the scale
  weightFactor: number; // Weighting multiplier used in grief calculation
  applicableContexts: string[]; // Domains or case types where metric applies
}

export interface FairnessAuditMetric {
  id: string;           // Unique metric ID (e.g., "F01")
  name: string;
  description: string;
  biasType: string;     // Type/category of bias being audited (e.g., "Cognitive", "Systemic")
  severityScale: number; // Scale for severity or likelihood (e.g., 0-10)
  detectionMethod: string; // Methodology or agent involved in detection (e.g., "AEGIS", "SENTINEL")
}

export interface JusticeTierMetric {
  tier: number;         // Justice tier level (1-5)
  description: string;  // Summary of tier characteristics
  restorationIntensity: string; // Qualitative level (e.g., "Low", "Moderate", "High")
  timeReversibility: boolean;  // Whether the restoration process is time-reversible
  griefWeightRange: [number, number]; // Applicable grief weight range for this tier
}

/**
 * Grief Metrics - core emotional impact scaling examples
 */
export const GRIEF_METRICS: GriefMetric[] = [
  {
    id: "G01",
    name: "Immediate Emotional Harm",
    description: "Acute grief experienced directly by affected parties.",
    scaleMin: 0,
    scaleMax: 50,
    weightFactor: 1.0,
    applicableContexts: ["Personal Harm", "Workplace Conflict"]
  },
  {
    id: "G02",
    name: "Intergenerational Grief",
    description: "Grief passed across generations affecting communities.",
    scaleMin: 50,
    scaleMax: 100,
    weightFactor: 1.5,
    applicableContexts: ["Community Disputes", "Historical Trauma"]
  },
  {
    id: "G03",
    name: "Symbolic Grief",
    description: "Grief arising from loss of symbols, rites, or cultural identity.",
    scaleMin: 30,
    scaleMax: 70,
    weightFactor: 1.2,
    applicableContexts: ["Cultural Harm", "Ritual Violations"]
  }
];

/**
 * Fairness Audit Metrics - bias recognition categories
 */
export const FAIRNESS_AUDIT_METRICS: FairnessAuditMetric[] = [
  {
    id: "F01",
    name: "Cognitive Bias",
    description: "Bias stemming from individual cognitive distortions.",
    biasType: "Cognitive",
    severityScale: 0, // To be dynamically assigned during audits
    detectionMethod: "AEGIS"
  },
  {
    id: "F02",
    name: "Systemic Bias",
    description: "Bias arising from institutional or systemic factors.",
    biasType: "Systemic",
    severityScale: 0,
    detectionMethod: "AEGIS"
  },
  {
    id: "F03",
    name: "Procedural Bias",
    description: "Bias due to process or procedural inconsistencies.",
    biasType: "Procedural",
    severityScale: 0,
    detectionMethod: "SENTINEL"
  }
];

/**
 * Justice Tier Metrics - defines proportionality and restoration scope
 */
export const JUSTICE_TIER_METRICS: JusticeTierMetric[] = [
  {
    tier: 1,
    description: "Minimal harm with low emotional impact; simple restoration.",
    restorationIntensity: "Low",
    timeReversibility: true,
    griefWeightRange: [0, 20]
  },
  {
    tier: 2,
    description: "Moderate harm requiring supportive restoration and mediation.",
    restorationIntensity: "Moderate",
    timeReversibility: true,
    griefWeightRange: [21, 40]
  },
  {
    tier: 3,
    description: "Significant harm needing structured restoration and community engagement.",
    restorationIntensity: "Moderate to High",
    timeReversibility: true,
    griefWeightRange: [41, 60]
  },
  {
    tier: 4,
    description: "Severe harm with deep emotional impact; long-term restoration planned.",
    restorationIntensity: "High",
    timeReversibility: false,
    griefWeightRange: [61, 80]
  },
  {
    tier: 5,
    description: "Extreme harm with systemic impact; transformative restoration required.",
    restorationIntensity: "Very High",
    timeReversibility: false,
    griefWeightRange: [81, 100]
  }
];

/**
 * Derived lookups by ID or tier
 */
export const GRIEF_METRICS_BY_ID = GRIEF_METRICS.reduce<Record<string, GriefMetric>>((acc, m) => {
  acc[m.id] = m;
  return acc;
}, {});

export const FAIRNESS_AUDIT_METRICS_BY_ID = FAIRNESS_AUDIT_METRICS.reduce<Record<string, FairnessAuditMetric>>((acc, m) => {
  acc[m.id] = m;
  return acc;
}, {});

export const JUSTICE_TIERS_BY_LEVEL = JUSTICE_TIER_METRICS.reduce<Record<number, JusticeTierMetric>>((acc, t) => {
  acc[t.tier] = t;
  return acc;
}, {});
