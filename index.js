'use strict';

// const imgUrl = 'https://dog.ceo/api/breeds/image/random';

// function formatSearch(params) {
//   const searchItems = Object.keys(params)
//     .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
//   console.log(searchItems);
//   return searchItems.join('');
// }

function getDogImage(num) {
  let url = 'https://dog.ceo/api/breeds/image/random/' + num; 
  console.log(url);
  // const params = {
  //   num, 
  // };
  // const searchString = formatSearch(params);
  // const url = imgUrl + '/' + searchString;
  fetch(url)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);

  //replace the existing image with the new one
  responseJson.message.forEach(img => {
    $('.results').append(
      `<img src="${img}" class="results-img">`
    );
    //display the results section
    $('.results').removeClass('hidden');
  });
}

function watchForm() { 
  $('#many-dogs').submit(event => { event.preventDefault(); 
    let num = ($('#num').val() > 0 && $('#num').val() < 51) ? $('#num').val() : '3'; $('#num').val('');

    getDogImage(num);
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