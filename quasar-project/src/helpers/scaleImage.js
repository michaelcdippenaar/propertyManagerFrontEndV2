export default function (dataUri, newWidth) {

  return new Promise((resolve, reject) => {
      let oldWidth, oldHeight, newHeight, canvas, ctx, newDataUrl

      // base64 encoded data doesn't contain commas
      let base64ContentArray = dataUri.split(",")
      let mimeType = base64ContentArray[0].match(/[^:\s*]\w+\/[\w-+\d.]+(?=[;| ])/)[0]
      console.log(mimeType)

      const imageType = "image/jpeg";
      let image = new Image();
      image.src = dataUri;
      image.onload = e => {
        oldWidth = image.width;
        oldHeight = image.height;
        newHeight = Math.floor(oldHeight / oldWidth * newWidth)
        console.log('wh', oldWidth, oldHeight)
        canvas = document.createElement("canvas");
        canvas.width = newWidth;
        canvas.height = newHeight;

        ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, newWidth, newHeight);
        newDataUrl = canvas.toDataURL(imageType);
        resolve(newDataUrl)
      }
    }
  )


}
