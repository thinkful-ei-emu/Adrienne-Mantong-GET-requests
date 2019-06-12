'use strict';
/* global $ */



function getSingleBreed(breedName) {
  let requestUrl = `https://dog.ceo/api/breed/${breedName}/images/random/1`;
  fetch(requestUrl)
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      displayResults(responseJson);
    })
    .catch(error => alert('breed not on database'));
}


function displayResults(responseJson) {
  // console.log(responseJson);
  //replace the existing image with the new ones
  let images = '';
  responseJson.message.forEach((image) => {
    images += `<img src="${image}" class="results-img">`;
  }); 

  $('.results-img').html(
    images
  );
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
 
  $('#single-breed').submit(event => {
    event.preventDefault();
    let breedName = $('#breed-name').val();
    $('#breed-name').val('');
    // console.log(dogNum, typeof dogNum);
    getSingleBreed(breedName);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});