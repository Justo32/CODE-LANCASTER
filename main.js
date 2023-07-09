// // document.getElementById("wageForm").addEventListener("submit", function(event) {
// //     event.preventDefault(); // Prevent form submission
  
// //     // Get input values
// //     var regularWeeklyWorkingHours = parseFloat(document.getElementById("regularWeeklyWorkingHours").value);
// //     var monthlyOvertime = parseFloat(document.getElementById("monthlyOvertime").value);
// //     var pensionPayments = parseFloat(document.getElementById("pensionPayments").value);
// //     var additionalVoluntaryContributions = parseFloat(document.getElementById("additionalVoluntaryContributions").value);
// //     var studentLoan = parseFloat(document.getElementById("studentLoan").value);
// //     var postGradStudentLoan = parseFloat(document.getElementById("postGradStudentLoan").value);
// //     var additionalDeductions = parseFloat(document.getElementById("additionalDeductions").value);
  
// //     // Calculate taxable earnings
// //     var annualSalary = 39942;
// //     var taxAllowance = 12630;
// //     var taxableEarnings = annualSalary - taxAllowance;
  
// //     // Calculate tax payments
// //     var taxPayments = 4739.19;
  
// //     // Calculate national insurance (NI)
// //     var ni = 3147.66;
  
// //     // Calculate total deductions
// //     var totalDeductions = taxPayments + ni + pensionPayments + studentLoan + postGradStudentLoan + additionalDeductions;
  
// //     // Calculate take-home pay
// //     var takeHomePay = taxableEarnings - totalDeductions;
  
// //     // Display result
// //     var resultElement = document.getElementById("result");
// //     resultElement.textContent = "Your total take-home pay is £" + takeHomePay.toFixed(2);
// //   });

  
// document.getElementById("wageForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission
  
//     // Get input values
//     var regularWeeklyWorkingHours = parseFloat(document.getElementById("regularWeeklyWorkingHours").value);
//     var monthlyOvertime = parseFloat(document.getElementById("monthlyOvertime").value);
//     var pensionPayments = parseFloat(document.getElementById("pensionPayments").value);
//     var additionalVoluntaryContributions = parseFloat(document.getElementById("additionalVoluntaryContributions").value);
//     var studentLoan = parseFloat(document.getElementById("studentLoan").value);
//     var postGradStudentLoan = parseFloat(document.getElementById("postGradStudentLoan").value);
//     var additionalDeductions = parseFloat(document.getElementById("additionalDeductions").value);
  
//     // Constants
//     var taxAllowance = 12630;
  
//     // Call the calculate function with the provided parameters
//     var takeHomePay = calculateWage(regularWeeklyWorkingHours, monthlyOvertime, pensionPayments, additionalVoluntaryContributions, studentLoan, postGradStudentLoan, additionalDeductions);
  
//     // Display result
//     var resultElement = document.getElementById("result");
//     resultElement.textContent = "Your total take-home pay is £" + takeHomePay.toFixed(2);
//   });
  
//   function calculateWage(regularWeeklyWorkingHours, monthlyOvertime, pensionPayments, additionalVoluntaryContributions, studentLoan, postGradStudentLoan, additionalDeductions) {
//     // Constants
//     var annualSalary = 39942;
//     var taxAllowance = 12630;
  
//     // Calculate taxable earnings
//     var taxableEarnings = annualSalary - taxAllowance;
  
//     // Calculate tax payments
//     var taxPayments = 4739.19;
  
//     // Calculate national insurance (NI)
//     var ni = 3147.66;
  
//     // Calculate total deductions
//     var totalDeductions = taxPayments + ni + pensionPayments + studentLoan + postGradStudentLoan + additionalDeductions;
  
//     // Calculate take-home pay
//     var takeHomePay = taxableEarnings - totalDeductions;
  
//     // Return the calculated take-home pay
//     return takeHomePay;
//   }
  


// const form = document.getElementById('wageForm');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     //employee category
    
//     // employee type
//     const EMPLOYEE_TYPE_FULL_TIME = 'full-time';
//     const EMPLOYEE_TYPE_PART_TIME = 'part-time';
//     // employee required hours
//     const FULL_TIME_HOURS = 150;
//     const PART_TIME_HOURS = 80;
//     // employee rate in terms of wage for full time
//     const FULL_TIME_HOURLY_RATE = 11.75;
//     const FULL_TIME_OVERTIME_RATE = 13.75;
//     const FULL_TIME_BANK_HOLIDAY_RATE = 23.5;
//     const FULL_TIME_WAKING_NIGHT_RATE = 111.625;
//     const FULL_TIME_SLEEP_RATE = 30;
//     const FULL_TIME_EXTRA_SLEEP_RATE = 60;
//     // employee rate in terms of wage for part time
//     const PART_TIME_HOURLY_RATE = 11.75;
//     const PART_TIME_OVERTIME_RATE = 13.75;
//     const PART_TIME_BANK_HOLIDAY_RATE = 23.5;
//     const PART_TIME_SLEEP_RATE = 30;
//     const PART_TIME_WAKING_NIGHT_RATE = 111.625;
//     const PART_TIME_EXTRA_SLEEP_RATE = 60;
//     // get users input
//     const employeeType = document.getElementById('employeeType').value;
//     const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
//     const holidayHour = parseFloat(document.getElementById('holidayHour').value) || 0;
//     const sleepTimes = parseFloat(document.getElementById('sleepTimes').value) || 0;
//     const extraSleepTimes = parseFloat(document.getElementById('extraSleepTimes').value) || 0;
//     const wakingNightTimes = parseFloat(document.getElementById('wakingNightTimes').value) || 0;
//     // initialize wage variable
//     let regularPay = 0;
//     // calculation logic base on employee type for full time
//     if (employeeType === EMPLOYEE_TYPE_FULL_TIME) {
//         if (hoursWorked <= FULL_TIME_HOURS) {
//             regularPay = FULL_TIME_HOURLY_RATE * hoursWorked;
//         } else if (hoursWorked > FULL_TIME_HOURS) {
//             const overtimeHours = hoursWorked - FULL_TIME_HOURS;
//             regularPay = FULL_TIME_HOURLY_RATE * FULL_TIME_HOURS + FULL_TIME_OVERTIME_RATE * overtimeHours;
//         }
//         // logic for full time
//         regularPay += FULL_TIME_BANK_HOLIDAY_RATE * holidayHour;
//         regularPay += FULL_TIME_SLEEP_RATE * sleepTimes;
//         regularPay += FULL_TIME_EXTRA_SLEEP_RATE * extraSleepTimes;
//         regularPay += FULL_TIME_WAKING_NIGHT_RATE * wakingNightTimes;
//         // calculation logic base on employee type for part time
//     } else if (employeeType === EMPLOYEE_TYPE_PART_TIME) {
//         if (hoursWorked <= PART_TIME_HOURS) {
//             regularPay = PART_TIME_HOURLY_RATE * hoursWorked;
//         } else if (hoursWorked > PART_TIME_HOURS) {
//             const overtimeHours = hoursWorked - PART_TIME_HOURS;
//             regularPay = PART_TIME_HOURLY_RATE * PART_TIME_HOURS + PART_TIME_OVERTIME_RATE * overtimeHours;
//         }

//         regularPay += PART_TIME_BANK_HOLIDAY_RATE * holidayHour;
//         regularPay += PART_TIME_SLEEP_RATE * sleepTimes;
//         regularPay += PART_TIME_EXTRA_SLEEP_RATE * extraSleepTimes;
//         regularPay += PART_TIME_WAKING_NIGHT_RATE * wakingNightTimes;
//          // Round up the result
//          regularPay = Math.ceil(regularPay);
//     }
//     // display result
//     document.getElementById('result').textContent = `Your total wage for this month is: ${regularPay}`;
// });






// const form = document.getElementById('wageForm');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//         //employee category
//         const EMPLOYEE_TYPE__SUPPORT_WORKER = 'support-worker';
//         const EMPLOYEE_TYPE_SENIOR_SUPPORT_WORKER = 'senior-support-worker';
//         // employee type
//         const EMPLOYEE_TYPE_FULL_TIME = 'full-time';
//         const EMPLOYEE_TYPE_PART_TIME = 'part-time';
//         // employee required hours
//         const FULL_TIME_HOURS = 150;
//         const PART_TIME_HOURS = 80;
//         // employee rate in terms of wage for full time
//         const FULL_TIME_HOURLY_RATE_SUPPORT_WORKER = 11.75;
//         const FULL_TIME_OVERTIME_RATE_SUPPORT_WORkER = 13.75;
//         const FULL_TIME_BANK_HOLIDAY_RATE_SUPPORT_WORKER = 23.5;
//         const FULL_TIME_HOURLY_RATE_SENIOR_SUPPORT_WORKER = 12.25;
//         const FULL_TIME_OVERTIME_RATE_SENIOR_SUPPORT_WORkER = 14.25;
//         const FULL_TIME_BANK_HOLIDAY_RATE_SENIOR_SUPPORT_WORKER = 24.50;
//         const FULL_TIME_WAKING_NIGHT_RATE = 111.625;
//         const FULL_TIME_SLEEP_RATE = 30;
//         const FULL_TIME_EXTRA_SLEEP_RATE = 60;
//         // employee rate in terms of wage for part time
//         const PART_TIME_HOURLY_RATE_SUPPORT_WORKER = 11.75;
//         const PART_TIME_OVERTIME_RATE_SUPPORT_WORKER = 13.75;
//         const PART_TIME_BANK_HOLIDAY_RATE_SUPPORT_WORKER = 23.5;
//         const PART_TIME_HOURLY_RATE_SENIOR_SUPPORT_WORKER = 12.25;
//         const PART_TIME_OVERTIME_RATE_SENIOR_SUPPORT_WORKER = 14.25;
//         const PART_TIME_BANK_HOLIDAY_RATE_SENIOR_SUPPORT_WORKER = 24.5;
//         const PART_TIME_SLEEP_RATE = 30;
//         const PART_TIME_WAKING_NIGHT_RATE = 111.625;
//         const PART_TIME_EXTRA_SLEEP_RATE = 60;
//         // get users input
//         const employeeCategory = document.getElementById('employeeCategory').value;
//         const employeeType = document.getElementById('employeeType').value;
//         const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
//         const holidayHour = parseFloat(document.getElementById('holidayHour').value) || 0;
//         const sleepTimes = parseFloat(document.getElementById('sleepTimes').value) || 0;
//         const extraSleepTimes = parseFloat(document.getElementById('extraSleepTimes').value) || 0;
//         const wakingNightTimes = parseFloat(document.getElementById('wakingNightTimes').value) || 0;
//         // initialize wage variable
//         let regularPay = 0;
//         // calculation logic base on employee type for full time support worker
//         if (employeeCategory === EMPLOYEE_TYPE__SUPPORT_WORKER){
//             if (employeeType === EMPLOYEE_TYPE_FULL_TIME) {
//                 if (hoursWorked <= FULL_TIME_HOURS) {
//                     regularPay = FULL_TIME_HOURLY_RATE_SUPPORT_WORKER * hoursWorked;
//                 } else if (hoursWorked > FULL_TIME_HOURS) {
//                     const overtimeHours = hoursWorked - FULL_TIME_HOURS;
//                     regularPay = FULL_TIME_HOURLY_RATE_SUPPORT_WORKER * FULL_TIME_HOURS + FULL_TIME_OVERTIME_RATE_SUPPORT_WORkER * overtimeHours;
//                 }
//                 // logic for full time
//                 regularPay += FULL_TIME_BANK_HOLIDAY_RATE_SUPPORT_WORKER * holidayHour;
//                 regularPay += FULL_TIME_SLEEP_RATE * sleepTimes;
//                 regularPay += FULL_TIME_EXTRA_SLEEP_RATE * extraSleepTimes;
//                 regularPay += FULL_TIME_WAKING_NIGHT_RATE * wakingNightTimes;
//                 // calculation logic base on employee type for part time
//             } else if (employeeType === EMPLOYEE_TYPE_PART_TIME) {
//                 if (hoursWorked <= PART_TIME_HOURS) {
//                     regularPay = PART_TIME_HOURLY_RATE_SUPPORT_WORKER * hoursWorked;
//                 } else if (hoursWorked > PART_TIME_HOURS) {
//                     const overtimeHours = hoursWorked - PART_TIME_HOURS;
//                     regularPay = PART_TIME_HOURLY_RATE_SUPPORT_WORKER * PART_TIME_HOURS + PART_TIME_OVERTIME_RATE_SUPPORT_WORKER * overtimeHours;
//                 }
//             }

//                 regularPay += PART_TIME_BANK_HOLIDAY_RATE_SUPPORT_WORKER * holidayHour;
//                 regularPay += PART_TIME_SLEEP_RATE * sleepTimes;
//                 regularPay += PART_TIME_EXTRA_SLEEP_RATE * extraSleepTimes;
//                 regularPay += PART_TIME_WAKING_NIGHT_RATE * wakingNightTimes;
//                 // Round up the result

//         if (employeeCategory === EMPLOYEE_TYPE__SENIOR_SUPPORT_WORKER){
//             if (employeeType === EMPLOYEE_TYPE_FULL_TIME) {
//                 if (hoursWorked <= FULL_TIME_HOURS) {
//                     regularPay = FULL_TIME_HOURLY_RATE_SENIOR_SUPPORT_WORKER * hoursWorked;
//                 } else if (hoursWorked > FULL_TIME_HOURS) {
//                     const overtimeHours = hoursWorked - FULL_TIME_HOURS;
//                     regularPay = FULL_TIME_HOURLY_RATE_SENIOR_SUPPORT_WORKER * FULL_TIME_HOURS + FULL_TIME_OVERTIME_RATE_SENIOR_SUPPORT_WORkER * overtimeHours;
//                 }
//                 // logic for full time
//                 regularPay += FULL_TIME_BANK_HOLIDAY_RATE_SENIOR_SUPPORT_WORKER * holidayHour;
//                 regularPay += FULL_TIME_SLEEP_RATE * sleepTimes;
//                 regularPay += FULL_TIME_EXTRA_SLEEP_RATE * extraSleepTimes;
//                 regularPay += FULL_TIME_WAKING_NIGHT_RATE * wakingNightTimes;
//                 // calculation logic base on employee type for part time
//             } else if (employeeType === EMPLOYEE_TYPE_PART_TIME) {
//                 if (hoursWorked <= PART_TIME_HOURS) {
//                     regularPay = PART_TIME_HOURLY_RATE+SENIOR_SUPPORT_WORKER * hoursWorked;
//                 } else if (hoursWorked > PART_TIME_HOURS) {
//                     const overtimeHours = hoursWorked - PART_TIME_HOURS;
//                     regularPay = PART_TIME_HOURLY_RATE_SENIOR_SUPPORT_WORKER * PART_TIME_HOURS + PART_TIME_OVERTIME_RATE_SENIOR_SUPPORT_WORKER * overtimeHours;
//                 }
//             }
//                 regularPay += PART_TIME_BANK_HOLIDAY_RATE_SENIOR_SUPPORT_WORKER * holidayHour;
//                 regularPay += PART_TIME_SLEEP_RATE * sleepTimes;
//                 regularPay += PART_TIME_EXTRA_SLEEP_RATE * extraSleepTimes;
//                 regularPay += PART_TIME_WAKING_NIGHT_RATE * wakingNightTimes;
//         regularPay = Math.ceil(regularPay);
//             }
//         // display result
//         document.getElementById('result').textContent = `Your total wage for this month is: ${regularPay}`;
// });

const form = document.getElementById('wageForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    //employee category
    const EMPLOYEE_CATEGORY__SUPPORT_WORKER = 'support-worker';
    const EMPLOYEE_CATEGORY_SENIOR_SUPPORT_WORKER = 'senior-support-worker';
    // employee type
    const EMPLOYEE_TYPE_FULL_TIME = 'full-time';
    const EMPLOYEE_TYPE_PART_TIME = 'part-time';
    // employee required hours
    const FULL_TIME_HOURS = 150;
    const PART_TIME_HOURS = 80;
    // employee rate in terms of wage for full time
    const FULL_TIME_HOURLY_RATE_SUPPORT_WORKER = 11.75;
    const FULL_TIME_OVERTIME_RATE_SUPPORT_WORKER = 13.75;
    const FULL_TIME_BANK_HOLIDAY_RATE_SUPPORT_WORKER = 23.5;
    const FULL_TIME_HOURLY_RATE_SENIOR_SUPPORT_WORKER = 12.25;
    const FULL_TIME_OVERTIME_RATE_SENIOR_SUPPORT_WORKER = 14.25;
    const FULL_TIME_BANK_HOLIDAY_RATE_SENIOR_SUPPORT_WORKER = 24.50;
    const FULL_TIME_WAKING_NIGHT_RATE = 111.625;
    const FULL_TIME_SLEEP_RATE = 30;
    const FULL_TIME_EXTRA_SLEEP_RATE = 60;
    // employee rate in terms of wage for part time
    const PART_TIME_HOURLY_RATE_SUPPORT_WORKER = 11.75;
    const PART_TIME_OVERTIME_RATE_SUPPORT_WORKER = 13.75;
    const PART_TIME_BANK_HOLIDAY_RATE_SUPPORT_WORKER = 23.5;
    const PART_TIME_HOURLY_RATE_SENIOR_SUPPORT_WORKER = 12.25;
    const PART_TIME_OVERTIME_RATE_SENIOR_SUPPORT_WORKER = 14.25;
    const PART_TIME_BANK_HOLIDAY_RATE_SENIOR_SUPPORT_WORKER = 24.5;
    const PART_TIME_SLEEP_RATE = 30;
    const PART_TIME_WAKING_NIGHT_RATE = 111.625;
    const PART_TIME_EXTRA_SLEEP_RATE = 60;
    // get users input
    const employeeCategory = document.getElementById('employeeCategory').value;
    const employeeType = document.getElementById('employeeType').value;
    const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
    const holidayHour = parseFloat(document.getElementById('holidayHour').value) || 0;
    const sleepTimes = parseFloat(document.getElementById('sleepTimes').value) || 0;
    const extraSleepTimes = parseFloat(document.getElementById('extraSleepTimes').value) || 0;
    const wakingNightTimes = parseFloat(document.getElementById('wakingNightTimes').value) || 0;
    console.log("category is " + employeeCategory)
    console.log("Type is " + employeeType)
    console.log("horsWorked is " + hoursWorked)
    console.log("holidayHour is " + holidayHour)
    console.log("sleepTimes is " + sleepTimes)
    console.log("extraSleepTimes is " + extraSleepTimes)
    console.log("wakingNightTimes is " + wakingNightTimes)
    // initialize wage variable
    let regularPay = 0;

    // calculation logic base on employee type for full time support worker
    if (employeeCategory === EMPLOYEE_CATEGORY__SUPPORT_WORKER) {
        if (employeeType === EMPLOYEE_TYPE_FULL_TIME) {
            if (hoursWorked <= FULL_TIME_HOURS) {
                regularPay = FULL_TIME_HOURLY_RATE_SUPPORT_WORKER * hoursWorked;
            } else if (hoursWorked > FULL_TIME_HOURS) {
                const overtimeHours = hoursWorked - FULL_TIME_HOURS;
                regularPay = FULL_TIME_HOURLY_RATE_SUPPORT_WORKER * FULL_TIME_HOURS + FULL_TIME_OVERTIME_RATE_SUPPORT_WORKER * overtimeHours;
            }
            // logic for full time
            regularPay += FULL_TIME_BANK_HOLIDAY_RATE_SUPPORT_WORKER * holidayHour;
            console.log("regularPay is " + regularPay)
            regularPay += FULL_TIME_SLEEP_RATE * sleepTimes;
            regularPay += FULL_TIME_EXTRA_SLEEP_RATE * extraSleepTimes;
            regularPay += FULL_TIME_WAKING_NIGHT_RATE * wakingNightTimes;
        }
    }
        // calculation logic base on employee type for part time
        else if (employeeType === EMPLOYEE_TYPE_PART_TIME) {
            if (hoursWorked <= PART_TIME_HOURS) {
                regularPay = PART_TIME_HOURLY_RATE_SUPPORT_WORKER * hoursWorked;
            } else if (hoursWorked > PART_TIME_HOURS) {
                const overtimeHours = hoursWorked - PART_TIME_HOURS;
                regularPay = PART_TIME_HOURLY_RATE_SUPPORT_WORKER * PART_TIME_HOURS + PART_TIME_OVERTIME_RATE_SUPPORT_WORKER * overtimeHours;
            }
        
            regularPay += PART_TIME_BANK_HOLIDAY_RATE_SUPPORT_WORKER * holidayHour;
            regularPay += PART_TIME_SLEEP_RATE * sleepTimes;
            regularPay += PART_TIME_EXTRA_SLEEP_RATE * extraSleepTimes;
            regularPay += PART_TIME_WAKING_NIGHT_RATE * wakingNightTimes;
    }
    // calculation logic base on employee type for full time senior support worker
    if (employeeCategory === EMPLOYEE_CATEGORY_SENIOR_SUPPORT_WORKER) {
        if (employeeType === EMPLOYEE_TYPE_FULL_TIME) {
            if (hoursWorked <= FULL_TIME_HOURS) {
                regularPay = FULL_TIME_HOURLY_RATE_SENIOR_SUPPORT_WORKER * hoursWorked;
            } else if (hoursWorked > FULL_TIME_HOURS) {
                const overtimeHours = hoursWorked - FULL_TIME_HOURS;
                regularPay = FULL_TIME_HOURLY_RATE_SENIOR_SUPPORT_WORKER * FULL_TIME_HOURS + FULL_TIME_OVERTIME_RATE_SENIOR_SUPPORT_WORKER * overtimeHours;
            }
            // logic for full time
            regularPay += FULL_TIME_BANK_HOLIDAY_RATE_SENIOR_SUPPORT_WORKER * holidayHour;
            regularPay += FULL_TIME_SLEEP_RATE * sleepTimes;
            regularPay += FULL_TIME_EXTRA_SLEEP_RATE * extraSleepTimes;
            regularPay += FULL_TIME_WAKING_NIGHT_RATE * wakingNightTimes;
        }
    }
        // calculation logic base on employee type for part time
        else if (employeeType === EMPLOYEE_TYPE_PART_TIME) {
            if (hoursWorked <= PART_TIME_HOURS) {
                regularPay = PART_TIME_HOURLY_RATE_SENIOR_SUPPORT_WORKER * hoursWorked;
            } else if (hoursWorked > PART_TIME_HOURS) {
                const overtimeHours = hoursWorked - PART_TIME_HOURS;
                regularPay = PART_TIME_HOURLY_RATE_SENIOR_SUPPORT_WORKER * PART_TIME_HOURS + PART_TIME_OVERTIME_RATE_SENIOR_SUPPORT_WORKER * overtimeHours;
            }
        
            regularPay += PART_TIME_BANK_HOLIDAY_RATE_SENIOR_SUPPORT_WORKER * holidayHour;
            regularPay += PART_TIME_SLEEP_RATE * sleepTimes;
            regularPay += PART_TIME_EXTRA_SLEEP_RATE * extraSleepTimes;
            regularPay += PART_TIME_WAKING_NIGHT_RATE * wakingNightTimes;
    }

    // regularPay = Math.ceil(regularPay);
    // display result
    document.getElementById('result').textContent = `Your total wage for this month is: ${regularPay}`;
});
