function doAsyncTask1(done) {
  console.log('task 1 running')
  setTimeout(() => {
    //some fake task that takes 3 sec
    console.log('task 1 done')
    done()
  }, 3000)
}


function doAsyncTask2(done) {
  console.log('task 2 running')
  setTimeout(() => {
    //some fake task that takes 2 sec
    console.log('task 2 done')
    done()
  }, 2000)
}

function doAsyncTask3(done) {
  console.log('task 3 running')
  setTimeout(() => {
    //some fake task that takes 1.5 sec
    console.log('task 3 done')
    done()
  }, 1500)
}


doAsyncTask1(() => {
  doAsyncTask2(() => {
    doAsyncTask3(() => {
      console.log('all done')
    })
  })
})
