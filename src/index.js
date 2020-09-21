import suncalc from "suncalc"

export const dateToDegrees = date => {
  const minutesInOneDay = 24 * 60
  const minutesFromMidday = date.getHours() * 60 + date.getMinutes()
  const percentageOfDay = minutesFromMidday / minutesInOneDay
  const degrees = 360 * percentageOfDay
  return degrees
}

const setCssVar = (name, value) =>
  document.documentElement.style.setProperty(name, value)

const setGradient = ({ nadir, ...times }) => {
  setCssVar("--nadir-deg", `${dateToDegrees(nadir)}deg`)
  Object.keys(times).forEach(time =>
    setCssVar(
      `--${time}-deg`,
      `calc(${dateToDegrees(times[time])}deg - ${dateToDegrees(nadir)}deg)`
    )
  )
}

const movePin = () => setCssVar("--now", `${dateToDegrees(new Date())}deg`)
movePin()
setInterval(movePin, 60000)

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const times = suncalc.getTimes(new Date(), lat, lon)
    setGradient(times)
  })
}
