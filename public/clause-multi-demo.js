// clause-multi-demo.js
// Demo: several rules checked against activity

const rules = [
  {
    name: "Scrolling Break",
    trigger: { type: "duration", value: 30 },
    action: "suggest_break",
    message: "You've been scrolling for 30 minutes. Time to stretch!"
  },
  {
    name: "Bedtime Lock",
    trigger: { type: "time", value: 22 },
    action: "pause_app",
    message: "It's bedtime. Apps are paused until morning."
  },
  {
    name: "Study Focus",
    trigger: { type: "app", value: "study_app" },
    action: "block_social",
    message: "Focus mode: Social apps are blocked while studying."
  },
  {
    name: "Social Limit",
    trigger: { type: "duration", value: 60 },
    action: "warn_limit",
    message: "You've hit your 1-hour social media limit today."
  }
];

function simulateActivity(activity) {
  console.log(`\nActivity:`, activity);

  rules.forEach(rule => {
    let triggered = false;

    if (rule.trigger.type === "duration" && activity.minutes >= rule.trigger.value) triggered = true;
    if (rule.trigger.type === "time" && activity.hour >= rule.trigger.value) triggered = true;
    if (rule.trigger.type === "app" && activity.app === rule.trigger.value) triggered = true;

    if (triggered) {
      console.log(`${rule.name} → ${rule.message}`);
    }
  });
}

// Demo runs
simulateActivity({ minutes: 10, hour: 21, app: "social_app" });
simulateActivity({ minutes: 30, hour: 21, app: "social_app" });
simulateActivity({ minutes: 45, hour: 22, app: "social_app" });
simulateActivity({ minutes: 15, hour: 18, app: "study_app" });
simulateActivity({ minutes: 65, hour: 20, app: "social_app" });
