export default function Description (movieData) {
    const sectionElement = document.createElement("section")
    sectionElement.classList.add("description")


    sectionElement.innerHTML = `
    <h2>Description</h2>
    <p>${movieData.overview}</p>
    `
    return sectionElement
}