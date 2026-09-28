export default function Header () {
    let headerElement = document.createElement("header")
    headerElement.classList.add("header")

    headerElement.innerHTML = `
    <h1 class="header__text">MyMovies</h1>
    <button class="header__button">
        <img src="../../icons/dark mode switch.svg" alt="darkmode switch">
    </button>
    `

    return headerElement
}