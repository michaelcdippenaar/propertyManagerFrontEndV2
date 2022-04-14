export default function (file) {
  const fileURL = cordova.file.applicationStorageDirectory.concat('Documents/',file)
  console.log('reader', fileURL)
  return new Promise((resolve, reject) => {
      window.resolveLocalFileSystemURL(fileURL,
        entry => {
        console.log(entry)
          entry.file(
            function (file) {
              const reader = new FileReader()
              reader.onload = e => {
                resolve(JSON.parse(e.target.result))
                reject (reader.onerror)
              }
              reader.readAsText(file)
            },
            function (error) {
              reject()
              console.log("FileEntry.file error: " + error.code);
            }
          )

        }
      )
    }
  )
}




