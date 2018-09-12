// call 'getJokes' function when click submit button
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  // assign variable 'number' to the value entered in the input field
  const number = document.querySelector('input[type="number"]').value;

  // instantiate new request
  const xhr = new XMLHttpRequest;

  // pass in the variable 'number'
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
  
  // fetch data
  xhr.onload = function() {
    if(this.status === 200) {
      // assign variable 'response' to the data returned from API
      const response = JSON.parse(this.responseText);

      // initialize data by setting variable 'output' to an empty string
      let output = '';

      if(response.type === 'success') {
        // loop though and output each joke ('value' is required by api)
        response.value.forEach(function(joke) {
          output += `<li>${joke.joke}</li>`
        });
      } else {
        output += '<li>something went wrong</li>';
      }
      // add each joke to an unordered list with a class of 'jokes'
      document.querySelector('.jokes').innerHTML = output;
    }
  }
  xhr.send();
  
  // prevent form submission
  e.preventDefault(); 
}