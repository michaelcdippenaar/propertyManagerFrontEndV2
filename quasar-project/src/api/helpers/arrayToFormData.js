export default function (object) {
  const formData = new FormData()
  let value = ''
  Object.keys(object).forEach(
    function (key) {
      //   console.log('objectxxx', object[key])
      // if (typeof object[key] === 'number' || typeof object[key] === 'string') {
      //   value = object[key]
      // } else {
      //   value = JSON.stringify(object[key])
      // }
        value = object[key]
      formData.append(key, value)
    }
  )
  return formData
}
