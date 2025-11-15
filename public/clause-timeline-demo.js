// clause-timeline-demo.js
// Simulates a day of activities with rules, consent, and logging

const eventLog = [];

const rules = [
  { name: "Scrolling Break", trigger: { type: "duration", value: 30 }, message: "Stretch break!", consent: ["guardian"] },
  { name: "Bedtime Lock", trigger: { type: "time", value: 22 }, message: "Bedtime lock engaged.", consent: ["guardian"] },
  { name: "Study Focus", trigger: { type: "app", value: "study_app" }, message: "Focus mode active.", consent: ["guardian","therapist"] },
  { name: "Social Limit", trigger: { type: "duration", value: 60 }, message: "Social limit reached.", consent: ["guardian"] }
];

const consentState = { guardian: true, therapist: true };

function log(type, rule, activity) {
  eventLog.push({ type, rule: rule.name, time: new Date().toLocaleTimeString(), activity });
}

function simulate(activity) {
  console.log(`\nActivity:`, activity);

  rules.forEach(rule => {
    let triggered = false;
    if (rule.trigger.type === "duration" && activity.minutes >= rule.trigger.value) triggered = true;
    if (rule.trigger.type === "time" && activity.hour >= rule.trigger.value) triggered = true;
    if (rule.trigger.type === "app" && activity.app === rule.trigger.value) triggered = true;

    if (triggered) {
      const hasConsent = rule.consent.every(role => consentState[role]);
      if (!hasConsent) {
        console.log(`${rule.name} requires consent. Skipped.`);
        log("consent_block", rule, activity);
        return;
      }
      console.log(`${rule.name} → ${rule.message}`);
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

console.log("\nEvent Log:", eventLog);
