export default function Navigation() {
    const navWrapper = document.createElement("nav")
    navWrapper.classList.add("nav__wrapper")

    navWrapper.innerHTML = `
    <ul class="navigation__list">
        <li>
            <a href="index.html">
                <img src="../../icons/Movies.svg" alt="Movies">
            </a>
        </li>
        <li>
            <a href="#">
                <img src="../../icons/Tickets.svg" alt="Tickets">
            </a>
        </li>
        <li>
            <a href="#">
                <img src="../../icons/Favourites.svg" alt="Favourites">
            </a>
        </li>

    </ul>
    `

    return navWrapper
}