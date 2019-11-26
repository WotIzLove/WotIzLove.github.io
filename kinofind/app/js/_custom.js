  let searchForm = document.querySelector("#search-form");
  let movie = document.querySelector("#movies");
  let urlPoster = "https://image.tmdb.org/t/p/w500";
  let explorer = document.querySelector(".explorer");

  searchForm.addEventListener("submit", apiSearch);

  let icon = document.querySelector(".search__icon");
  let search = document.querySelector(".search__input");

  icon.addEventListener('click', () => {
    icon.classList.add("search__icon_active");
    search.classList.add("search__input_active");
  });

  search.addEventListener('blur', ()=> {
    icon.classList.remove("search__icon_active");
    search.classList.remove("search__input_active")
  })

  let popular = document.querySelector(".nav__item_popular");
  let upcoming = document.querySelector(".nav__item_upcoming");
  let topMovies = document.querySelector(".nav__item_movie-top");
  let topTv = document.querySelector(".nav__item_tv-top");

  console.log(upcoming);

  popular.addEventListener('click', getPopular);
  upcoming.addEventListener('click', getUpcoming);
  topMovies.addEventListener('click', getTopMovies);
  topTv.addEventListener('click', getTopTv);

  document.addEventListener("DOMContentLoaded", ()=> {
    getPopular();
    getGenres();
  });



  function apiSearch(e) {
    e.preventDefault();
    let searchText = document.querySelector("#searchText").value;
    if (searchText.trim().length === 0) {
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
          let dataInfo = "";
          if (item.media_type !== "person")
            dataInfo = `data-id="${item.id}" data-type="${item.media_type}"`;
          inner += `<div class="col-12 col-md-4 col-xl-2 item  data-genre="${item.genre_ids}">
				<img src="${poster}" class="item__poster img-responsive" alt="${nameItem}" ${dataInfo}>
        <h5 class="item__title">${nameItem}</h5>
        <h4 class="item__date">${date}</h4>
        </div>`;

        });

        movie.innerHTML = inner;

        addEventMedia();

      })
      .catch(function(err) {
        movie.innerHTML = "Упс, что-то пошло не так!";
        console.log("error:" + err);
      });
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
          <div class="col-6 about__keyart">
          <img class="img-responsive about__poster" src='${urlPoster + output.poster_path}' alt="${output.name ||
              output.title}">
          </div>
          <div class="col-6 about__info">
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
  }

  function getPopular() {
    fetch(
      "https://api.themoviedb.org/3/trending/all/week?api_key=d1777f7d2dcd8568a3d1a207d0b05303&language=ru"
    )
      .then(function(value) {
        if (value.status !== 200) {
          return Promise.reject();
        }
        return value.json();
      })
      .then(function(output) {
        let inner = `<h4 class="col-12 grid-title">Популярные за неделю</h4>`;
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
          inner += `<div class="col-12 col-md-4 col-xl-2 item"  data-genre="${item.genre_ids}">
				<img src="${poster}" class="item__poster img-responsive" alt="${nameItem}" ${dataInfo}>
        <h5 class="item__title">${nameItem}</h5>
        <h5 class="item__date">${newDate}</h5>
				</div>`;
        });

        movie.innerHTML = inner;

        addEventMedia();

        
      })
      .catch(function(err) {
        movie.innerHTML = "Упс, что-то пошло не так!";
        console.log("error:" + err);
      });
  };

  function getUpcoming() {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=d1777f7d2dcd8568a3d1a207d0b05303&language=ru&page=1"
    )
      .then(function(value) {
        if (value.status !== 200) {
          return Promise.reject();
        }
        return value.json();
      })
      .then(function(output) {
        console.log(output);
        let inner = `<h4 class="col-12 grid-title">Новинки</h4>`;
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
          inner += `<div class="col-12 col-md-4 col-xl-2 item"  data-genre="${item.genre_ids}">
				<img src="${poster}" class="item__poster img-responsive" alt="${nameItem}" ${dataInfo}>
        <h5 class="item__title">${nameItem}</h5>
        <h5 class="item__date">${newDate}</h5>
				</div>`;
        });

        movie.innerHTML = inner;

        addEventMedia();
        
      })
      .catch(function(err) {
        movie.innerHTML = "Упс, что-то пошло не так!";
        console.log("error:" + err);
      });
  };

  function getTopMovies() {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=d1777f7d2dcd8568a3d1a207d0b05303&language=ru&page=1"
    )
      .then(function(value) {
        if (value.status !== 200) {
          return Promise.reject();
        }
        return value.json();
      })
      .then(function(output) {
        console.log(output);
        let inner = `<h4 class="col-12 grid-title">Лучшие фильмы</h4>`;
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
          inner += `<div class="col-12 col-md-4 col-xl-2 item"  data-genre="${item.genre_ids}">
				<img src="${poster}" class="item__poster img-responsive" alt="${nameItem}" ${dataInfo}>
        <h5 class="item__title">${nameItem}</h5>
        <h5 class="item__date">${newDate}</h5>
				</div>`;
        });

        movie.innerHTML = inner;

        addEventMedia();

        
      })
      .catch(function(err) {
        movie.innerHTML = "Упс, что-то пошло не так!";
        console.log("error:" + err);
      });
  }

  function getTopTv() {
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=d1777f7d2dcd8568a3d1a207d0b05303&language=ru&page=1"
    )
      .then(function(value) {
        if (value.status !== 200) {
          return Promise.reject();
        }
        return value.json();
      })
      .then(function(output) {
        console.log(output);
        let inner = `<h4 class="col-12 grid-title">Лучшие сериалы</h4>`;
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
          inner += `<div class="col-12 col-md-4 col-xl-2 item"  data-genre="${item.genre_ids}">
				<img src="${poster}" class="item__poster img-responsive" alt="${nameItem}" ${dataInfo}>
        <h5 class="item__title">${nameItem}</h5>
        <h5 class="item__date">${newDate}</h5>
				</div>`;
        });

        movie.innerHTML = inner;

        addEventMedia();
        
      })
      .catch(function(err) {
        movie.innerHTML = "Упс, что-то пошло не так!";
        console.log("error:" + err);
      });
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
    let genres = document.querySelector('.sidebar__genres');

    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=d1777f7d2dcd8568a3d1a207d0b05303&language=ru')
    .then((value) => {
      if (value.status !== 200) {
        return Promise.reject();
      }
      return value.json();
    })
    .then((output) => {
      output.genres.forEach((item) => {
        genres.innerHTML += `<li class="sidebar__genre"><input type="checkbox" class="sidebar__check" data-id="${item.id}"><span class="sidebar__faux"></span><span class="sidebar__text">${item.name}</span></li>`;
        sortByGenres();
      })
      .catch(function(err) {
        youtube.innerHTML = " ";
        console.log("error:" + err);
      });
    });
  }

function sortByGenres() {

  let checkbox = document.querySelectorAll('input.sidebar__check');
  let movies = document.querySelectorAll('.item');

  checkbox.forEach((item) => {
    item.addEventListener('click', () => {
      let genreId =  item.getAttribute("data-id");
      movies.forEach((elem) => {
        let genreMovies = elem.getAttribute("data-genre").split(',');
        if(item.checked) {
          if(genreMovies.indexOf(genreId) != -1) {
            elem.style.display = "";
          }
          else {
            elem.style.display = "none"
          }
        }
        else {
          elem.style.display = "block";
        }
      })
    })
  })
}
  