// Callbacks

// In this case the err is false and it will return the else block which is the result.


  
  doSomething((err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  })
  const doSomething = (callback) => {
    setTimeout(() => {
      const data = {
        skills: ['HTML', 'CSS', 'JS'],
        level: 'Intermediate',
        year: 2024
      };
      callback(null, data);  // No error
    }, 2000);
  }
  
  doSomething((err, { skills, level, year }) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Skills:', skills);
      console.log('Level:', level);
      console.log('Year:', year);
    }
  });
  

// after 2 seconds it will print the skills
// ["HTML", "CSS", "JS"]