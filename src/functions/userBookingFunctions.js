const { Accommodation } = require("../models/AccommodationModel");


async function totalCost(locationId, startDate, endDate){
    const location = await Accommodation.findById(locationId);
    const days = (endDate - startDate);
    const totalAmount = location.costPerNight * days;
    return totalAmount;
}

module.exports = {
    totalCost
}