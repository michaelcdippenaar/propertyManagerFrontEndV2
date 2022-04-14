export default function (file, callback) {
  const fileURL = cordova.file.applicationStorageDirectory.concat('Documents/', file)
  return new Promise((resolve, reject) => {
      window.resolveLocalFileSystemURL(fileURL,
        function (entry) {
          resolve (true)
        },
        function (err) {
          reject (false)
        }
      )

    }
  )
}

// function fileExists(fileEntry) {
//   alert("File " + fileEntry.fullPath + " exists!");
//
// }
//
// function fileDoesNotExist() {
//   alert("file does not exist");
//   return false
// }
