// Code your solution in this file! 

const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1]];
  };

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  }; 
  
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x) {
    return function(fare) { return fare * x}
};

function fareDoubler(num) {
    return num * 2;
  }
  
  function fareTripler(num) {
    return num * 3;
  }
  
  function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
  }