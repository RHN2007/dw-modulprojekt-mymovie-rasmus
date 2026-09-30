export default function NowShowing (NowShowingData) {
    let sectionElement = document.createElement("section")
    sectionElement.classList.add("NS__section")

    sectionElement.innerHTML = `
    <header class="NS__header">
        <h2>Now Showing</h2>
        <a class="seemore__button" href="#">See more</a>
    </header>
    <ul class="NS__list">
        ${NowShowingData.results.map(function (movie) {
            return `
            <li class="NS__list__item">
                <a href="detail.html?id=${movie.id}">
                <figure class="NS__item__figure">
                    <img loading="lazy" class="NS__item__poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
                </figure>
                <h3>${movie.title}</h3>
                <div class="rating">
                    <img src="../../icons/Star.svg" alt="Rating Icon">
                    <p>${movie.vote_average.toFixed(1)}/10 IMDb</p>
                </div>
                </a>
            </li>
            `
        }).join("")}
    </ul>
    `

    return sectionElement
}