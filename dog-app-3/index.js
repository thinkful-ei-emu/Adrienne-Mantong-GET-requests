'use strict';
/* global $ */

function getDogImage(breed) {
  let requestUrl = 'https://dog.ceo/api/breed/hound/images';
  fetch(requestUrl)
    .then(response => {
      // console.log(response)
      return response.json();
    })
    .then(responseJson => {
      displayResults(responseJson);
      // console.log(responseJson);
    })
    .catch(error => alert(`Something went wrong. Try again later. ${error.message}`));
}



function displayResults(responseJson) {
  // console.log(responseJson);
  //replace the existing image with the new ones
  let images = '';
  $('.results-img').replaceWith( `<img src="${responseJson.message}" class="results-img">` );
  
  $('.results-img').html(
    images
  );
  //display the results section
  $('.results').removeClass('hidden');
}


function watchForm() {
  $('#many-dogs').submit(event => {
    event.preventDefault();
    
   
    getDogImage();
  });

}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});