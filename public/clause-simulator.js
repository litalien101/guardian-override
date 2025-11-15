// clause-simulator.js
// Guardian Override — Gentle Redirect Clause Simulator
// Rules always redirect softly, never block outright

const eventLog = [];

// Define rules (clauses)
const rules = [
  {
    name: "Scrolling Break",
    trigger: { type: "duration", value: 30 }, // minutes
    action: "suggest_break",
    message: "You've been scrolling for 30 minutes. Time to stretch!",
    redirect: "Try a quick breathing exercise.",
    note: "Helps avoid overload.",
    consent: ["guardian"]
  },
  {
    name: "Bedtime Lock",
    trigger: { type: "time", value: 22 }, // 10 PM
    action: "pause_app",
    message: "It's bedtime soon.",
    redirect: "Switch to a calming playlist or audiobook.",
    note: "Supports healthy sleep.",
    consent: ["guardian"]
  },
  {
    name: "Study Focus",
    trigger: { type: "app", value: "study_app" },
    action: "block_social",
    message: "Focus mode is active.",
    redirect: "Stay on your study app — social apps will gently pause.",
    note: "Keeps concentration strong.",
    consent: ["guardian", "therapist"]
  },
  {
    name: "Social Limit",
    trigger: { type: "duration", value: 60 }, // minutes
    action: "warn_limit",
    message: "You've reached your 1-hour social media limit.",
    redirect: "Consider switching to a hobby or messaging a friend directly.",
    note: "Encourages balance.",
    consent: ["guardian"]
  }
];

// Consent state (who has approved)
const consentState = {
  guardian: true,
  therapist: true
};

// Log helper
function log(type, rule, activity) {
  eventLog.push({
    type,
    rule: rule.name,
    action: rule.action,
    time: new Date().toLocaleTimeString(),
    activity
  });
}

// Simulation engine
function simulate(activity) {
  console.log(`\nActivity:`, activity);

  rules.forEach(rule => {
    let triggered = false;

    if (rule.trigger.type === "duration" && activity.minutes >= rule.trigger.value) triggered = true;
    if (rule.trigger.type === "time" && activity.hour >= rule.trigger.value) triggered = true;
    if (rule.trigger.type === "app" && activity.app === rule.trigger.value) triggered = true;

    if (triggered) {
      // Always redirect gently, never block
      console.log(`${rule.name} → ${rule.message}`);
      console.log(`Redirect: ${rule.redirect}`);
      console.log(`Note: ${rule.note}`);
      log("trigger", rule, activity);
    }
  });
}

// Timeline: simulate a day
const timeline = [
  { minutes: 15, hour: 8, app: "social_app" },   // morning scroll
  { minutes: 20, hour: 10, app: "study_app" },   // study session
  { minutes: 35, hour: 13, app: "social_app" },  // lunch break scroll
  { minutes: 65, hour: 17, app: "social_app" },  // long afternoon scroll
  { minutes: 10, hour: 21, app: "video_app" },   // evening entertainment
  { minutes: 45, hour: 22, app: "social_app" }   // late night scroll
];

// Run simulation
timeline.forEach(activity => simulate(activity));

// Report generator
function generateReport() {
  const summary = {};
  eventLog.forEach(entry => {
    if (!summary[entry.rule]) summary[entry.rule] = { triggers: 0, note: "" };
    if (entry.type === "trigger") summary[entry.rule].triggers++;
    const rule = rules.find(r => r.name === entry.rule);
    if (rule) summary[entry.rule].note = rule.note;
  });

  console.log("\n=== Daily Report ===");
  Object.keys(summary).forEach(ruleName => {
    const data = summary[ruleName];
    console.log(`${ruleName}: fired ${data.triggers} time(s). Note: ${data.note}`);
  });
}

// Show report
generateReport();
