const util = require('util')

function download(url, downloaded) {

  if (!url.startsWith('http')) {
    return downloaded(new Error('Wrong URL format'))
  }
  //fake download
  setTimeout(() => {
    let fileName = url.split('/').pop()
    downloaded(null, fileName)
  }, 2000)
}


function compress(fileName, compressed) {
  let extension = fileName.split('.').pop()
  if (['png', 'jpg'].indexOf(extension) === -1) {
    return compressed(new Error('Invalid file format'))
  }

  setTimeout(() => {
    let fileNameArr = fileName.split('.')
    fileNameArr.pop()
    fileNameArr.push('zip')
    let zipName = fileNameArr.join('.')

    compressed(null, zipName)

  }, 2000)
}

function upload(zipName, siteName, uploaded) {

  if (siteName.indexOf('drive') == -1) {
    return uploaded(new Error('Unsupported site'))
  }

  setTimeout(() => {

    let url = `http://${siteName}/images/${zipName}`
    uploaded(null, url)

  }, 2000)
}

let downloadPr = util.promisify(download)
let compressPr = util.promisify(compress)
let uploadPr = util.promisify(upload)



downloadPr('http://website.com/path/image.jpg')
  .then((fileName) => compressPr(fileName))
  .then((zipName) => uploadPr(zipName, 'onedrive.com'))
  .then((url) => console.log('All Done'))
  .catch(console.error)







// download(
//   'http://website.com/path/image.jpg',
//   (err, fileName) => {
//     if (err) {
//       console.error(err)
//     } else {
//       console.log('File downloaded ' + fileName)

//       compress(fileName, (err, zipName) => {

//         if (err) {
//           console.error(err)
//         } else {
//           console.log('File zipped ' + zipName)

//           upload(zipName, 'files.com', (err, url) => {

//             if (err) {
//               console.error(err)
//             } else {

//               console.log('File uploaded ' + url)
//             }
//           })

//         }
//       })

//     }
//   }
// )
