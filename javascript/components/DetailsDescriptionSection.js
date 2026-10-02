export default function Description (movieData) {
    const sectionElement = document.createElement("section")
    sectionElement.classList.add("description")


    sectionElement.innerHTML = `
    <h2 class="description__heading">Description</h2>
    <p class="movie__description">${movieData.overview}</p>
    `
    return sectionElement
}