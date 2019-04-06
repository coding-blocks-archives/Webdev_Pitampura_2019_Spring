

function task (step = 0) {
  switch(step) {
    case 0: {
      setTimeout(() => {
        console.log('step1')
        task(1)
      }, 1000)
    }; break;
    case 1: {
      setTimeout(() => {
        console.log('step2')
        task(2)
      }, 1000)
    }; break;
    case 2: {
      setTimeout(() => {
        console.log('step3')
      }, 1000)
    }; break;
  }
}

task()
