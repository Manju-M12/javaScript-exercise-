// The Ch11_pgm_03 promise has been settled with resolve. Let us another example when the promise is settled with reject.

// Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.includes('Node')) {
        resolve('fullstack developer')
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise
    .then(result => {
      console.log(result)
    })
    .catch(error => console.error(error))
    .then(upperResult => {
      console.log('Uppercase Result:', upperResult);  // This will not execute
    })
    .catch(error => {
      console.error('Error:', error);  // This handles the rejection
    });
    
    

    // Something wrong has happened