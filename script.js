const names = [
  "NeuroSpark AI",
  "QuantumQuill",
  "MindMesh",
  "SynaptiCore",
  "BotNova",
  "AlgoAura",
  "DreamNet",
  "VisionaryAI",
  "SmartPulse",
  "CortexCloud",
  "PromptPilot",
  "DeepDrift",
  "EchoMind",
  "HoloBotics",
  "GeniusForge",
  "AutoPilotAI",
  "ClarityNeuron",
  "NextGenPrompt",
  "AlphaCircuit",
  "NovaMind AI",
  "PromptFlow",
  "SynthSpark",
  "Cognify Labs",
  "InceptiCore",
  "SparkNest"
];

const btn = document.getElementById("generate-btn");
const box = document.getElementById("name-box");

btn.addEventListener("click", () => {
  const idea = names[Math.floor(Math.random() * names.length)];
  box.textContent = idea;
});

