
function calcDiffDate(dt1, dt2) {
  let date1 = new Date(dt1).getTime()
  let date2 = new Date(dt2).getTime()
  let diff = date1 - date2
  let days = diff/(1000*3600*24)
  return Math.round(days, 1)
}

export default calcDiffDate