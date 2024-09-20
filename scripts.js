


 

function calculateTax(income, expenses) { 
    if (income < 0 || expenses < 0 || income < expenses) {
      return "Invalid Input";
    }
    let difference = income - expenses;
    let tax = difference * 0.20;
    return tax;
  }
     
  console.log(20,30)




  function sendNotification(email) {
    let atPosition = email.indexOf('@');
    if (atPosition === -1 || atPosition === 0 || atPosition === email.length - 1) {
      return "Invalid Email";
    }
    let username = email.slice(0, atPosition);       
    let domainname = email.slice(atPosition + 1);    
    if (domainname === "") {
      return "Invalid Email";
    }
    return username + " sent you an email from " + domainname;
  }
  
  
 





function checkDigitsInName(name) {
    if (typeof name !== 'string') {
      return "Invalid Input";
    }
    for (let i = 0; i < name.length; i++) {
      let char = name[i];
      if (char >= '0' && char <= '9') {
        return true;
      }
    }
    return false;
  }
   
  




function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || 
        typeof obj.name !== 'string' ||
        typeof obj.testScore !== 'number' || 
        typeof obj.schoolGrade !== 'number' ||
        typeof obj.isFFamily !== 'boolean') {
      return "Invalid Input";
        }
    if (obj.testScore > 50 || obj.schoolGrade > 30) {
      return "Invalid Input";
    }
    let totalScore = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily) {
      totalScore += 20;
    }
    return totalScore >= 80;
  }
  
 






function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
      return "Invalid Input";
    }
    for (let i = 0; i < waitingTimes.length; i++) {
      if (typeof waitingTimes[i] !== 'number') {
        return "Invalid Input";
      }
    } 
    let totalTime = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
      totalTime += waitingTimes[i];
    }
    let averageTime = Math.round(totalTime / waitingTimes.length);
    let remainingPeople = serialNumber - waitingTimes.length - 1;
    if (remainingPeople <= 0) {
      return 0;
    }
    let totalWaitTime = remainingPeople * averageTime;
    return totalWaitTime;
  }
  
  