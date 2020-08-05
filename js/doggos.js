// const DOG_URL = 'https://dog.ceo/api/breeds/list/all';
// const doggos = document.querySelector(".doggos");
//
// function addNewDoggo() {
//   // Show spinner
//   const promise = fetch(DOG_URL);
//   promise
//     .then(function(response) {
//       const processingPromise = response.json();
//       return processingPromise;
//     })
//     .then(function(processedResponse) {
//       const img = document.createElement("img");
//       img.src = processedResponse.message;
//       img.alt = "Cute doggo";
//       doggos.appendChild(img);
//
//       // Stop loading spinner
//     });
// }

// document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);

const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
const select = document.querySelector('.breeds');
const spinner = document.querySelector('.spin');
const heading = document.querySelector('.prompt');
const img = document.querySelector('.doggo-img');

fetch(BREEDS_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);
    console.log(breedsArray);

    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement('option');
      option.value = breedsArray[i];
      option.innerText = breedsArray[i];
      select.appendChild(option);
  }
});

select.addEventListener("change", function(event) {
  //make url
  let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;

  getDoggo(url);
  //show loading spinner

  //fetch from the api
  fetch(url)
    .then(function (response) {
      return response.message;
      console.console.log(response.message);
    })
    .then(function (data) {
      const breedsObject = data.message;
      const breedsArray = Object.keys(breedsObject);
  });

  //use url to change current image


  //stop showing loading spinner
});

function getDoggo (url) {
  spinner.classList.add("show")
  heading.classList.add("hide")
  img.classList.remove("show")
  fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function(data) {
    img.src = data.message;
    // spinner.classList.remove("show")
    // img.classList.add("show")
  })
};

img.addEventListener("load", function () {
  spinner.classList.remove("show")
  img.classList.add("show")
})
