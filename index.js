// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2)
}

let drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
returnFirstTwoDrivers(drivers)

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2)
}
returnLastTwoDrivers(drivers)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (a){
  return function(b) {
    return a * b; 
  }
}
createFareMultiplier(2)(3)
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, whichDrivers){
  return whichDrivers(drivers);
}


