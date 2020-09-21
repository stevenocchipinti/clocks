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

const setGradient = ({ latitude, longitude }) => {
  const { nadir, ...times } = suncalc.getTimes(new Date(), latitude, longitude)
  setCssVar("--nadir-deg", `${dateToDegrees(nadir)}deg`)
  Object.keys(times).forEach(time =>
    setCssVar(
      `--${time}-deg`,
      `calc(${dateToDegrees(times[time])}deg - ${dateToDegrees(nadir)}deg)`
    )
  )
}

// Move the pin to reflect the current percentage of the day (24 hour cycle)
const movePin = () => setCssVar("--now", `${dateToDegrees(new Date())}deg`)
movePin()
setInterval(movePin, 60000)

// Use the coords from lasttime to prevent a flash of the default gradient
const latitude = localStorage.getItem("latitude")
const longitude = localStorage.getItem("longitude")
if (latitude && longitude) setGradient({ latitude, longitude })

// Request and use the real coords from the user and save them for next time
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords
    setGradient({ latitude, longitude })
    localStorage.setItem("latitude", latitude)
    localStorage.setItem("longitude", longitude)
  })
}
