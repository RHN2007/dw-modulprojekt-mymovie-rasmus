function toHoursAndMinutes(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return { hours, minutes };
}

export default function InfoSection(movieData, movieRating) {
    let SectionElement = document.createElement("section")
    SectionElement.classList.add("info")

    let runtime = toHoursAndMinutes(movieData.runtime)

    SectionElement.innerHTML = `
    <div class="info__top__wrapper">
    <div class="info__top">
        <h1>${movieData.title}</h1>
        <button>
            <img src="../../icons/Favourites.svg" alt="Favourite ${movieData.title}">
        </button>
    </div>
    <div class="rating">
        <img src="../../icons/Star.svg" alt="Rating Icon">
        <p>${movieData.vote_average.toFixed(1)}/10 IMDb</p>
    </div>
    </div>
    <ul class="genre__list">
        ${movieData.genres.map(function (genre) {
            return `
            <li class="genre">
                <p>${genre.name}</p>
            </li>
            `
        }).join("")}
    </ul>
    <ul class="movie__info__list">
        <li class="movie__info__list__item">
            <p>Length</p>
            <p>${runtime.hours}h ${runtime.minutes}min </p>
        </li>
        <li class="movie__info__list__item">
            <p>Language</p>
            <p>${movieData.spoken_languages[0].english_name}</p>
        </li>
        <li class="movie__info__list__item">
            <p>Rating</p>
            <p>${movieRating}</p>
        </li>
    </ul>

    `

    return SectionElement
}