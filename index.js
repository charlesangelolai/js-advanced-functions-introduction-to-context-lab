// Your code here
function createEmployeeRecord(record) {
  return {
    firstName: record[0],
    familyName: record[1],
    title: record[2],
    payPerHour: record[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

function creatEmployeeRecords(records) {
  return records.map(function (record) {
    return createEmployeeRecord(record);
  });
}

function createeTimeInEvent(timeStamp) {
  let [date, hour] = timeStamp.split(" ");

  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date,
  });

  return this;
}

function createTimeOutEvent(timeStamp) {
  let [date, hour] = timeStamp.split(" ");

  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date,
  });

  return this;
}

function hoursWorkedOnDate(date) {
  let inEvent = this.timeInEvents.find(function (e) {
    return e.date === date;
  });

  let outEvent = this.timeOutEvents.find(function (e) {
    return e.date === date;
  });

  return outEvent.hour - inEvent.hour / 100;
}
