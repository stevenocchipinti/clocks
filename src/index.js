var suncalc = require("suncalc")

var times = suncalc.getTimes(new Date(), -37.8, 144.9)

window.sunrise = times.sunrise

// sunrise (top edge of the sun appears on the horizon)
console.log("sunrise             " + times.sunrise)

// sunrise ends (bottom edge of the sun touches the horizon)
console.log("sunriseEnd          " + times.sunriseEnd)

// morning golden hour (soft light, best time for photography.ends
console.log("goldenHourEnd       " + times.goldenHourEnd)

// solar noon (sun is in the highest position)
console.log("solarNoon           " + times.solarNoon)

// evening golden hour starts
console.log("goldenHour          " + times.goldenHour)

// sunset starts (bottom edge of the sun touches the horizon)
console.log("sunsetStart         " + times.sunsetStart)

// sunset (sun disappears below the horizon, evening civil twilight starts)
console.log("sunset              " + times.sunset)

// dusk (evening nautical twilight starts)
console.log("dusk                " + times.dusk)

// nautical dusk (evening astronomical twilight starts)
console.log("nauticalDusk        " + times.nauticalDusk)

// night starts (dark enough for astronomical observations)
console.log("night               " + times.night)

// nadir (darkest moment of the night, sun is in the lowest position)
console.log("nadir               " + times.nadir)

// night ends (morning astronomical twilight starts)
console.log("nightEnd            " + times.nightEnd)

// nautical dawn (morning nautical twilight starts)
console.log("nauticalDawn        " + times.nauticalDawn)

// dawn (morning nautical twilight ends, morning civil twilight starts)
console.log("dawn                " + times.dawn)
