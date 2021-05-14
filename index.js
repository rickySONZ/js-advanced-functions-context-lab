/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 // Creating employee record

 const createEmployeeRecord = (array) => {
    let r;
    return r = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [], 
    timeOutEvents: []
    }
}

function createEmployeeRecords(employeeRecords){
    return employeeRecords.map(createEmployeeRecord)
}

function createTimeInEvent(time){
    let date = time.split(" ")[0]
    let hour = time.split(" ")[1]

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    })
    return this
}

function createTimeOutEvent(time){
    let date = time.split(" ")[0]
    let hour = time.split(" ")[1]

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    })
    return this
}

function hoursWorkedOnDate(date){
    let x = this.timeInEvents.find(function(e){ 
        return e.date === date
    })
    let y = this.timeOutEvents.find(function(e){ 
        return e.date === date
    })
    return (y.hour - x.hour)/100
}

function wagesEarnedOnDate(date){
    let earnedWage = hoursWorkedOnDate.call(this, date)
    let pay = this.payPerHour
    return parseInt(earnedWage * pay)
 }

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(array, name){
    return array.find(e => e.firstName == name)
}

function calculatePayroll(array){
    return array.reduce(function(total, e){
        return total + allWagesFor.call(e)
    }, 0)
}