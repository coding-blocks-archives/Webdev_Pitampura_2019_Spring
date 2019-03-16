function download(url) {
  console.log('download started')
  return new Promise((resolve, reject) => {
    if (!url.startsWith('http')) {
      return reject(new Error('Wrong URL format'))
    }
    //fake download
    setTimeout(() => {
      let fileName = url.split('/').pop()
      console.log('download ended')
      resolve(fileName)
    }, 2000)
  })


}


function compress(fileName) {
  console.log('compress started')

  return new Promise((resolve, reject) => {
    let extension = fileName.split('.').pop()
    if (['png', 'jpg'].indexOf(extension) === -1) {
      return reject(new Error('Invalid file format'))
    }

    setTimeout(() => {
      let fileNameArr = fileName.split('.')
      fileNameArr.pop()
      fileNameArr.push('zip')
      let zipName = fileNameArr.join('.')
      console.log('compress ended')

      resolve(zipName)

    }, 2000)
  })

}

function upload(zipName, siteName) {
  console.log('upload started')

  return new Promise((resolve, reject) => {
    if (siteName.indexOf('drive') == -1) {
      return reject(new Error('Unsupported site'))
    }

    setTimeout(() => {

      let url = `http://${siteName}/images/${zipName}`
      console.log('upload ended')

      resolve(url)

    }, 2000)
  })

  i
}


// download('http://website.com/path/image.jpg')
//   .then((fileName) => {
//     return compress(fileName)
//       .then((zipName) => {
//         return upload(zipName, 'files.com')
//           .then((url) => {
//           })
//       })
//   })
//   .catch(console.error)

download('http://website.com/path/image.bmp')
  .then((fileName) => compress(fileName))
  .then((zipName) => upload(zipName, 'onedrive.com'))
  .then((url) => console.log('All Done'))
  .catch(console.error)
