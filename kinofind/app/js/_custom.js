  let searchFormSidebar = document.querySelector("#search-form");
  let searchFormHeader = document.querySelector('.search__form');
  let searchFormHamburger = document.querySelector('.aside-search__form');
  let movies;
  let genres = document.querySelectorAll('.sidebar__genres');

  let nav = document.querySelectorAll('.nav');

  let movie = document.querySelector("#movies");
  let urlPoster = "https://image.tmdb.org/t/p/w500";
  let explorer = document.querySelector(".explorer");

  let hamburger = document.querySelector(".button");
  let aside = document.querySelector('.aside');
  let hamburgerClose = document.querySelector('.aside-header__button');

  hamburger.addEventListener('click', ()=> {
    aside.classList.add('aside_active');
  })

  hamburgerClose.addEventListener('click', closeAside);

  function closeAside() {
    aside.classList.remove('aside_active');
  } 
  

  let searchSidebar = document.querySelector("#searchText");
  let searchHeader = document.querySelector(".search__input")
  let searchHamburger = document.querySelector(".aside-search__input")

  searchFormSidebar.addEventListener("submit", ()=> {
    apiSearch(event, searchSidebar);
  });

  searchFormHeader.addEventListener("submit", ()=> {
    apiSearch(event, searchHeader);
  });

  searchFormHamburger.addEventListener("submit", ()=> {
    apiSearch(event, searchHamburger);
  });


  let icon = document.querySelector(".search__icon");
  let search = document.querySelector(".search__input");

  icon.addEventListener('click', () => {
    icon.classList.add("search__icon_active");
    search.classList.add("search__input_active");
  });

  search.addEventListener('blur', ()=> {
    icon.classList.remove("search__icon_active");
    search.classList.remove("search__input_active");
  })

  let popular = document.querySelectorAll(".nav__item_popular");
  let upcoming = document.querySelectorAll(".nav__item_upcoming");
  let topMovies = document.querySelectorAll(".nav__item_movie-top");
  let topTv = document.querySelectorAll(".nav__item_tv-top");

  let trendingKey = "https://api.themoviedb.org/3/trending/all/week?api_key=d1777f7d2dcd8568a3d1a207d0b05303&language=ru";
  let upcomingKey = "https://api.themoviedb.org/3/movie/upcoming?api_key=d1777f7d2dcd8568a3d1a207d0b05303&language=ru&page=1";
  let topMoviesKey = "https://api.themoviedb.org/3/movie/top_rated?api_key=d1777f7d2dcd8568a3d1a207d0b05303&language=ru&page=1";
  let topTvKey = "https://api.themoviedb.org/3/tv/top_rated?api_key=d1777f7d2dcd8568a3d1a207d0b05303&language=ru&page=1";

  document.addEventListener("DOMContentLoaded", ()=> {
    getGenres();
    getContent(trendingKey, "Популярное за неделю");
  });

  popular.forEach((item)=>{
    item.addEventListener('click', ()=>{
      getContent(trendingKey, "Популярное за неделю");
    });
  })

  upcoming.forEach((item)=>{
    item.addEventListener('click', ()=>{
      getContent(upcomingKey, "Новинки");
    });
  })

  topMovies.forEach((item)=>{
    item.addEventListener('click', ()=>{
      getContent(topMoviesKey, "Лучшие фильмы");
    });
  });

  topTv.forEach((item)=>{
    item.addEventListener('click', ()=>{
      getContent(topTvKey, "Лучшие сериалы")
    });
  });

  function getContent(typeKey, title) {
      fetch(
        typeKey
      )
        .then(function(value) {
          if (value.status !== 200) {
            return Promise.reject();
          }
          return value.json();
        })
        .then(function(output) {
          let inner = `<h4 class="col-12 grid-title">${title}</h4>`;
          if (output.results.length === 0) {
            inner =
              '<h2 class="col-12 text-center text-info">По вашему запросу ничего не найдено</h2>';
          }
          output.results.forEach(function(item) {
            let nameItem = item.name || item.title;
            let mediaType = item.title ? "movie" : "tv";
            let poster = item.poster_path
              ? urlPoster + item.poster_path
              : "./img/noposter.png";
            let date = item.first_air_date || item.release_date; 
            newDate = date.split('-').join(' | ');
            let dataInfo = `data-id="${item.id}" data-type="${mediaType}"`;
            inner += `<div class="col-12 col-md-4 col-xl-3 item"  data-genre="${item.genre_ids}">
          <img src="${poster}" class="item__poster img-responsive" alt="${nameItem}" ${dataInfo}>
          <h5 class="item__title">${nameItem}</h5>
          <h5 class="item__date">${newDate}</h5>
          </div>`;
          });
  
          movie.innerHTML = inner;
  
          addEventMedia();
  
          
        })
        .then(()=> {
          movies = document.querySelectorAll('.item');
        })
        .catch(function(err) {
          movie.innerHTML = "Упс, что-то пошло не так!";
          console.log("error:" + err);
        });

        closeAside();
  }

  function apiSearch(e, search) {
    e.preventDefault();
    let searchText = search.value.trim();
    if (searchText.length === 0) {
      movie.innerHTML =
        '<h2 class="col-12 text-center text-danger">Поле поиска не должно быть пустым</h2>';
    }
    movie.innerHTML = '<div class="spinner"></div>';

    fetch(
      "https://api.themoviedb.org/3/search/multi?api_key=d1777f7d2dcd8568a3d1a207d0b05303&language=ru&query=%27" +
        searchText
    )
      .then(function(value) {
        if (value.status !== 200) {
          return Promise.reject();
        }
        return value.json();
      })
      .then(function(output) {
        let inner = `<h4 class="col-12 grid-title">Результаты по запросу "${searchText}"</h4>`;
        if (output.results.length === 0) {
          inner =
            '<h2 class="col-12 text-center grid-title">По вашему запросу ничего не найдено</h2>';
        }
        output.results.forEach(function(item) {
          let nameItem = item.name || item.title;
          let poster = item.poster_path
            ? urlPoster + item.poster_path
            : "./img/noposter.png";
          let date = item.first_air_date || item.release_date;
          let newDate = date.split('-').join(' | ');
          let dataInfo = "";
          if (item.media_type !== "person")
            dataInfo = `data-id="${item.id}" data-type="${item.media_type}"`;
          inner += `<div class="col-12 col-md-4 col-xl-3 item"  data-genre="${item.genre_ids}">
				<img src="${poster}" class="item__poster img-responsive" alt="${nameItem}" ${dataInfo}>
        <h5 class="item__title">${nameItem}</h5>
        <h4 class="item__date">${newDate}</h4>
        </div>`;

        });

        movie.innerHTML = inner;

        addEventMedia();

      icon.classList.remove("search__icon_active");
      search.classList.remove("search__input_active")

      })
      .then(()=> {
        movies = document.querySelectorAll('.item');
      })
      .then(()=> {
        render();
      })
      .catch(function(err) {
        movie.innerHTML = "Упс, что-то пошло не так!";
        console.log("error:" + err);
      });

      closeAside();
  }

  function addEventMedia() {
    let media = movie.querySelectorAll("img[data-id]");
    media.forEach(function(elem) {
      elem.style.cursor = "pointer";
      elem.addEventListener("click", showFullInfo);
    });
  }

  function showFullInfo() {
    let url = "";
    if (this.dataset.type === "movie") {
      url = `https://api.themoviedb.org/3/movie/${this.dataset.id}?api_key=d1777f7d2dcd8568a3d1a207d0b05303&language=ru`
    } else if (this.dataset.type === "tv" ) {
      url = `https://api.themoviedb.org/3/tv/${this.dataset.id}?api_key=d1777f7d2dcd8568a3d1a207d0b05303&language=ru`
    } else {
      movie.innerHTML = "Упс, что-то пошло не так!";
    }

  typeMedia = this.dataset.type;
  idMedia = this.dataset.id;    

    fetch(url)
      .then(function(value) {
        if (value.status !== 200) {
          return Promise.reject();
        }
        return value.json();
      })
      .then(function(output) {
        explorer.classList.add("container");
        explorer.innerHTML = `<h4 class="col-12 text-center text-info head-title head-title_accent ">${output.name ||
          output.title}</h4>
      <div class="row about">
          <div class="col-md-6 col-sm-12 about__keyart">
          <img class="img-responsive about__poster" src='${urlPoster + output.poster_path}' alt="${output.name ||
              output.title}">
          </div>
          <div class="col-md-6 col-sm-12 about__info">
          <h3 class="about__title">${output.name || output.title}</h3>
          <p class="about__date">${output.first_air_date || output.release_date} ${'| ' + output.genres[0].name || ''}</p>
          <p class="about__rate">Рейтинг: ${output.vote_average}</p>
          ${
            output.last_episode_to_air
              ? `<p>Сезонов: ${output.number_of_seasons}<br>Ceрий: ${output.last_episode_to_air.episode_number}</p>`
              : ""
          }
          <p>${output.overview}</p>
          <div class="youtube"></div>
          <div class="about__links">
          ${
            output.homepage
              ? `<a class="about__link" href="${output.homepage}" target="_blank">Официальная страница</a>`
              : ""
          } 
          ${
            output.imdb_id
              ? `<a class="about__link" href="https://imdb.com/title/${output.imdb_id}" target="_blank">Страница на IMDB.com</a>`
              : ""
          }
          </div>
          </div>
        </div>`;
      
        getVideo(typeMedia, idMedia);


      })
      .catch(function() {
        movie.innerHTML = "Упс, что-то пошло не так!";
        console.log("error");
      });

      icon.style.display = "none";
      nav.forEach((item)=>{
        item.style.display = "none";
      })
      hamburger.style.display = "none";
  }


  function getVideo(type, id) {
    let youtube = document.querySelector('.youtube');
    
    fetch(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=d1777f7d2dcd8568a3d1a207d0b05303&language=ru`)
    .then((value) => {
      if (value.status !== 200) {
        return Promise.reject();
      }
      return value.json();
    })
    .then((output)=>{
      let videoFrame = `<h5 class="col-12">Трейлер</h5>`;
      videoFrame += `<iframe width="560" height="315" src="https://www.youtube.com/embed/${output.results[0].key}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      youtube.innerHTML = videoFrame;
    })
    .catch(function(err) {
      youtube.innerHTML = " ";
      console.log("error:" + err);
    });
  }

  function getGenres() {
    
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=d1777f7d2dcd8568a3d1a207d0b05303&language=ru')
    .then((value) => {
      if (value.status !== 200) {
        return Promise.reject();
      }
      return value.json();
    })
    .then((output) => {
      genres.forEach(genre => {
        output.genres.forEach((item) => {
          genre.innerHTML += `<li class="genres__item sidebar__genre"><input type="checkbox" class="sidebar__check" data-id="${item.id}"><span class="genres__faux sidebar__faux"></span><span class="genres__text sidebar__text">${item.name}</span></li>`;
        })
      })
    })
    .then(()=> {
      render();
    })
    .catch(function(err) {
      movie.innerHTML = " ";
      console.log("error:" + err);
    });
  }

  function render() {
    let checkbox = document.querySelectorAll('input.sidebar__check');
    let genresArray = [];
    checkbox.forEach(item => {
      item.addEventListener('click', ()=> {
        let genreId = item.getAttribute("data-id");
        sortByGenres(genreId, movies, genresArray);
      })
    })
  }

function sortByGenres(genre, movies, array) {
  movies.forEach((item, index) => {
    let tempArray = item.getAttribute('data-genre').split(',');
    for(let i=0; i<tempArray.length; i++){
      if(tempArray[i] !== genre) {
        item.style.display = 'none';
        array.splice(index, 1);
        break;
      } else {
        array.push(item);
        break;
      }
    }
  })
  array.forEach(item => {
    item.style.display = 'block';
  })
}
  