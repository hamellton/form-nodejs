let currentDate = new Date()

let getMessage = (name) => {
    let hour = currentDate.getHours()
    if (hour > 16) {
        return 'Good evening ' + name
    } else if (hour > 10) {
        return 'Good day ' + name
    } else {
        return 'Good morning ' + name
    }
}

module.exports = {
    currentDate,
    getMessage,
}