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
    }

    // initialize data by setting variable 'output' to an empty string
    let output = '';

    preventDefault(); // prevent form submission
  }
}