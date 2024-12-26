const op = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b,
  div: (a, b) => a / b,
  ope: {
    add: "+",
    sub: "-",
    mul: "x",
    div: "÷",
  },
};

export const generateMathProblem = (level, operations) => {
  let maxValue;
  let operatorSign;
  let operator;

  // assign operator & operatorSign
  if (operations.length === 1) {
    operator = operations[0];
    operatorSign = op.ope[operator];
  } else {
    operator = operations[Math.floor(Math.random() * operations.length)];
    operatorSign = op.ope[operator];
  }

  // Set max value based on difficulty level
  switch (level) {
    case "veryEasy":
      maxValue = 5;
      break;
    case "easy":
      maxValue = 10;
      break;
    case "medium":
      maxValue = 25;
      break;
    case "hard":
      maxValue = 50;
      break;
    case "veryHard":
      maxValue = 100;
      break;
    default:
      throw new Error("Invalid level");
  }


  // keep running loop until we return proper math problem
  while(true) {
    // Generate two random numbers within the range
    const num1 = Math.floor(Math.random() * (maxValue + 1));
    const num2 = Math.floor(Math.random() * (maxValue + 1));
  
    // Calculate the answer
    const answer = op[operator](num1, num2);
  
    // Check if the answer is a positive
    if (answer >= 0) {
      if (operator === 'div') {
        // Check if the answer is a whole number
        if (num1 % num2 === 0) {
          // Return the problem and answer
          return {
            problem: `${num1} ${operatorSign} ${num2}`,
            operatorSign,
            answer,
            level,
            num1,
            num2,
          };
        }
      } else {
        // Return the problem and answer
        return {
          problem: `${num1} ${operatorSign} ${num2}`,
          operatorSign,
          answer,
          level,
          num1,
          num2,
        };
      }
    }
  }
}