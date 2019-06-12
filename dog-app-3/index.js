'use strict';

function getDogImage(breed, responseJson) {
  let requestUrl = 
  'https://dog.ceo/api/breed/hound-' + breed + '/images/random'
  fetch(requestUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(error => {
      alert(`Something went wrong. Breed cannot be found.`);
    });
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let dogBreed = ($('#breed').val());
    $('#breed').val('');
    getDogImage(dogBreed);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});