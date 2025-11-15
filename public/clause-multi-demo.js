// clause-multi-demo.js
// Demo: several rules with gentle redirects

const rules = [
  {
    name: "Scrolling Break",
    trigger: { type: "duration", value: 30 },
    message: "You've been scrolling for 30 minutes.",
    redirect: "Take a short walk or stretch."
  },
  {
    name: "Bedtime Reminder",
    trigger: { type: "time", value: 22 },
    message: "It's getting late.",
    redirect: "Switch to a calming playlist or audiobook."
  },
  {
    name: "Study Focus",
    trigger: { type: "app", value: "study_app" },
    message: "Focus mode is active.",
    redirect: "Stay on your study app — social apps will pause gently."
  },
  {
    name: "Social Limit",
    trigger: { type: "duration", value: 60 },
    message: "You've reached your 1-hour social media limit.",
    redirect: "Consider switching to a hobby or messaging a friend directly."
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
      console.log(`Redirect: ${rule.redirect}`);
    }
  });
}

// Demo runs
simulateActivity({ minutes: 10, hour: 21, app: "social_app" });
simulateActivity({ minutes: 30, hour: 21, app: "social_app" });
simulateActivity({ minutes: 45, hour: 22, app: "social_app" });
simulateActivity({ minutes: 15, hour: 18, app: "study_app" });
simulateActivity({ minutes: 65, hour: 20, app: "social_app" });
