// /data/cases.ts

/**
 * Tribunal Case Templates and Restoration Workflow Models
 * - These serve as canonical structured examples for tribunal processing,
 *   including grief-weighted restoration, proportionality, and layered logs.
 * - Each case includes metadata, grievance description, involved agents,
 *   justice tiering, grief weight, and outcome pathways.
 */

export interface TribunalCase {
  caseId: string;               // Unique case identifier (e.g., "C-2025-001")
  title: string;                // Descriptive case title
  description: string;          // Narrative summary of the grievance
  involvedParties: string[];    // Identifiers or roles (e.g., "Complainant", "Respondent")
  agentsInvolved: string[];     // Agent IDs involved in adjudication
  justiceTier: number;          // Proportional justice tier (1–5, 5 = highest severity)
  griefWeight: number;          // Emotional/grief impact scale (0–100)
  restorationPathway: string[]; // Steps or templates for restoration (IDs from rituals or protocols)
  logs: TribunalLogEntry[];     // Layered logs documenting tribunal events
  status: "Open" | "In Progress" | "Resolved" | "Dormant";
  resolutionSummary?: string;   // Summary of resolution (populated upon closure)
}

export interface TribunalLogEntry {
  timestamp: string;            // ISO 8601 timestamp of event
  agentId: string;              // Agent responsible for entry
  action: string;               // Action or event description
  notes?: string;               // Additional remarks or details
  griefWeightChange?: number;   // Adjustment to grief weight if applicable
  justiceTierChange?: number;   // Adjustment to justice tier if applicable
}

/**
 * Example canonical tribunal case templates
 */
export const CASE_TEMPLATES: TribunalCase[] = [
  {
    caseId: "C-2025-001",
    title: "Community Land Encroachment Dispute",
    description: "A dispute involving unauthorized use of ancestral lands, triggering grief and ecological harm.",
    involvedParties: ["Complainant", "Respondent", "Community Elders"],
    agentsInvolved: ["A2", "A5", "A8", "A9", "A11"],
    justiceTier: 4,
    griefWeight: 75,
    restorationPathway: ["R002", "R004"],
    logs: [
      {
        timestamp: "2025-07-20T10:00:00Z",
        agentId: "A2",
        action: "Case opened and parties notified.",
      },
      {
        timestamp: "2025-07-21T12:30:00Z",
        agentId: "A5",
        action: "Grief weight assessed with KAIROS metrics.",
        griefWeightChange: 5,
      },
      {
        timestamp: "2025-07-22T14:45:00Z",
        agentId: "A8",
        action: "Ecological impact evaluated; land restoration recommended.",
      },
      {
        timestamp: "2025-07-25T09:00:00Z",
        agentId: "A9",
        action: "Initiated Structural Restoration Rite.",
      },
      {
        timestamp: "2025-07-30T15:00:00Z",
        agentId: "A11",
        action: "Identity coherence and communal reintegration verified.",
      },
    ],
    status: "Resolved",
    resolutionSummary: "Restorative rites successfully completed; land use protocols established and community healed."
  },
  {
    caseId: "C-2025-002",
    title: "Workplace Emotional Harm Incident",
    description: "Alleged emotional harm and boundary violation within a communal workspace.",
    involvedParties: ["Complainant", "Respondent"],
    agentsInvolved: ["A2", "A5", "A6", "A15", "A21"],
    justiceTier: 3,
    griefWeight: 55,
    restorationPathway: ["R001", "R005"],
    logs: [
      {
        timestamp: "2025-07-19T08:00:00Z",
        agentId: "A2",
        action: "Case registered; non-coercive communication protocols activated.",
      },
      {
        timestamp: "2025-07-20T11:00:00Z",
        agentId: "A5",
        action: "Grief weight scaling applied using KAIROS.",
      },
      {
        timestamp: "2025-07-21T13:30:00Z",
        agentId: "A15",
        action: "Conflict de-escalation measures initiated.",
      },
      {
        timestamp: "2025-07-22T16:00:00Z",
        agentId: "A21",
        action: "Emotional tuning and rest rhythm adjustments suggested.",
      },
      {
        timestamp: "2025-07-24T10:00:00Z",
        agentId: "A4",
        action: "Bias audit performed to ensure fairness.",
      },
      {
        timestamp: "2025-07-26T09:00:00Z",
        agentId: "A9",
        action: "Symbolic sealing of restorative agreement.",
      },
    ],
    status: "In Progress",
  },
  {
    caseId: "C-2025-003",
    title: "Intergenerational Grievance and Narrative Repair",
    description: "Case addressing inherited trauma affecting multiple generations within a community.",
    involvedParties: ["Community Representatives", "Affected Families"],
    agentsInvolved: ["A2", "A6", "A9", "A14", "A16", "A23"],
    justiceTier: 5,
    griefWeight: 90,
    restorationPathway: ["R004", "R002"],
    logs: [
      {
        timestamp: "2025-07-10T09:00:00Z",
        agentId: "A2",
        action: "Case initiated with community consent.",
      },
      {
        timestamp: "2025-07-12T14:00:00Z",
        agentId: "A6",
        action: "Lived experience narratives collected and preserved.",
      },
      {
        timestamp: "2025-07-15T10:00:00Z",
        agentId: "A16",
        action: "Ancestral wisdom integration rites scheduled.",
      },
      {
        timestamp: "2025-07-18T11:30:00Z",
        agentId: "A9",
        action: "Symbolic structural restoration begun.",
      },
      {
        timestamp: "2025-07-22T16:00:00Z",
        agentId: "A23",
        action: "Agent restoration protocols activated for communal healing.",
      },
    ],
    status: "Open",
  }
];

/**
 * Derived quick lookups for cases by ID or status
 */
export const CASES_BY_ID = CASE_TEMPLATES.reduce<Record<string, TribunalCase>>((acc, c) => {
  acc[c.caseId] = c;
  return acc;
}, {});

export const CASES_BY_STATUS = CASE_TEMPLATES.reduce<Record<string, TribunalCase[]>>((acc, c) => {
  if (!acc[c.status]) acc[c.status] = [];
  acc[c.status].push(c);
  return acc;
}, {});
