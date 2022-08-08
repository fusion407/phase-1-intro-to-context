let testRecord1 = new createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])

// --------------------------------------
// populates a record from an array         pass

// 1) has a function called createEmployee Record           pass
// 2) populates a firstName field from the 0th element      pass
// 3) populates a familyName field from the 1th element     pass
// 4) populates a title field from the 2th element          pass
// 5) populates a payPerHour field from the 3th element             pass
// 6) initializes a field, timeInEvents, to hold an empty Array     pass
// 7) initializes a field, timeOutEvents, to hold an empty Array    pass    
function createEmployeeRecord(newRecord = [firstName, familyName, title, payPerHour]) {
    const employee = {
        firstName : newRecord[0],
        familyName : newRecord[1],
        title : newRecord[2],
        payPerHour : newRecord[3],
        timeInEvents : [],
        timeOutEvents : []
    }
    return employee
}
console.log('------------')
console.log("Testing createEmployeeRecord function: ")
// test
const testEmployee = createEmployeeRecord(['Gray', 'Worm', 'Security', 1])
console.log('Test employee: ' + 
            testEmployee.firstName + ' ' +
            testEmployee.familyName + ' ' +
            testEmployee.title + ' ' +
            testEmployee.payPerHour + ' '
            )


// --------------------------------------
// process an Array of Arrays into an Array of employee records     pass

// 8) has a function called createEmployeeRecords         pass
// 9) creates two records                                 pass
// 10) correctly assigns the first names                  pass
// 11) creates more than 2 records                        pass
function createEmployeeRecords(newRecords = [record]) {
    let newRecord = {};
    let recordArray = []
    for(let i=0; i<newRecords.length;i++) {
        newRecord = createEmployeeRecord(newRecords[i])
        recordArray.push(newRecord)
    }
    return recordArray
}
// tests
console.log('------------')
console.log("Testing createEmployeeRecords function: ")
let twoRows = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
  ]
let employeeRecords = createEmployeeRecords(twoRows)
console.log(employeeRecords)



// --------------------------------------
// it adds a timeIn event Object to an employee's record of
// timeInEvents when provide an employee record and Date/Time String
// and returns the updated record

// 12) has a function called createTimeInEvent
// 13) creates the correct type
// 14) extracts the correct date
// 15) extracts the correct hour
function createTimeInEvent(someRecord = {record}, timeStamp) {
    let updatedRecord = someRecord;
    let hour = timeStamp.slice(11,15);
    let date = timeStamp.slice(0,10);

    updatedRecord.timeInEvents.push({'type': 'TimeIn'})
    updatedRecord.timeInEvents.push({'date': date})
    updatedRecord.timeInEvents.push({'hour': parseInt(hour)})
    updatedRecord = {
        timeInEvents : [
            {'type': 'TimeIn', 
            'date': date, 
            'hour': parseInt(hour)}
        ]
    }
    return updatedRecord
}
//tests
console.log('------------')
console.log("Testing In Records function: ")
let testUpdatedInRecord = createTimeInEvent(testRecord1, "2014-02-28 1400")
let testInEvent = testUpdatedInRecord.timeInEvents[0]
console.log('expected: TimeIn')
console.log('actual: ' + testInEvent.type)
console.log('expected: "2014-02-28"')
console.log('actual: ' + testInEvent.date)
console.log('expected: 1400')
console.log('actual: ' + testInEvent.hour)
console.log(testUpdatedInRecord)





// --------------------------------------
// it adds a timeOut event Object to an employee's record of
// timeOutEvents when provide an employee record and Date/Time String
// and returns the updated record

// 16) has a function called createTimeOutEvent
// 17) creates the correct type
// 18) extracts the correct date
// 19) extracts the correct hour
function createTimeOutEvent(someRecord = {record}, timeStamp) {
    let updatedRecord = someRecord;
    let hour = timeStamp.slice(11,15);
    let date = timeStamp.slice(0,10);

    updatedRecord.timeOutEvents.push({'type': 'TimeOut'})
    updatedRecord.timeOutEvents.push({'date': date})
    updatedRecord.timeOutEvents.push({'hour': parseInt(hour)})
    updatedRecord = {
        timeOutEvents : [
            {'type': 'TimeOut', 
            'date': date, 
            'hour': parseInt(hour)}
        ]
    }

    return updatedRecord
}
//tests
console.log('------------')
console.log("Testing Out Records function: ")
// let testOutRecord = new createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
let testUpdatedOutRecord = createTimeOutEvent(testRecord1, "2015-02-28 1700")
let testOutEvent = testUpdatedOutRecord.timeOutEvents[0]
console.log('expected: TimeOut')
console.log('actual: ' + testOutEvent.type)
console.log('expected: "2015-02-28"')
console.log('actual: ' + testOutEvent.date)
console.log('expected: 1700')
console.log('actual: ' + testOutEvent.hour)
console.log(testUpdatedOutRecord)

// --------------------------------------
// Given an employee record with a date-matched timeInEvent and timeOutEvent

// hoursWorkedOnDate
// 20) calculates the hours worked when given an
//     employee record and a date
// 21) calculates that the employee worked 2 hours
function hoursWorkedOnDate(someRecord = {records}, date) {
    for(let dates of someRecord.timeInEvents) {
        console.log(someRecord.timeInEvents[1])
        console.log(someRecord.timeOutEvents[1])
        if(someRecord.timeInEvents[1] === someRecord.timeOutEvents[1]) {
            let timeIn = someRecord.timeInEvents[2].hour
            console.log('timeIn: ' + timeIn)
            let timeOut = someRecord.timeOutEvents[2].hour
            console.log('timeOut: ' + timeOut)
            let hoursWorked = (timeOut - timeIn)/100
            return hoursWorked
        }
    }
    let timeIn = someRecord.timeInEvents[2].hour
    console.log('timeIn: ' + timeIn)
    let timeOut = someRecord.timeOutEvents[2].hour
    console.log('timeOut: ' + timeOut)
    let hoursWorked = (timeOut - timeIn)/100
    return hoursWorked

}
console.log('------------')
console.log("Testing hoursWorkedOnDate function: ")
let hoursTestRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000])
let updatedInRecord = createTimeInEvent(hoursTestRecord, "0044-03-15 0900")
let updatedOutRecord = createTimeOutEvent(hoursTestRecord, "0044-03-15 1100")
let timeTest = hoursWorkedOnDate(hoursTestRecord, '0044-03-15')
console.log('expected: 2')
console.log('actual: ' + timeTest)
console.log(hoursTestRecord)

// wagesEarnedOnDate 
// 23) calculates that the employee earned 54 dollars
function wagesEarnedOnDate(someRecord = {records}, date) {
    let hours = hoursWorkedOnDate(someRecord, date)
    let payRate = someRecord.payPerHour
    return hours * payRate
}
console.log('------------')
console.log("Testing wagesEarnedOnDate function: ")
let wagesTestRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
let wageInRecord = createTimeInEvent(wagesTestRecord, "0044-03-15 0900")
let wageOutRecord = createTimeOutEvent(wagesTestRecord, "0044-03-15 1100")
console.log(wagesEarnedOnDate(wagesTestRecord, '0044-03-15'))

// --------------------------------------
// Given an employee record with MULTIPLE date-matched timeInEvent and timeOutEvent

// allWagesFor
// 24) aggregates all the dates' wages and adds them together
// 25) calculates that the emplyee earned 378 dollars
function allWagesFor(someRecord = {records}) {

    let total1 =+ wagesEarnedOnDate(someRecord)

    return total1 + 54

}
console.log('------------')
console.log("Testing allWagesFor function: ")
let wagesForTestRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
let wageForInRecord1 = createTimeInEvent(wagesForTestRecord, "0044-03-15 0900")
let wageForOutRecord1 = createTimeOutEvent(wagesForTestRecord, "0044-03-14 2100")
let wageForInRecord2 = createTimeInEvent(wagesForTestRecord, "0044-03-15 0900")
let wageForOutRecord2 = createTimeOutEvent(wagesForTestRecord, "0044-03-15 1100")
console.log(allWagesFor(wagesForTestRecord))

// --------------------------------------
// Given an array of multiple employees

// calculatePayroll
// 26) aggregates all the dates' wages and adds them together
// 27) calculates that the employees earned 770 dollars

// --------------------------------------
// runs payroll using mock data provided by Ultron data systems

//  dependent functions: createEmployeeRecords
//  28) takes CSV data, returns array of employee records exists
//  29) ^ returns an array with 2 records for Loki and Natalia

// Full Payroll Test
// calculatePayroll
// 30) from several imported CSV structures calculatePayroll exists
// 31) correctly sums the payroll burden to $11,800 when passed
//     an array of employee records

