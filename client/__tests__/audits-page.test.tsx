import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import axios from "axios";
import AuditsPage from "../../pages/audits";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("AuditsPage", () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({
      data: {
        data: [
          {
            id: "test-id-1",
            caseId: "case-1",
            agentId: "agent-1",
            auditDate: "2025-01-01T00:00:00Z",
            dimension: "Procedural Fairness",
            score: 0.9,
            comments: "All good",
            status: "complete",
            griefTier: "low",
          },
          {
            id: "test-id-2",
            caseId: "case-2",
            agentId: "agent-2",
            auditDate: "2025-01-02T00:00:00Z",
            dimension: "Restoration",
            score: 0.7,
            comments: "High grief unresolved",
            status: "complete",
            griefTier: "high",
          },
        ],
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders audits table", async () => {
    render(<AuditsPage />);
    expect(screen.getByText(/Tribunal Fairness Audits/i)).toBeInTheDocument();
    expect(screen.getByText(/Loading audits/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("test-id-1")).toBeInTheDocument();
      expect(screen.getByText("case-1")).toBeInTheDocument();
      expect(screen.getByText("agent-1")).toBeInTheDocument();
      expect(screen.getByText("Procedural Fairness")).toBeInTheDocument();
      expect(screen.getByText("0.90")).toBeInTheDocument();
      expect(screen.getByText(/All good/i)).toBeInTheDocument();
      // Check for second audit row
      expect(screen.getByText("test-id-2")).toBeInTheDocument();
      expect(screen.getByText("case-2")).toBeInTheDocument();
      expect(screen.getByText("agent-2")).toBeInTheDocument();
      expect(screen.getByText("Restoration")).toBeInTheDocument();
      expect(screen.getByText("0.70")).toBeInTheDocument();
      expect(screen.getByText(/High grief unresolved/i)).toBeInTheDocument();
    });
  });

  test("flags contradiction when status is complete and griefTier is high", async () => {
    render(<AuditsPage />);
    await waitFor(() => {
      // Contradiction warning should be present for test-id-2
      expect(screen.getByText(/Contradiction: Task marked complete despite high grief/i)).toBeInTheDocument();
      expect(screen.getByText(/Restoration must pace with unresolved grief/i)).toBeInTheDocument();
    });
  });

  test("suggests reconciliation options post-audit", async () => {
    render(<AuditsPage />);
    await waitFor(() => {
      expect(screen.getByText(/Symbolic Reset/i)).toBeInTheDocument();
      expect(screen.getByText(/Loop Feedback/i)).toBeInTheDocument();
      expect(screen.getByText(/Memory Checkpoint/i)).toBeInTheDocument();
      expect(screen.getByText(/Doctrinal Diffusion/i)).toBeInTheDocument();
      expect(screen.getByText(/Mirror Recitation/i)).toBeInTheDocument();
    });
  });

  test("filters update and trigger data fetch", async () => {
    render(<AuditsPage />);
    const caseIdInput = screen.getByPlaceholderText("Case ID");
    fireEvent.change(caseIdInput, { target: { value: "case-1" } });
    const filterButton = screen.getByText("Filter");
    fireEvent.click(filterButton);

    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledWith(
        "/api/fairness-audits",
        expect.objectContaining({
          params: expect.objectContaining({ caseId: "case-1" }),
        })
      );
    });
  });

  test("displays error message when API call fails", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Network Error"));
    render(<AuditsPage />);
    await waitFor(() => {
      expect(screen.getByText(/Failed to load audits/i)).toBeInTheDocument();
    });
  });

  test("ensures keyboard focus on filter button", () => {
    render(<AuditsPage />);
    const filterButton = screen.getByRole("button", { name: /Filter/i });
    filterButton.focus();
    expect(filterButton).toHaveFocus();
  });

  test("renders audits table with all available data fields", async () => {
    render(<AuditsPage />);
    expect(screen.getByText(/Tribunal Fairness Audits/i)).toBeInTheDocument();
    expect(screen.getByText(/Loading audits/i)).toBeInTheDocument();
    await waitFor(() => {
      // First audit row
      expect(screen.getByText("test-id-1")).toBeInTheDocument();
      expect(screen.getByText("case-1")).toBeInTheDocument();
      expect(screen.getByText("agent-1")).toBeInTheDocument();
      expect(screen.getByText("Procedural Fairness")).toBeInTheDocument();
      expect(screen.getByText("0.90")).toBeInTheDocument();
      expect(screen.getByText(/All good/i)).toBeInTheDocument();
      expect(screen.getByText("TSI: 0.85")).toBeInTheDocument();
      expect(screen.getByText(/Harmony/i)).toBeInTheDocument();
      expect(screen.getByText(/PDF/i)).toBeInTheDocument();
      expect(screen.getByText(/JSON/i)).toBeInTheDocument();
      expect(screen.getByText(/CSV/i)).toBeInTheDocument();
      expect(screen.getByText(/Protobuf/i)).toBeInTheDocument();
      expect(screen.getByText(/Respect Index: 0.98/i)).toBeInTheDocument();
      expect(screen.getByText(/Audit Cycle Frequency: 5/i)).toBeInTheDocument();
      expect(screen.getByText(/Land Healing Quotient: 0.92/i)).toBeInTheDocument();
      expect(screen.getByText(/Storyline Coherence: 0.95/i)).toBeInTheDocument();
      expect(screen.getByText(/Sensory Compatibility: 0.99/i)).toBeInTheDocument();
      expect(screen.getByText(/Tension Decay Curve: 0.88/i)).toBeInTheDocument();
      // Second audit row
      expect(screen.getByText("test-id-2")).toBeInTheDocument();
      expect(screen.getByText("case-2")).toBeInTheDocument();
      expect(screen.getByText("agent-2")).toBeInTheDocument();
      expect(screen.getByText("Restoration")).toBeInTheDocument();
      expect(screen.getByText("0.70")).toBeInTheDocument();
      expect(screen.getByText(/High grief unresolved/i)).toBeInTheDocument();
      expect(screen.getByText("TSI: 0.45")).toBeInTheDocument();
      expect(screen.getByText(/Contradiction/i)).toBeInTheDocument();
      expect(screen.getByText(/Respect Index: 0.75/i)).toBeInTheDocument();
      expect(screen.getByText(/Audit Cycle Frequency: 7/i)).toBeInTheDocument();
      expect(screen.getByText(/Land Healing Quotient: 0.60/i)).toBeInTheDocument();
      expect(screen.getByText(/Storyline Coherence: 0.70/i)).toBeInTheDocument();
      expect(screen.getByText(/Sensory Compatibility: 0.80/i)).toBeInTheDocument();
      expect(screen.getByText(/Tension Decay Curve: 0.40/i)).toBeInTheDocument();
    });
  });

  test("flags contradiction and shows TEMPUS trace for high grief", async () => {
    render(<AuditsPage />);
    await waitFor(() => {
      expect(screen.getByText(/Contradiction: Task marked complete despite high grief/i)).toBeInTheDocument();
      expect(screen.getByText(/Restoration must pace with unresolved grief/i)).toBeInTheDocument();
      expect(screen.getByText(/TEMPUS: 2025-01-02T00:00:00Z|TSI:0.45|GVI:high/i)).toBeInTheDocument();
    });
  });

  test("suggests all reconciliation and export options post-audit", async () => {
    render(<AuditsPage />);
    await waitFor(() => {
      expect(screen.getByText(/Symbolic Reset/i)).toBeInTheDocument();
      expect(screen.getByText(/Loop Feedback/i)).toBeInTheDocument();
      expect(screen.getByText(/Memory Checkpoint/i)).toBeInTheDocument();
      expect(screen.getByText(/Doctrinal Diffusion/i)).toBeInTheDocument();
      expect(screen.getByText(/Mirror Recitation/i)).toBeInTheDocument();
      expect(screen.getByText(/Export as PDF/i)).toBeInTheDocument();
      expect(screen.getByText(/Export as JSON/i)).toBeInTheDocument();
      expect(screen.getByText(/Export as CSV/i)).toBeInTheDocument();
      expect(screen.getByText(/Export as Protobuf/i)).toBeInTheDocument();
    });
  });

  test("filters update and trigger data fetch with TSI", async () => {
    render(<AuditsPage />);
    const caseIdInput = screen.getByPlaceholderText("Case ID");
    fireEvent.change(caseIdInput, { target: { value: "case-1" } });
    const filterButton = screen.getByText("Filter");
    fireEvent.click(filterButton);
    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledWith(
        "/api/fairness-audits",
        expect.objectContaining({
          params: expect.objectContaining({ caseId: "case-1" }),
        })
      );
      expect(screen.getByText("case-1")).toBeInTheDocument();
      expect(screen.getByText(/TSI: 0.85/i)).toBeInTheDocument();
    });
  });

  test("displays error message and user guidance when API call fails", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Network Error"));
    render(<AuditsPage />);
    await waitFor(() => {
      expect(screen.getByText(/Failed to load audits/i)).toBeInTheDocument();
      expect(screen.getByText(/Please check your connection or try again later/i)).toBeInTheDocument();
    });
  });

  test("ensures keyboard focus and accessibility on filter button", () => {
    render(<AuditsPage />);
    const filterButton = screen.getByRole("button", { name: /Filter/i });
    filterButton.focus();
    expect(filterButton).toHaveFocus();
    fireEvent.keyDown(filterButton, { key: "Tab", code: "Tab" });
    expect(filterButton).toHaveFocus();
  });

  test("displays all available export options", async () => {
    render(<AuditsPage />);
    await waitFor(() => {
      expect(screen.getByText(/Export as PDF/i)).toBeInTheDocument();
      expect(screen.getByText(/Export as JSON/i)).toBeInTheDocument();
      expect(screen.getByText(/Export as CSV/i)).toBeInTheDocument();
      expect(screen.getByText(/Export as Protobuf/i)).toBeInTheDocument();
    });
  });

  test("shows symbolic state and agent metrics for each audit", async () => {
    render(<AuditsPage />);
    await waitFor(() => {
      expect(screen.getByText(/Harmony/i)).toBeInTheDocument();
      expect(screen.getByText(/Contradiction/i)).toBeInTheDocument();
      expect(screen.getByText(/Respect Index: 0.98/i)).toBeInTheDocument();
      expect(screen.getByText(/Audit Cycle Frequency: 5/i)).toBeInTheDocument();
      expect(screen.getByText(/Land Healing Quotient: 0.92/i)).toBeInTheDocument();
      expect(screen.getByText(/Storyline Coherence: 0.95/i)).toBeInTheDocument();
      expect(screen.getByText(/Sensory Compatibility: 0.99/i)).toBeInTheDocument();
      expect(screen.getByText(/Tension Decay Curve: 0.88/i)).toBeInTheDocument();
    });
  });
});