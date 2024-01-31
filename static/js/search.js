window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("solid");
  } else {
    header.classList.remove("solid");
  }
}

var search =document.getElementById("search1")

function searchFun() {
  if (search.style.display === "block") {
    search.style.display = "none";
} else {
  search.style.display = "block";
};
};

let i=0;
let url ='/animes.json';

fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
    

    fetchData();
    let more = document.querySelector("#showMore");
    more.addEventListener("click", showMore);
    function showMore() {
      url[i];
      i++;
      fetchData();
      console.log(i)
    }


    let numbers = Array.from({ length: 1000 }, (_, i) => i + 1);
    let currentIndex = 0;

    function displayNextNumbers() {
        if (currentIndex < numbers.length) {
            currentIndex += 20;
            return  currentIndex;
    }
    }









  function fetchData() {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          i++;
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
          console.log(Error(message));
        }
        return response.json();
      })
      .then((movies) => {
        let container = document.querySelector(".container");
        // console.log(movies.results[i].postser_path)
        console.log(movies);
        let myLen = movies.length;
        var num = displayNextNumbers();
        showMovies(num);
        
        function showMovies(num) {
          for (var j = 0; j < 20; j++) { 
              
            let movie = movies[j+num];
            container.innerHTML += `<div class="box">
        <img src="${movie.img_url}" alt="img" />
    <div class="moviesDetails">
      <div class="leftDetails">
        <h5>${movie.title}</h5>
        <p>${movie.aired}</p>
      </div>
      <div class="rightDetails rating">${movie.score}</div>
    </div>
  </div>`;  
          }
        }
      })
      .catch((error) => {
        error.message; // 'An error has occurred: 404'
        console.log(error);
      });
  }



