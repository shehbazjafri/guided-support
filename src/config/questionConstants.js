export const SUPPORT_STEPS = [
  {
    step: 1,
    lines: [
      {
        text: "Welcome to Guided iPhone Troubleshooting",
      },
      {
        text: "To begin we will need the correct model you are using?",
      },
    ],
    options: [
      "iPhone 12",
      "iPhone 11",
      "iPhone XS",
      "iPhone XR",
      "iPhone 8",
      "iPhone 7",
      "iPhone 6",
      "Other",
    ],
  },
  {
    step: 2,
    lines: [
      {
        text: "Thank you for the information. Please select the issue you are experiencing with your iPhone.",
        type: "info",
        props: {
          variant: "filled",
          severity: "info",
          style: {
            fontSize: "1.5rem",
          },
        },
      },
    ],
    options: [
      "iPhone is running slowly",
      "iPhone does not connect to Wi-Fi",
      "iPhone is not repsonding",
      "iPhone screen/body is damaged",
    ],
  },
  {
    step: 3,
    lines: [
      {
        text: "First, please do the following: Clear your phone's browser cache.",
      },
      {
        text: "How do I clear my cache?",
      },
      {
        text: "Go to Settings > Safari > Clear History and Website Data.If you just want to clear the website data collected, you’ll need to tap Settings > Safari > Advanced > Website Data > Remove all website data.",
      },
      {
        text: "Did that resolve your issue?",
        type: "info",
        props: {
          variant: "filled",
          severity: "info",
          style: {
            fontSize: "1.5rem",
          },
        },
      },
    ],
    options: ["Yes", "No"],
  },
  {
    step: 4,
    lines: [
      {
        text: "Next: Update your phone's OS.",
      },
      {
        text: "How do I update OS?",
      },
      {
        text: "Make sure your phone is plugged in for charging and is connected to WiFi.",
      },
      {
        text: "Go to Settings > General > Software Update.",
      },
      {
        text: "Does that resolve your issue?",
        type: "info",
        props: {
          variant: "filled",
          severity: "info",
          style: {
            fontSize: "1.5rem",
          },
        },
      },
    ],
    options: ["Yes", "No"],
  },
  {
    step: 5,
    lines: [
      {
        text: "Next: Delete apps that you don't use.",
      },
      {
        text: "Note: There are two ways to remove apps on an iPhone.",
      },
      {
        text: "Delete Apps – removes an app and all its data.",
      },
      {
        text: "Offload Apps – removes an app but keeps a backup of its data.",
      },
      {
        text: "How do I delete apps?",
      },
      {
        text: "Press and hold the app you want to delete and, once it begins to shake around on your screen, tap the “x” in the top left corner.",
      },
      {
        text: "Alternatively, you can go to Settings > General > iPhone Storage > Select app > Delete app.",
      },
      {
        text: "How do I offload apps?",
      },
      {
        text: "Go to Settings > General > iPhone Storage > Offload Unused Apps > Enable.",
      },
      {
        text: "Does that resolve your issue?",
        type: "info",
        props: {
          variant: "filled",
          severity: "info",
          style: {
            fontSize: "1.5rem",
          },
        },
      },
    ],
    options: ["Yes", "No"],
  },
  {
    step: 6,
    lines: [],
    options: ["Open a case"],
  },
  {
    step: 7,
    lines: [
      {
        text: "That's great. We're glad that resolved your issue.",
      },
    ],
    options: ["Done", "Troubleshoot other issues"],
  },
];
