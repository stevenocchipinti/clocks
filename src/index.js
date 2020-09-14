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

const times = suncalc.getTimes(new Date(), -37.8, 144.9)
setGradient(times)

// Debugging

const descriptions = {
  nightEnd: "night ends (morning astronomical twilight starts)",
  nauticalDawn: "nautical dawn (morning nautical twilight starts)",
  dawn: "dawn (morning nautical twilight ends, morning civil twilight starts)",
  sunrise: "sunrise (top edge of the sun appears on the horizon)",
  sunriseEnd: "sunrise ends (bottom edge of the sun touches the horizon)",
  goldenHourEnd:
    "morning golden hour (soft light, best time for photography.ends",
  solarNoon: "solar noon (sun is in the highest position)",
  goldenHour: "evening golden hour starts",
  sunsetStart: "sunset starts (bottom edge of the sun touches the horizon)",
  sunset:
    "sunset (sun disappears below the horizon, evening civil twilight starts)",
  dusk: "dusk (evening nautical twilight starts)",
  nauticalDusk: "nautical dusk (evening astronomical twilight starts)",
  night: "night starts (dark enough for astronomical observations)",
  nadir: "nadir (darkest moment of the night, sun is in the lowest position)",
}

const dateToTime = date => `${date.getHours()}:${date.getMinutes()}`

console.table(
  Object.keys(times)
    .sort((a, b) => (times[a] > times[b] ? 1 : -1))
    .reduce(
      (a, i) => ({
        ...a,
        [i]: {
          time: dateToTime(times[i]),
          degrees: dateToDegrees(times[i]).toFixed(2),
          description: descriptions[i],
        },
      }),
      {}
    )
)
