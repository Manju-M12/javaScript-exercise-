// Callbacks


  
  const callback = (err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  }
  
  doSomething(callback);
  
  const doSomething = callback => {
    setTimeout(() => {
      const success = true  // Change this to false to simulate an error
      const skills = ['HTML', 'CSS', 'JS']
      if (success) {
        callback(null, skills)  // No error, send skills array
      } else {
        callback('It did not go well', null)  // Error scenario
      }
    }, 2000)
  }
  
  
  
  
  doSomething(callback);
  
 
  
 
  



// after 2 seconds it will print
// It did not go well

