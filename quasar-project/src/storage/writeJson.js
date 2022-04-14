import { Storage } from '@capacitor/storage'

export default function (jsonObj, name) {
  return new Promise((resolve, reject) => {

      const obj = JSON.stringify(jsonObj)
      const blob = new Blob([obj], {type: "application/json"});

      window.requestFileSystem(localFileSystem.PERSISTENT, 0, function (fs) {

        fs.root.getFile(name, {create: true, exclusive: false}, function (fileEntry) {
          fileEntry.createWriter(function (fileWriter) {

            console.log(fileEntry)

            fileWriter.onwriteend = function () {
              console.log("Successful file write...");
            };

            fileWriter.onerror = function (e) {
              console.log("Failed file write: " + e.toString());
            };


            resolve(fileWriter.write(blob))
          })
        },)

      },)
    }
  )
}
