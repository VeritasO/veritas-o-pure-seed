import {
  VERITAS_AGENTS,
  AGENT_GLYPHS,
  AGENT_DOMAINS,
  AGENT_MISSIONS,
} from "@/server/constants/agents";

describe("VERITAS_AGENTS integrity", () => {
  test("All agents have unique IDs", () => {
    const ids = VERITAS_AGENTS.map(agent => agent.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  test("Each agent ID maps to a domain and mission", () => {
    for (const agent of VERITAS_AGENTS) {
      expect(AGENT_DOMAINS[agent.id]).toBeDefined();
      expect(AGENT_MISSIONS[agent.id]).toBeDefined();
    }
  });

  test("All glyphs point to defined agents", () => {
    for (const glyphId in AGENT_GLYPHS) {
      expect(VERITAS_AGENTS.find(agent => agent.id === glyphId)).toBeTruthy();
    }
  });

  test("No agent marked 'active' has undefined glyph/domain/mission", () => {
    for (const agent of VERITAS_AGENTS) {
      if (agent.status) {
        expect(AGENT_GLYPHS[agent.id]).toBeDefined();
        expect(AGENT_DOMAINS[agent.id]).toBeDefined();
        expect(AGENT_MISSIONS[agent.id]).toBeDefined();
      }
    }
  });
});