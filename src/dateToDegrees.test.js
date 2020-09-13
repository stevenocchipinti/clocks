import dateToDegrees from "./dateToDegrees"

const dateFromTime = str => new Date(Date.parse(`01-01-2020 ${str}`))

describe("dateToDegrees", () => {
  it("returns 0 for midnight", () => {
    const date = dateFromTime("00:00:00")
    expect(dateToDegrees(date)).toBe(0)
  })

  it("returns 180 for midday", () => {
    const date = dateFromTime("12:00:00")
    expect(dateToDegrees(date)).toBe(180)
  })

  it("returns 359.75 for 23:59:59", () => {
    const date = dateFromTime("23:59:59")
    expect(dateToDegrees(date)).toBe(359.75)
  })
})
