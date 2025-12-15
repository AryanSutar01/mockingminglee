
// Seed data function - can be called on server start or via API
const Test = require("./models/Test");
const Question = require("./models/Question");

async function seedData() {
  try {
    await Test.deleteMany({});
    await Question.deleteMany({});

    const test1 = await Test.create({
      name: "Aptitude Test",
      description: "Company level aptitude MCQs"
    });

    const test2 = await Test.create({
      name: "Technical MCQ Test",
      description: "Programming and CS fundamentals"
    });

    const test3 = await Test.create({
      name: "HR & Behavioral Test",
      description: "HR interview and behavioral questions"
    });

    await Question.insertMany([
      /* ================= APTITUDE (25) ================= */
      { testId: test1._id, text: "A train runs at 60 km/hr. How long will it take to cover 180 km?", options: ["2 hrs", "2.5 hrs", "3 hrs", "4 hrs"], correctOptionIndex: 2 },
      { testId: test1._id, text: "What is 30% of 450?", options: ["120", "135", "150", "165"], correctOptionIndex: 1 },
      { testId: test1._id, text: "Find the next number: 3, 9, 27, ?", options: ["54", "72", "81", "90"], correctOptionIndex: 2 },
      { testId: test1._id, text: "A man gains 20% by selling an item for ₹600. Cost price?", options: ["₹480", "₹500", "₹520", "₹550"], correctOptionIndex: 0 },
      { testId: test1._id, text: "Average of first 20 natural numbers?", options: ["9.5", "10", "10.5", "11"], correctOptionIndex: 2 },
      { testId: test1._id, text: "If 5x = 125, find x.", options: ["15", "20", "25", "30"], correctOptionIndex: 2 },
      { testId: test1._id, text: "HCF of 18 and 24?", options: ["3", "6", "9", "12"], correctOptionIndex: 1 },
      { testId: test1._id, text: "Simple interest on ₹4000 at 5% for 2 years?", options: ["₹400", "₹450", "₹500", "₹600"], correctOptionIndex: 0 },
      { testId: test1._id, text: "Find the odd one out: 2, 6, 12, 20, 30", options: ["6", "12", "20", "30"], correctOptionIndex: 0 },
      { testId: test1._id, text: "If today is Tuesday, what day will it be after 15 days?", options: ["Wednesday", "Thursday", "Friday", "Saturday"], correctOptionIndex: 1 },
      { testId: test1._id, text: "Work done by A in 2 days if A can do work in 10 days?", options: ["1/10", "1/5", "1/8", "1/6"], correctOptionIndex: 1 },
      { testId: test1._id, text: "Next number: 1, 4, 9, 16, ?", options: ["20", "25", "30", "36"], correctOptionIndex: 1 },
      { testId: test1._id, text: "What is 75% of 160?", options: ["100", "110", "120", "130"], correctOptionIndex: 2 },
      { testId: test1._id, text: "If SP = ₹720 and CP = ₹600, profit %?", options: ["15%", "18%", "20%", "25%"], correctOptionIndex: 2 },
      { testId: test1._id, text: "LCM of 12 and 15?", options: ["30", "45", "60", "90"], correctOptionIndex: 2 },
      { testId: test1._id, text: "10% discount on ₹500. Selling price?", options: ["₹450", "₹460", "₹470", "₹480"], correctOptionIndex: 0 },
      { testId: test1._id, text: "Ratio 2:3 equals?", options: ["0.5", "0.67", "0.75", "1.5"], correctOptionIndex: 1 },
      { testId: test1._id, text: "Square root of 196?", options: ["12", "13", "14", "15"], correctOptionIndex: 2 },
      { testId: test1._id, text: "Find missing number: 5, 15, 45, ?", options: ["90", "135", "150", "180"], correctOptionIndex: 1 },
      { testId: test1._id, text: "If x + 10 = 25, find x.", options: ["10", "12", "15", "20"], correctOptionIndex: 2 },
      { testId: test1._id, text: "Convert 0.75 into percentage.", options: ["70%", "75%", "80%", "85%"], correctOptionIndex: 1 },
      { testId: test1._id, text: "Cube of 4?", options: ["16", "32", "48", "64"], correctOptionIndex: 3 },
      { testId: test1._id, text: "120m train crosses pole in 6 sec. Speed?", options: ["60", "72", "80", "90"], correctOptionIndex: 1 },
      { testId: test1._id, text: "2³ + 3² = ?", options: ["13", "15", "17", "19"], correctOptionIndex: 2 },
      { testId: test1._id, text: "Average of 2 and 8?", options: ["4", "5", "6", "7"], correctOptionIndex: 1 },

      /* ================= TECHNICAL (25) ================= */
      { testId: test2._id, text: "Which language is used for styling web pages?", options: ["HTML", "CSS", "JavaScript", "PHP"], correctOptionIndex: 1 },
      { testId: test2._id, text: "Which keyword declares variable in JavaScript?", options: ["var", "int", "string", "float"], correctOptionIndex: 0 },
      { testId: test2._id, text: "Which method adds element at end of array?", options: ["push()", "pop()", "shift()", "unshift()"], correctOptionIndex: 0 },
      { testId: test2._id, text: "Which HTTP method updates data?", options: ["GET", "POST", "PUT", "FETCH"], correctOptionIndex: 2 },
      { testId: test2._id, text: "Which data structure follows LIFO?", options: ["Queue", "Stack", "Tree", "Graph"], correctOptionIndex: 1 },
      { testId: test2._id, text: "MongoDB stores data in?", options: ["Rows", "Tables", "Documents", "Files"], correctOptionIndex: 2 },
      { testId: test2._id, text: "Which React hook is used for state?", options: ["useEffect", "useState", "useRef", "useMemo"], correctOptionIndex: 1 },
      { testId: test2._id, text: "Which operator checks value & type?", options: ["==", "=", "===", "!="], correctOptionIndex: 2 },
      { testId: test2._id, text: "Which HTTP status code is server error?", options: ["200", "301", "404", "500"], correctOptionIndex: 3 },
      { testId: test2._id, text: "Which is NOT Java feature?", options: ["OOP", "Secure", "Pointer usage", "Portable"], correctOptionIndex: 2 },
      { testId: test2._id, text: "API stands for?", options: ["Application Programming Interface", "Advanced Program Index", "Applied Program Internet", "None"], correctOptionIndex: 0 },
      { testId: test2._id, text: "Which tag creates link in HTML?", options: ["<a>", "<link>", "<href>", "<url>"], correctOptionIndex: 0 },
      { testId: test2._id, text: "Convert object to JSON?", options: ["JSON.parse()", "JSON.stringify()", "toJSON()", "convert()"], correctOptionIndex: 1 },
      { testId: test2._id, text: "Which database is relational?", options: ["MongoDB", "Firebase", "MySQL", "Redis"], correctOptionIndex: 2 },
      { testId: test2._id, text: "Which loop runs at least once?", options: ["for", "while", "do-while", "foreach"], correctOptionIndex: 2 },
      { testId: test2._id, text: "Node.js is?", options: ["Framework", "Runtime", "Database", "Compiler"], correctOptionIndex: 1 },
      { testId: test2._id, text: "npm install does what?", options: ["Deletes packages", "Installs packages", "Updates OS", "Runs server"], correctOptionIndex: 1 },
      { testId: test2._id, text: "Secure web protocol?", options: ["HTTP", "FTP", "HTTPS", "SMTP"], correctOptionIndex: 2 },
      { testId: test2._id, text: "Inheritance keyword in Java?", options: ["extends", "inherits", "implements", "super"], correctOptionIndex: 0 },
      { testId: test2._id, text: "Which React prop is mandatory?", options: ["state", "props", "key", "ref"], correctOptionIndex: 2 },
      { testId: test2._id, text: "Remove last array element?", options: ["pop()", "push()", "shift()", "slice()"], correctOptionIndex: 0 },
      { testId: test2._id, text: "CSS property for text size?", options: ["font-style", "text-size", "font-size", "size"], correctOptionIndex: 2 },
      { testId: test2._id, text: "Async handling in JS?", options: ["Callbacks", "Promises", "Async/Await", "All"], correctOptionIndex: 3 },
      { testId: test2._id, text: "React default port?", options: ["3000", "4000", "5000", "8080"], correctOptionIndex: 0 },
      { testId: test2._id, text: "Non-primitive data type?", options: ["String", "Number", "Boolean", "Object"], correctOptionIndex: 3 },

      /* ================= HR (25) ================= */
      { testId: test3._id, text: "How do you handle work pressure?", options: ["Plan & prioritize", "Panic", "Avoid", "Quit"], correctOptionIndex: 0 },
      { testId: test3._id, text: "Biggest strength?", options: ["Hard work", "Honesty", "Learning ability", "Leadership"], correctOptionIndex: 2 },
      { testId: test3._id, text: "How do you handle failure?", options: ["Learn", "Ignore", "Blame", "Quit"], correctOptionIndex: 0 },
      { testId: test3._id, text: "Comfortable working in team?", options: ["Yes", "No", "Sometimes", "Not sure"], correctOptionIndex: 0 },
      { testId: test3._id, text: "Why do you want this job?", options: ["Career growth", "Salary", "No reason", "Pressure"], correctOptionIndex: 0 },
      { testId: test3._id, text: "How do you handle conflicts?", options: ["Discuss calmly", "Avoid", "Argue", "Escalate"], correctOptionIndex: 0 },
      { testId: test3._id, text: "Willing to relocate?", options: ["Yes", "No", "Maybe", "Not sure"], correctOptionIndex: 0 },
      { testId: test3._id, text: "What motivates you?", options: ["Learning", "Money", "Fear", "Pressure"], correctOptionIndex: 0 },
      { testId: test3._id, text: "How do you manage deadlines?", options: ["Plan", "Delay", "Ignore", "Rush"], correctOptionIndex: 0 },
      { testId: test3._id, text: "What if you make mistake?", options: ["Fix it", "Hide", "Blame", "Ignore"], correctOptionIndex: 0 },
      { testId: test3._id, text: "How do you handle feedback?", options: ["Accept", "Ignore", "Defend", "Avoid"], correctOptionIndex: 0 },
      { testId: test3._id, text: "Are you a quick learner?", options: ["Yes", "No", "Sometimes", "Not sure"], correctOptionIndex: 0 },
      { testId: test3._id, text: "Reaction to change?", options: ["Adapt", "Resist", "Ignore", "Avoid"], correctOptionIndex: 0 },
      { testId: test3._id, text: "Leadership or teamwork?", options: ["Teamwork", "Leadership", "Both", "None"], correctOptionIndex: 2 },
      { testId: test3._id, text: "How prioritize tasks?", options: ["Importance", "Random", "Late first", "Ignore"], correctOptionIndex: 0 },
      { testId: test3._id, text: "Work ethic?", options: ["Strong", "Average", "Weak", "Unknown"], correctOptionIndex: 0 },
      { testId: test3._id, text: "Handling criticism?", options: ["Learn", "Ignore", "Argue", "Avoid"], correctOptionIndex: 0 },
      { testId: test3._id, text: "Are deadlines important?", options: ["Yes", "No", "Sometimes", "Rarely"], correctOptionIndex: 0 },
      { testId: test3._id, text: "Preferred work environment?", options: ["Collaborative", "Isolated", "Strict", "Any"], correctOptionIndex: 0 },
      { testId: test3._id, text: "Handling multitasking?", options: ["Plan well", "Confused", "Avoid", "Rush"], correctOptionIndex: 0 },
      { testId: test3._id, text: "Take responsibility?", options: ["Yes", "No", "Sometimes", "Rarely"], correctOptionIndex: 0 },
      { testId: test3._id, text: "Manage stress?", options: ["Stay calm", "Anxious", "Ignore", "Avoid"], correctOptionIndex: 0 },
      { testId: test3._id, text: "Attitude towards learning?", options: ["Always learn", "Sometimes", "Rarely", "Never"], correctOptionIndex: 0 },
      { testId: test3._id, text: "Accept mistakes?", options: ["Yes", "No", "Sometimes", "Rarely"], correctOptionIndex: 0 },
      { testId: test3._id, text: "Contribution to team?", options: ["Active", "Passive", "Rare", "None"], correctOptionIndex: 0 },
    ]);

    return { message: "Seed data created successfully!" };
  } catch (err) {
    console.error(err);
    throw new Error("Failed to seed data");
  }
}

module.exports = seedData;

