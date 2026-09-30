import fetchData from "../Functionality/Fetch.js"
let genreIDs = await fetchData("3/genre/movie/list")
console.log(genreIDs)

export default function Popular (PopularData) {
    let sectionElement = document.createElement("section")
    sectionElement.classList.add("popular__section")

    sectionElement.innerHTML = `
    <header class="popular__header">
        <h4>Popular</h4>
        <a class="seemore__button" href="#">See more</a>
    </header>
    <ul class="popular__list">
        ${PopularData.results.map(function (movie) {
            return `
            <li class="popular__list__item">
                <a href="details.html?id=${movie.id}">
                <figure class="popular__item__figure">
                    <img loading="lazy" class="popular__item__poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
                </figure>
                <div class="popular__movie__div">
                    <h5 class="popular__title">${movie.title}</h5>
                    <div class="rating">
                        <img class="popular__rating" src="../../icons/Star.svg" alt="Rating Icon">
                        <p>${movie.vote_average.toFixed(1)}/10 IMDb</p>
                    </div>
                    <ul class="genre__list">
                        ${movie.genre_ids.map(function (genre) {
                            genreIDs.genres.forEach(genreID => {
                                if (genreID.id == genre) {
                                    genre = genreID.name
                                }
                            });
                            return `
                            <li class="genre">
                                <p>${genre}</p>
                            </li>
                            `
                        }).join("")}
                    </ul>
                </div>
                </a>
            </li>
            `
        }).join("")}
    </ul>
    `

    return sectionElement
}