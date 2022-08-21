
// let movies;
// const API_KEY = "api_key=2b15edc0fe392edfebad6e4a300a6d2a";
// // https://api.themoviedb.org/3/movie/550?api_key=2b15edc0fe392edfebad6e4a300a6d2a
// const BASE_URL = "https://api.themoviedb.org/3";
// const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
// const IMG_URL = "https://image.tmdb.org/t/p/w500";
// const searchUrl = BASE_URL + '/search/movie?' + API_KEY;
// const formEl = document.getElementById('form');
// const search = document.getElementById('search');

// async function getMovies(url) {
//     try {
//         const response = await Fetch(url)
//         const data = await response.json();
//         console.log(data)
//         showMovies(movies)
//     } catch (error) {

//     }
// }

// function getMovies(url) {
//     fetch(url).then(res => res.json()).then(data => {
//         console.log(data);
//         movies = data.results
//         console.log(movies)
//         localStorage.setItem("movies", JSON.stringify(movies))

//     })
// }


// getMovies(API_URL)

// let movie = JSON.parse(localStorage.getItem("movies"));
// console.log(movie);

// document.getElementById("hero").style.backgroundImage = `url(${IMG_URL + movie[0].backdrop_path})`
// document.getElementById("hero-title").innerText = movie[0].title
// document.getElementById("hero-overview").innerText = movie[0].overview




// movie.map((value, index) => {
//     document.querySelector('.videos-cont').innerHTML += `

//     <div class="video">
//         <div class="poster-cont" onclick="activateInfo(${index})">
//             <img src="${IMG_URL + value.poster_path}" alt="${value.title}" srcset="" class="nowp-img">
//         </div>

//     </div>

// `

// })

// function activateInfo(index) {
//     let part = movie[index]
//     document.getElementById("hero").style.backgroundImage = `url(${IMG_URL + part.backdrop_path})`
//     document.getElementById("hero-title").innerText = part.title
//     document.getElementById("hero-overview").innerText = part.overview
//     document.querySelector('.button').innerHTML = `
//     <button class="btn  text-white btnM-bg" data-bs-toggle="modal" data-bs-target="#modelId" onclick="watchTrailer(${index})">Watch
//     Trailer</button>


//   <!-- Modal -->
//   <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
//       <div class="modal-dialog" role="document">
//           <div class="modal-content">
//               <div class="modal-header">
//                   <h5 class="modal-title">Modal title</h5>
//                       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//               </div>
//               <div class="modal-body">
//                   <div id="vid-content " class="text-dark">


//                   </div>
//               </div>
//               <div class="modal-footer">
//                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                   <button type="button" class="btn btn-primary">Save</button>
//               </div>
//           </div>
//       </div>
//   </div>


// <button class="btn  text-white btnM-bg" onclick="getTicket(${index})">Get Ticket</button>
//     `
// }
// const vidContent = document.getElementById("vid-content")

// function watchTrailer(data) {
//     let id = movie[data].id
//     console.log(id);
//     fetch(BASE_URL + `/movie/${id}/videos?` + API_KEY).then(res => res.json()).then(vidData => {
//         console.log(vidData);
//         if (vidData.results > 0) {
//             let embed = [];
//             vidData.results[0].forEach(video => {
//                 let [name, key, site] = video

//                 if (site == "YouTube") {
//                     embed.push(
//                         ` <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" title="${name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
//                     )
//                 }

//             });
//             vidContent.innerHTML = embed.join("");
//         } else {
//             vidContent.innerHTML = `<h1>No result Found</h1>`
//         }

//     })
// }

// function getTicket(data) {
//     localStorage.setItem("videoData2", JSON.stringify(movie[data]))
//     console.log(movie[data]);

// }

function goTo(ev) {
    ev.scrollIntoView({
        top: "20px",
        behaviour: 'smooth'
    })
}
function signPage(event) {
    event.preventDefault();
    location.href = "./sign-up.html"
}

let closeForm = document.getElementById('close-form');
let openForm = document.getElementById('open-form');
let formContent = document.getElementById('form');
openForm.addEventListener('click', () => {
    formContent.hidden = false;
    openForm.hidden = true;
})
closeForm.addEventListener('click', () => {
    formContent.hidden = true;
    openForm.hidden = false;
})