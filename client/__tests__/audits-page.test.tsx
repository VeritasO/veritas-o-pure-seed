import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
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
});