var suncalc = require("suncalc")

var times = suncalc.getTimes(new Date(), -37.8, 144.9)

// sunrise (top edge of the sun appears on the horizon)
console.log("sunrise             " + times.sunrise.toLocaleTimeString())

// sunrise ends (bottom edge of the sun touches the horizon)
console.log("sunriseEnd          " + times.sunriseEnd.toLocaleTimeString())

// morning golden hour (soft light, best time for photography.ends
console.log("goldenHourEnd       " + times.goldenHourEnd.toLocaleTimeString())

// solar noon (sun is in the highest position)
console.log("solarNoon           " + times.solarNoon.toLocaleTimeString())

// evening golden hour starts
console.log("goldenHour          " + times.goldenHour.toLocaleTimeString())

// sunset starts (bottom edge of the sun touches the horizon)
console.log("sunsetStart         " + times.sunsetStart.toLocaleTimeString())

// sunset (sun disappears below the horizon, evening civil twilight starts)
console.log("sunset              " + times.sunset.toLocaleTimeString())

// dusk (evening nautical twilight starts)
console.log("dusk                " + times.dusk.toLocaleTimeString())

// nautical dusk (evening astronomical twilight starts)
console.log("nauticalDusk        " + times.nauticalDusk.toLocaleTimeString())

// night starts (dark enough for astronomical observations)
console.log("night               " + times.night.toLocaleTimeString())

// nadir (darkest moment of the night, sun is in the lowest position)
console.log("nadir               " + times.nadir.toLocaleTimeString())

// night ends (morning astronomical twilight starts)
console.log("nightEnd            " + times.nightEnd.toLocaleTimeString())

// nautical dawn (morning nautical twilight starts)
console.log("nauticalDawn        " + times.nauticalDawn.toLocaleTimeString())

// dawn (morning nautical twilight ends, morning civil twilight starts)
console.log("dawn                " + times.dawn.toLocaleTimeString())
