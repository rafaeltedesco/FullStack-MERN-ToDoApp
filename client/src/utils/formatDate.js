function addZeros(n) {
  if (n <= 9) {
    return '0' + n
  }
  return n
}


function getDate() {
  let date = new Date(Date.now())
  let dateObj = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  }

  let formatedDate = Object.keys(dateObj).map(field=> {
    return addZeros(dateObj[field])
  }).join('-')

  return formatedDate

}


export default getDate