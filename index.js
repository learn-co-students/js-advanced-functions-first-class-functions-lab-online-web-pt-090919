// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    let drives = [];
    drives.push(drivers[0]);
    drives.push(drivers[1]);
    return drives;
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(drivers.length-2, drivers.length);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(scale) {
    return function(fare) {
        return fare*scale;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selection) {
    return selection(drivers);
};