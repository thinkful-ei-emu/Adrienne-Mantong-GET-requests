'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random/50')
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);

  //replace the existing image with the new one
  responseJson.message.forEach(img => {
    $('.results-img').replaceWith(
      ('.results').append(
        `<img src="${img}" class="results-img">`
      ));
    //display the results section
    $('.results').removeClass('hidden');
  });
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

// function randomForm() {
//   $('.numOfDogs').submit(event => {
//     event.preventDefault();
//     displayResults(responseJson);
//   }
//     )
// }

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});