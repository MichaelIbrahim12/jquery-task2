// apiKey = 9813ce01a72ca1bd2ae25f091898b1c7
// url = https://api.themoviedb.org/3
// path = /discover/movie?sort_by=popularity.desc

//https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7
//https://image.tmdb.org/t/p/w500/

import { apiUrl, imgPath, main } from "./Vars.js";

// function getMovies(url) {
//   fetch(url)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       // console.log(data.results);
//       showMovie(data.results);
//     });
// }
// getMovies(apiUrl);

// function showMovie(data) {
//   // main.innerHTML = "";
//   data.forEach((movie) => {
//     const { title, poster_path, id } = movie;
//     const movieElement = document.createElement("div");
//     movieElement.classList.add("movie");
//     movieElement.innerHTML = `
//     <a href="./DetailsPage.html?id=${id}">
//     <img src="${imgPath + poster_path}" alt="Move" />
//         <h4 id="moveName">${title}</h4>
//     </a>

//     `;
//     // console.log(title);
//     main.appendChild(movieElement);
//   });
// }

function getMovies(url) {
  $.get(url).done(function (dataa) {
    showMovie(dataa.results);
  });
}

getMovies(apiUrl);

function showMovie(data) {
  data.forEach((movie) => {
    const { title, poster_path, id } = movie;
    const movieElement = $("<div></div>");
    movieElement.addClass("movie");
    movieElement.html(`<a href="./DetailsPage.html?id=${id}">
  <img src="${imgPath + poster_path}" alt="Move" />
      <h4 id="moveName">${title}</h4>
  </a>`);
    $(main).append(movieElement);
  });
}
