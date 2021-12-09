const secondHand = document.querySelector('.second-hand')
const hourHand = document.querySelector('.hour-hand')
const minutehand = document.querySelector('.minute-hand')

const setDate = () => {
    const now = new Date()

    const seconds = now.getSeconds()
    const hours = now.getHours()
    const minutes = now.getMinutes()

    // console.log(seconds)
    const secondsDegrees = ((seconds / 60) * 360) + 90
    const hourDegrees = ((hours / 12) * 360) + 90
    const minuteDegrees = ((minutes / 60) * 360) + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
    minutehand.style.transform = `rotate(${minuteDegrees}deg)`
}

setInterval(setDate, 1000)