module.exports.getDay = getDay;
module.exports.getDateFormatted = getDateFormatted;


function getDateFormatted() {
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    const day = today.toLocaleDateString("en-US", options);

    return day;
}

function getDay() {
    const today = new Date();

    const options = {
        weekday: "long",
    };

    const day = today.toLocaleDateString("en-US", options);

    return day;
}