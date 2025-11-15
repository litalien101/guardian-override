// clause-demo.js
// Simple demo: one rule with gentle redirect

const clause = {
  name: "Scrolling Break",
  trigger: { type: "duration", value: 30 }, // minutes
  action: "suggest_break",
  message: "You've been scrolling for 30 minutes.",
  redirect: "Try a quick stretch or breathing exercise."
};

function simulateUsage(minutes) {
  console.log(`User has been scrolling for ${minutes} minutes...`);
  if (minutes >= clause.trigger.value) {
    console.log(`${clause.name} → ${clause.message}`);
    console.log(`Redirect: ${clause.redirect}`);
  } else {
    console.log("No rule triggered yet.");
  }
}

// Demo run
simulateUsage(10);
simulateUsage(30);
simulateUsage(45);    message: "You've hit your 1-hour social media limit today.",
    note: "Encourages balance.",
    consent: ["guardian"]
  }
];

// Who has given consent
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

// Run simulation
function simulate(activity) {
  console.log(`\nActivity:`, activity);

  rules.forEach(rule => {
    let triggered = false;

    if (rule.trigger.type === "duration" && activity.minutes >= rule.trigger.value) {
      triggered = true;
    }
    if (rule.trigger.type === "time" && activity.hour >= rule.trigger.value) {
      triggered = true;
    }
    if (rule.trigger.type === "app" && activity.app === rule.trigger.value) {
      triggered = true;
    }

    if (triggered) {
      const hasConsent = rule.consent.every(role => consentState[role]);
      if (!hasConsent) {
        console.log(`${rule.name} requires consent. Skipped.`);
        log("consent_block", rule, activity);
        return;
      }

      console.log(`${rule.name} → ${rule.message}`);
      console.log(`Note: ${rule.note}`);
      log("trigger", rule, activity);
    }
  });
}

// Demo runs
simulate({ minutes: 10, hour: 21, app: "social_app" }); // Nothing yet
simulate({ minutes: 30, hour: 21, app: "social_app" }); // Scrolling Break
simulate({ minutes: 45, hour: 22, app: "social_app" }); // Bedtime Lock
simulate({ minutes: 15, hour: 18, app: "study_app" });  // Study Focus
simulate({ minutes: 65, hour: 20, app: "social_app" }); // Social Limit

// Show log
console.log("\nEvent Log:", eventLog);// demo placeholder
