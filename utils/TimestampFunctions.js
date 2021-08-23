module.exports = () => {
    const weekDays = new Array(7);

    const getWeekDay = (weekDay) => {
        weekDays[0] = "Sun";
        weekDays[1] = "Mon";
        weekDays[2] = "Tue";
        weekDays[3] = "Wed";
        weekDays[4] = "Thu";
        weekDays[5] = "Fri";
        weekDays[6] = "Sat";
        return weekDays[weekDay];
    }

    const timeInMilliseconds = dateInput => {
        let date = new Date(dateInput);
        return date.getTime();
    }

    const timeInUtc = (milliSecondsInput) => {
        let date = new Date(milliSecondsInput);
        return date.toUTCString();
    }

    return {
        toMilliSeconds: timeInMilliseconds,
        toUct: timeInUtc
    }
}