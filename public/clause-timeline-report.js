// clause-timeline-report.js
// Timeline simulation with summary report

const eventLog = [];

const rules = [
  { name: "Scrolling Break", trigger: { type: "duration", value: 30 }, message: "Stretch break!", note: "Helps avoid overload.", consent: ["guardian"] },
  { name: "Bedtime Lock", trigger: { type: "time", value: 22 }, message: "Bedtime lock engaged.", note: "Supports healthy sleep.", consent: ["guardian"] },
  { name: "Study Focus", trigger: { type: "app", value: "study_app" }, message: "Focus mode active.", note: "Keeps concentration strong.", consent: ["guardian","therapist"] },
  { name: "Social Limit", trigger: { type: "duration", value: 60 }, message: "Social limit reached.", note: "Encourages balance.", consent: ["guardian"] }
];

const consentState = { guardian: true, therapist: true };

function log(type, rule, activity) {
  eventLog.push({ type, rule: rule.name, time: new Date().toLocaleTimeString(), activity });
}

function simulate(activity) {
  rules.forEach(rule => {
    let triggered = false;
    if (rule.trigger.type === "duration" && activity.minutes >= rule.trigger.value) triggered = true;
    if (rule.trigger.type === "time" && activity.hour >= rule.trigger.value) triggered = true;
    if (rule.trigger.type === "app" && activity.app === rule.trigger.value) triggered = true;

    if (triggered) {
      const hasConsent = rule.consent.every(role => consentState[role]);
      if (!hasConsent) {
        log("consent_block", rule, activity);
        return;
      }
      log("trigger", rule, activity);
    }
  });
}

// Timeline
const timeline = [
  { minutes: 15, hour: 8, app: "social_app" },
  { minutes: 20, hour: 10, app: "study_app" },
  { minutes: 35, hour: 13, app: "social_app" },
  { minutes: 65, hour: 17, app: "social_app" },
  { minutes: 10, hour: 21, app: "video_app" },
  { minutes: 45, hour: 22, app: "social_app" }
];

timeline.forEach(activity => simulate(activity));

// Report generator
function generateReport() {
  const summary = {};
  eventLog.forEach(entry => {
    if (!summary[entry.rule]) summary[entry.rule] = { triggers: 0, blocks: 0, note: "" };
    if (entry.type === "trigger") summary[entry.rule].triggers++;
    if (entry.type === "consent_block") summary[entry.rule].blocks++;
    const rule = rules.find(r => r.name === entry.rule);
    if (rule) summary[entry.rule].note = rule.note;
  });

  console.log("\n=== Daily Report ===");
  Object.keys(summary).forEach(ruleName => {
    const data = summary[ruleName];
    console.log(`${ruleName}: fired ${data.triggers}, blocked ${data.blocks}. Note: ${data.note}`);
  });
}

generateReport();
