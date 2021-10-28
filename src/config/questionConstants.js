// export const SUPPORT_QUESTIONS = [
//     {
//         id: '1',
//         question: " To get started, please select the correct iPhone model from the options below.",
//         options: ["iPhone 12", "iPhone 11", "iPhone XS", "iPhone XS Max"],
//     },
//     {
//         id: '2',

// ]
export const SUPPORT_QUESTIONS = [
  {
    id: "1",
    step: 1,
    messages: [
      {
        id: "1",
        text: "<h3>Welcome to iPhone troubleshooting</h3>",
        type: "message",
      },
      {
        id: "2",
        text: "To get started, please select the correct iPhone model from the options below.",
        type: "message",
      },
    ],
    options: [
      "iPhone 12",
      "iPhone 11",
      "iPhone XS",
      "iPhone XR",
      "iPhone XS Max",
      "iPhone X",
    ],
  },
];
// {
//     id: '2',
//     text: "Thank you for the information. Please select the issue you are experiencing with your iPhone.",
//     type: "info",
//     options: ["iPhone is running slowly", "iPhone is not responding", "iPhone is not working", "iPhone is not charging"],
