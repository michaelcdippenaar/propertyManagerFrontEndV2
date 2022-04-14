export default function arrayFindObjectReturnKey (array, key) {
  let index = 0
  const r = array.forEach(
    e => {
      index = index + 1
      if (e === key) {
        return index
      } else {
        return null
      }
    }
  )
  return r
}
