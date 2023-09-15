const convertNumberToString = (number) => number.toString().padStart(2, '0')

const getTime = () => ({
    date: new Date().toLocaleDateString(),
    hour: convertNumberToString(new Date().getHours()),
    minute: convertNumberToString(new Date().getMinutes()),
    second: convertNumberToString(new Date().getSeconds())
})

const updateTime = (type, value) => {
    document.getElementById(type).textContent = value
}

const getClock = () => {
    const { date, hour, minute, second } = getTime();

    const time = `${hour} : ${minute} : ${second}`

    updateTime('date', date)
    updateTime('time', time)

    setTimeout(() => {
        getClock()
    }, 1000)
}

getClock();
