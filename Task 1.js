function calculateAverage(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
      sum += grades[i];
    }
    return sum / grades.length;
  }
  
  
  let grades = [80, 70, 90, 85];
  let average = calculateAverage(grades);
  console.log(`The average grade is: ${average}`);