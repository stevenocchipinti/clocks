const dateToDegrees = date => {
  const minutesInOneDay = 24 * 60
  const minutesFromMidday = date.getHours() * 60 + date.getMinutes()
  const percentageOfDay = minutesFromMidday / minutesInOneDay
  const degrees = 360 * percentageOfDay
  return degrees
}

export default dateToDegrees
