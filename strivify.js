window.onload = function() {
  // EMINEM ALBUMS
  function getEminemAlbums(data) {
    let eminemAlbums = [];

    let morningContainer = document.querySelector(".good_morning_container");
    

    // LOOP THROUGH TO GET ALBUMS DATA:
    for (let i = 0; i < 11; i++) {
      eminemAlbums.push(data[i].album);
    }

    // LOOP THROUGH AND INSERT HTML:
    for (let i = 0; i < eminemAlbums.length; i++) {
      let cardElement = document.createElement("div");
      cardElement.classList.add(
        "d-flex",
        "align-items-center",
        "good_morning_section"
      );

      let imgCover = document.createElement("img");
      imgCover.style.height = "70px";
      imgCover.src = eminemAlbums[i].cover;

      let titleElement = document.createElement("p");
      titleElement.classList.add("text_clamp_1", "my-0");
      titleElement.innerText = eminemAlbums[i].title;

      cardElement.appendChild(imgCover);
      cardElement.appendChild(titleElement);

      morningContainer.appendChild(cardElement);
    }
  }

  // METALLICA ALBUMS AND TRACKS
  function getMetallicaTracks(data) {
    let recentlyPlayedContainer = document.querySelector(
      ".recently-played-container"
    );

    for (let i = 0; i < 10; i++) {
      let cardElement = document.createElement("div");
      cardElement.classList.add("spotify-card", "d-flex", "flex-column");

      let cardInfoContainer = document.createElement("div");
      cardInfoContainer.classList.add("p-2");

      divContainerImg = document.createElement("div");

      let coverImg = document.createElement("img");
      coverImg.src = data[i].album.cover;

      divContainerImg.appendChild(coverImg);

      let infoContainer = document.createElement("div");
      infoContainer.classList.add("mt-2");

      let artistHeader = document.createElement("h6");
      artistHeader.classList.add("text_clamp_1");
      artistHeader.innerText = data[i].artist.name;

      let trackName = document.createElement("p");
      trackName.classList.add("text_clamp_2");
      trackName.innerText = data[i].title;

      infoContainer.appendChild(artistHeader);
      infoContainer.appendChild(trackName);

      cardInfoContainer.appendChild(divContainerImg);
      cardInfoContainer.appendChild(infoContainer);

      cardElement.appendChild(cardInfoContainer);

      recentlyPlayedContainer.appendChild(cardElement);
    }

  }

  function getBehemoth(data) {
    let showsToTryContainer = document.querySelector(
      ".shows-to-try-container"
    );

    for (let i = 0; i < 10; i++) {
      let cardElement = document.createElement("div");
      cardElement.classList.add("spotify-card", "d-flex", "flex-column");

      let cardInfoContainer = document.createElement("div");
      cardInfoContainer.classList.add("p-2");

      divContainerImg = document.createElement("div");

      let coverImg = document.createElement("img");
      coverImg.src = data[i].album.cover;

      divContainerImg.appendChild(coverImg);

      let infoContainer = document.createElement("div");
      infoContainer.classList.add("mt-2");

      let artistHeader = document.createElement("h6");
      artistHeader.classList.add("text_clamp_1");
      artistHeader.innerText = data[i].artist.name;

      let trackName = document.createElement("p");
      trackName.classList.add("text_clamp_2");
      trackName.innerText = data[i].title;

      infoContainer.appendChild(artistHeader);
      infoContainer.appendChild(trackName);

      cardInfoContainer.appendChild(divContainerImg);
      cardInfoContainer.appendChild(infoContainer);

      cardElement.appendChild(cardInfoContainer);

      showsToTryContainer.appendChild(cardElement);
    }

  }

  // EMINEM ALBUMS:
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem", {
    headers: {
      "content-type": "application/json",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "c5acc987b6mshdd256644b8b3ea1p11cd63jsnab6920bb8e62",
    },
  })
    .then((responseBody) => responseBody.json())
    .then((artist) => getEminemAlbums(artist.data))
    .catch("NO EMINEM FOR YOU!");


  // METALLICA TRACKS - TO RECENTLY PLAYED:
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica",
    {
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "c5acc987b6mshdd256644b8b3ea1p11cd63jsnab6920bb8e62",
      },
    }
  )
    .then((responseBody) => responseBody.json())
    .then((artist) => getMetallicaTracks(artist.data))
    .catch(error => alert("NO METALLICA FOR YOU!"));
  
  // BEHEMOTH - TO SUGGESTIONS:
  fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=behemoth",
    {
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "c5acc987b6mshdd256644b8b3ea1p11cd63jsnab6920bb8e62",
      },
    }
  )
    .then((responseBody) => responseBody.json())
    .then((artist) => getBehemoth(artist.data))
    .catch(error => alert("NO BEHEMOTH FOR YOU!"));
}

