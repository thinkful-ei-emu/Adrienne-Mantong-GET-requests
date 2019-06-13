'use strict';
/* global $ */



function getSingleBreed(dogName) {
  let requestUrl = '';
  if (dogName.includes(' ')) {
    let newName = dogName.split(' ');
    console.log(newName);
    let subBreed = newName[0];
    console.log(subBreed);
    let breedName = newName[1];
    console.log(breedName);
    let newUrl = `https://dog.ceo/api/breed/${breedName}/${subBreed}/images/random/1`;
    console.log(newUrl);
    requestUrl = newUrl;
  } else {
    requestUrl = `https://dog.ceo/api/breed/${dogName}/images/random/1`;
  }

  console.log(requestUrl);
  fetch(requestUrl)
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      displayResults(responseJson);
    })
    .catch(error => alert('breed not in database'));
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
    getSingleBreed(breedName);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});