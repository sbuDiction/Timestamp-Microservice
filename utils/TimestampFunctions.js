module.exports = () => {

    const timeInMilliseconds = dateInput => {
        let date = new Date(dateInput);
        return date.getTime();
    }

    const timeInUtc = (milliSecondsInput) => {
        let date = new Date(milliSecondsInput);
        return date
    }

    return {
        toMilliSeconds: timeInMilliseconds,
        toUct: timeInUtc
    }
}