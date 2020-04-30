// Code your solution in this file!
const returnFirstTwoDrivers = (driver) => {
    let pickUp = driver.slice(0, 2)
    return pickUp
}

const returnLastTwoDrivers = (driver) => {
    let dropOff = driver.slice(2, 4)
    return dropOff
}

const selectingDrivers = [ 
        returnFirstTwoDrivers,
        returnLastTwoDrivers   
]

const createFareMultiplier = (int) => {
    return function(fare) {
        return fare * int
    }
}

const fareDoubler = (createFareMultiplier) => {
 let doubler = createFareMultiplier * 2
 return doubler   
}

const fareTripler = (createFareMultiplier) => {
    let doubler = createFareMultiplier * 3
    return doubler   
}

const selectDifferentDrivers = (returnFirstTwoDrivers, driver) => {
    return driver(returnFirstTwoDrivers)
} 


