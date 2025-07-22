// RandomCaseGenerator: Generates randomized edge case input for simulation
export default function generateRandomCase() {
  const griefLevel = Math.floor(Math.random() * 10) + 1;
  const harmTypes = ["relational", "systemic", "historical", "ecological", "spiritual"];
  const timeImbalances = ["delayed", "premature", "cyclical", "frozen"];
  const justiceTypes = ["symbolic", "grief-based", "proportional"];
  return {
    griefLevel,
    harmType: harmTypes[Math.floor(Math.random() * harmTypes.length)],
    timeImbalance: timeImbalances[Math.floor(Math.random() * timeImbalances.length)],
    justiceType: justiceTypes[Math.floor(Math.random() * justiceTypes.length)]
  };
}
