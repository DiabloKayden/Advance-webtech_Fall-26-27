
const studentName = "Jihan";
const marks = [];

marks.push(79);
marks.push(67);
marks.push(99);
marks.push(86);
marks.push(73);

function calculateTotal(marks) {
  let total = 0;

  for (let i = 0; i < marks.length; i++) {
    total = total + marks[i];
  }

  return total;
}


function calculateAverage(marks) {
  const total = calculateTotal(marks);
  const average = total / marks.length;

  return average;
}



function calculateGrade(marks) {
  // First check if any subject is failed
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 50) {
      return "F";
    }
  }

  const average = calculateAverage(marks);

  if (average >= 80) {
    return "A+";
  }
  else if (average >= 70) {
    return "A";
  }
  else if (average >= 60) {
    return "B";
  }
  else if (average >= 50) {
    return "C";
  }
  else {
    return "F";
  }
}
function checkPassFail(marks) {
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 50) {
      return "Fail";
    }
  }

  return "Pass";
}

function findHighestMark(marks) {
  let highest = marks[0];

  for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) {
      highest = marks[i];
    }
  }

  return highest;
}

function countPassedSubjects(marks) {
  let count = 0;

  for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 50) {
      count++;
    }
  }

  return count;
}


// Calling the functions
const total = calculateTotal(marks);
const average = calculateAverage(marks);
const grade = calculateGrade(average);
const result = checkPassFail(marks);
const highestMark = findHighestMark(marks);
const passedSubjects = countPassedSubjects(marks);


// Display output
console.log("Student Name:", studentName);
console.log("Marks:", marks);
console.log("Total Marks:", total);
console.log("Average:", average);
console.log("Grade:", grade);
console.log("Result:", result);
console.log("Highest Mark:", highestMark);
console.log("Passed Subjects:", passedSubjects);
