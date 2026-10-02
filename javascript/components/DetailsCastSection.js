export default function CastSection (Credits) {
    const sectionElement = document.createElement("section")
    sectionElement.classList.add("cast")

    sectionElement.innerHTML = `
    <header class="cast__header">
        <h3 class="cast__heading">Cast</h3>
        <a class="seemore__button" href="#">See more</a>
    </header>
    <ul class="cast__list">
        ${Credits.cast.map(function (cast) {
            let actor = ""
            if (cast.profile_path == null) { // tjek om skuespillerens path existere, hvis den ikke gør, brug et placeholder billede.
                actor = "../../icons/unknownactor.jpeg" // https://www.mycast.io/talent/an-unknown-actor
            } else {
                actor = "https://image.tmdb.org/t/p/original" + cast.profile_path
            }
            return `
            <li class="cast__list__item">
                <img class="cast__image" loading="lazy" src="${actor}" alt="${cast.original_name}">
                <h3 class="cast__name">${cast.original_name}</h3>
            </li>
            `
        }).join("")}
    </ul>
    `

    return sectionElement
}