export default function Header (movieData) {
    let headerElement = document.createElement("header")
    headerElement.classList.add("header")
    headerElement.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`

    headerElement.innerHTML = `
    <div class="header__top">
        <a class="header__back" href="index.html">
            <img src="../../icons/Back.svg" alt="Go back to home page">
        </a>
        <label class="header__button">
            <input class="checkbox" type="checkbox">
            <span class="slider round"></span>
        </label>
    </div>
    `

    return headerElement
}