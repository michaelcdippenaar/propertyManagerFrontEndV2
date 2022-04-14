export default function (file) {
  const fileURL = cordova.file.applicationStorageDirectory.concat('Documents/',file)
  return new Promise((resolve, reject) => {
      window.resolveLocalFileSystemURL(fileURL, function (entry) {
        resolve(entry.remove(success, error))
      })
    }
  )
}

function success () {
  return true
}

function error () {
  return false
}
