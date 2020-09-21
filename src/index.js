import suncalc from "suncalc"
import dateToDegrees from "./dateToDegrees"

const setProp = (name, value) => {
  document.documentElement.style.setProperty(name, value)
}

const setGradient = ({ nadir, ...times }) => {
  setProp("--nadir-deg", `${dateToDegrees(nadir)}deg`)
  Object.keys(times).forEach(time =>
    setProp(
      `--${time}-deg`,
      `calc(${dateToDegrees(times[time])}deg - ${dateToDegrees(nadir)}deg)`
    )
  )
}

const movePin = () => {
  setProp("--degrees", `${dateToDegrees(new Date())}deg`)
}

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
