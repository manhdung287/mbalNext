export const Convertbase64 = (file: any) => {
    return new Promise((resolve) => {
      let fileInfo
      let baseURL
      // Make new FileReader
      const reader = new FileReader()
  
      // Convert the file to base64 text
      reader.readAsDataURL(file)
  
      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log('Called', reader)
        baseURL = reader.result
        console.log(baseURL)
        resolve(baseURL)
      }
      console.log(fileInfo)
    })
  }
  
  export const fileToBase64 = (file: any, cb: any) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      cb(null, reader.result)
    }
    reader.onerror = function (error) {
      cb(error, null)
    }
  }