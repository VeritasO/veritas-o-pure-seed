// /data/timeframes.ts

/**
 * Temporal Justice Frameworks
 * - Kairotic time definitions, clock ethics parameters, rewind state mappings.
 * - Supports TEMPUS and KAIROS temporal justice logic.
 */

export interface Timeframe {
  id: string;          // Unique timeframe identifier (e.g., "T001")
  name: string;        // Descriptive name (e.g., "Kairotic Window")
  description: string; // Purpose and context
  durationSeconds: number; // Duration in seconds for precise time computations
  ethicalConsiderations: string[]; // Key justice and emotional sovereignty principles guiding this timeframe
  typicalUseCases?: string[];       // Optional use cases or scenarios for applying this timeframe
}

export const TIMEFRAMES: Timeframe[] = [
  {
    id: "T001",
    name: "Kairotic Window",
    description: "Optimal time frame for grief integration and restorative action, allowing natural emotional processing without haste.",
    durationSeconds: 604800, // 7 days
    ethicalConsiderations: [
      "Allow grief to surface and be honored",
      "Respect communal and cultural rhythms",
      "Avoid premature closure or forced resolution"
    ],
    typicalUseCases: [
      "Initial grief processing after harm",
      "Setting timelines for restorative meetings",
      "Emotional calibration in tribunal cases"
    ]
  },
  {
    id: "T002",
    name: "Rewind State Duration",
    description: "Time window during which reversible actions can be undone or restored to prior states to preserve fairness and proportionality.",
    durationSeconds: 259200, // 3 days
    ethicalConsiderations: [
      "Maintain integrity of records during reversal",
      "Ensure reversals are proportional and consensual",
      "Provide transparency about available rewind options"
    ],
    typicalUseCases: [
      "Undoing procedural errors",
      "Reversing symbolic enactments within tribunal",
      "Allowing parties to amend statements or testimonies"
    ]
  },
  {
    id: "T003",
    name: "Restorative Reflection Period",
    description: "Extended timeframe allocated for deep reflection, community dialogue, and reweaving of social bonds post-conflict.",
    durationSeconds: 2592000, // 30 days
    ethicalConsiderations: [
      "Support time for meaningful reconciliation",
      "Respect varying grieving and healing speeds",
      "Facilitate inclusive participation"
    ],
    typicalUseCases: [
      "Community healing rituals",
      "Intergenerational justice processing",
      "Structural restoration projects"
    ]
  },
  {
    id: "T004",
    name: "Audit Cadence Interval",
    description: "Scheduled interval for system-wide audits to ensure ongoing fairness, bias detection, and doctrinal fidelity.",
    durationSeconds: 604800, // 7 days
    ethicalConsiderations: [
      "Maintain systemic accountability",
      "Respect agent operational rhythms",
      "Facilitate transparent reporting and feedback"
    ],
    typicalUseCases: [
      "AEGIS fairness audits",
      "System-wide doctrinal reviews",
      "Triggering symbolic ritual feedback loops"
    ]
  },
  {
    id: "T005",
    name: "Dormancy Cycle",
    description: "Duration an agent may remain in dormancy before requiring ritual evaluation for possible resurrection or retirement.",
    durationSeconds: 1209600, // 14 days
    ethicalConsiderations: [
      "Honor agent autonomy and rest needs",
      "Prevent indefinite inactivity without review",
      "Incorporate ceremonial rites for resurrection or retirement"
    ],
    typicalUseCases: [
      "Agent operational lifecycle management",
      "Rest cycles for resource optimization",
      "Preparation for agent onboarding or decommission"
    ]
  },
  {
    id: "T006",
    name: "Symbolic Ritual Preparation Time",
    description: "Period allocated for preparation, participant gathering, and consent prior to performing significant symbolic rites.",
    durationSeconds: 43200, // 12 hours
    ethicalConsiderations: [
      "Ensure informed and consensual participation",
      "Allow sufficient time for mental and emotional preparation",
      "Preserve ritual sanctity and timing"
    ],
    typicalUseCases: [
      "Preparation before major tribunal rituals",
      "Community gatherings for restorative ceremonies",
      "Agent coordination for symbolic enactments"
    ]
  },
  {
    id: "T007",
    name: "Emotional Sovereignty Reset",
    description: "Designated timeframe to support emotional boundary re-establishment following intense tribunal or ritual engagements.",
    durationSeconds: 86400, // 24 hours
    ethicalConsiderations: [
      "Prioritize individual emotional health and autonomy",
      "Prevent emotional oversaturation",
      "Support gradual reintegration into community dynamics"
    ],
    typicalUseCases: [
      "Post-ritual emotional recovery",
      "Aftercare for tribunal participants",
      "Agent mental health protocols"
    ]
  },
  {
    id: "T008",
    name: "Generational Healing Cycle",
    description: "Multi-month timeframe supporting intergenerational justice processes, including narrative transmission and wound addressing.",
    durationSeconds: 7776000, // 90 days
    ethicalConsiderations: [
      "Honor the depth and complexity of intergenerational grief",
      "Allow slow, collective healing across time scales",
      "Facilitate narrative truth circulation and memory keeping"
    ],
    typicalUseCases: [
      "Extended intergenerational justice projects",
      "Archiving narrative truths",
      "Cultural rites of remembrance"
    ]
  },
  {
    id: "T009",
    name: "Immediate Intervention Window",
    description: "Short timeframe for urgent intervention when imminent harm or escalation is detected.",
    durationSeconds: 3600, // 1 hour
    ethicalConsiderations: [
      "Balance urgency with care to avoid harm escalation",
      "Respect procedural fairness even in urgency",
      "Mobilize rapid de-escalation agents"
    ],
    typicalUseCases: [
      "Crisis response protocols",
      "Immediate de-escalation measures",
      "Urgent ritual enactments"
    ]
  },
  {
    id: "T010",
    name: "Symbolic Feedback Loop Interval",
    description: "Interval for cyclical review and adjustment of symbolic justice enactments based on feedback and audit findings.",
    durationSeconds: 604800, // 7 days
    ethicalConsiderations: [
      "Encourage continual doctrinal evolution",
      "Integrate ritual efficacy feedback",
      "Maintain system transparency"
    ],
    typicalUseCases: [
      "Weekly ritual feedback sessions",
      "Doctrinal reflection triggers",
      "Agent performance evaluations"
    ]
  }
];

/**
 * Lookup by ID
 */
export const TIMEFRAMES_BY_ID = TIMEFRAMES.reduce<Record<string, Timeframe>>((acc, t) => {
  acc[t.id] = t;
  return acc;
}, {});
