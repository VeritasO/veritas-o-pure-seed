export interface Agent {
  id: string;
  name: string;
  role: string;
  description: string;
  children?: Agent[];
}

export const agentTree: Agent[] = [
  {
    id: "A1",
    name: "Agent One",
    role: "Role One",
    description: "Description for Agent One",
    children: [
      {
        id: "A2",
        name: "Agent Two",
        role: "Role Two",
        description: "Description for Agent Two",
      },
      {
        id: "A3",
        name: "Agent Three",
        role: "Role Three",
        description: "Description for Agent Three",
      },
    ],
  },
  {
    id: "A4",
    name: "Agent Four",
    role: "Role Four",
    description: "Description for Agent Four",
    children: [
      {
        id: "A5",
        name: "Agent Five",
        role: "Role Five",
        description: "Description for Agent Five",
      },
    ],
  },
  {
    id: "A6",
    name: "Agent Six",
    role: "Role Six",
    description: "Description for Agent Six",
  },
  {
    id: "A7",
    name: "Agent Seven",
    role: "Role Seven",
    description: "Description for Agent Seven",
  },
  {
    id: "A8",
    name: "Agent Eight",
    role: "Role Eight",
    description: "Description for Agent Eight",
  },
  {
    id: "A9",
    name: "Agent Nine",
    role: "Role Nine",
    description: "Description for Agent Nine",
  },
  {
    id: "A10",
    name: "Agent Ten",
    role: "Role Ten",
    description: "Description for Agent Ten",
  },
  {
    id: "A11",
    name: "Agent Eleven",
    role: "Role Eleven",
    description: "Description for Agent Eleven",
  },
  {
    id: "A12",
    name: "Agent Twelve",
    role: "Role Twelve",
    description: "Description for Agent Twelve",
  },
  {
    id: "A13",
    name: "Agent Thirteen",
    role: "Role Thirteen",
    description: "Description for Agent Thirteen",
  },
  {
    id: "A14",
    name: "Agent Fourteen",
    role: "Role Fourteen",
    description: "Description for Agent Fourteen",
  },
  {
    id: "A15",
    name: "Agent Fifteen",
    role: "Role Fifteen",
    description: "Description for Agent Fifteen",
  },
  {
    id: "A16",
    name: "Agent Sixteen",
    role: "Role Sixteen",
    description: "Description for Agent Sixteen",
  },
  {
    id: "A17",
    name: "Agent Seventeen",
    role: "Role Seventeen",
    description: "Description for Agent Seventeen",
  },
  {
    id: "A18",
    name: "Agent Eighteen",
    role: "Role Eighteen",
    description: "Description for Agent Eighteen",
  },
  {
    id: "A19",
    name: "Agent Nineteen",
    role: "Role Nineteen",
    description: "Description for Agent Nineteen",
  },
  {
    id: "A20",
    name: "Agent Twenty",
    role: "Role Twenty",
    description: "Description for Agent Twenty",
  },
  {
    id: "A21",
    name: "Agent Twenty-One",
    role: "Role Twenty-One",
    description: "Description for Agent Twenty-One",
  },
];