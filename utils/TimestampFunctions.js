module.exports = () => {

    const timeInMilliseconds = dateInput => {
        let date = new Date(dateInput);
        return date.getTime();
    }

    const timeInUtc = (milliSecondsInput) => {
        let date = new Date(milliSecondsInput);
        return date.toUTCString();
    }

    const timeStamp = (dateInput) => {
        const date = new Date(dateInput);
        let time = { unix: "", utc: "" };
        if (dateInput) {
            if (date.toString() === "Invalid Date") {
                const strToNumber = Number(dateInput);
                time = {
                    unix: new Date(strToNumber).getTime().toString(),
                    utc: new Date(strToNumber).toUTCString()
                };
            } else {
                time = {
                    unix: new Date(dateInput).getTime().toString(),
                    utc: new Date(dateInput).toUTCString()
                };
            }
        }
        return time;
    }

    return {
        toMilliSeconds: timeInMilliseconds,
        toUct: timeInUtc,
        timeStamp
    }
}