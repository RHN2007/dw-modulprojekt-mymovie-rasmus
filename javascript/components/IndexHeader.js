export default function Header () {
    let headerElement = document.createElement("header")
    headerElement.classList.add("header")

    headerElement.innerHTML = `
    <h1 class="header__text">MyMovies</h1>
        <label class="header__button">
        <input class="checkbox" type="checkbox">
        <span class="slider round"></span>
    </label>
    `

    return headerElement
}