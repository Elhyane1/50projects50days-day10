let card = document.querySelector('.card')
let joke = document.querySelector('.joke')
let btn = document.querySelector('button')

//code to fetch data from the API
async function getJoke() {
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {headers : {accept: 'application/json'}}); // Replace with your API URL
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json(); // Parse the response body as JSON
      console.log(data.joke); // Process the data here
      joke.innerText = data.joke
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }
  
btn.addEventListener('click', getJoke)
getJoke();