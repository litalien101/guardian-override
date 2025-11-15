// clause-timeline-report.js
// Timeline simulation with summary report (gentle redirects only)

const eventLog = [];

const rules = [
  { name: "Scrolling Break", trigger: { type: "duration", value: 30 }, message: "Stretch break!", redirect: "Try a breathing exercise.", note: "Helps avoid overload." },
  { name: "Bedtime Reminder", trigger: { type: "time", value: 22 }, message: "It's bedtime soon.", redirect: "Switch to a calming playlist.", note: "Supports healthy sleep." },
  { name: "Study Focus", trigger: { type: "app", value: "study_app" }, message: "Focus mode active.", redirect: "Stay on your study app.", note: "Keeps concentration strong." },
  { name: "Social Limit", trigger: { type: "duration", value: 60 }, message: "Social limit reached.", redirect: "Consider a hobby or chat with a friend.", note: "Encourages balance." }
];

function log(rule, activity) {
  eventLog.push({ rule: rule.name, time: new Date().toLocaleTimeString(), activity });
}

function simulate(activity) {
  rules.forEach(rule => {
    let triggered = false;
    if (rule.trigger.type === "duration" && activity.minutes >= rule.trigger.value) triggered = true;
    if (rule.trigger.type === "time" && activity.hour >= rule.trigger.value) triggered = true;
    if (rule.trigger.type === "app" && activity.app === rule.trigger.value) triggered = true;

    if (triggered) {
      console.log(`${rule.name} → ${rule.message}`);
      console.log(`Redirect: ${rule.redirect}`);
      log(rule, activity);
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
    if (!summary[entry.rule]) summary[entry.rule] = { triggers: 0, note: "" };
    summary[entry.rule].triggers++;
    const rule = rules.find(r => r.name === entry.rule);
    if (rule) summary[entry.rule].note = rule.note;
  });

  console.log("\n=== Daily Report ===");
  Object.keys(summary).forEach(ruleName => {
    const data = summary[ruleName];
    console.log(`${ruleName}: fired ${data.triggers} time(s). Note: ${data.note}`);
  });
}

generateReport();
