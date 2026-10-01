import fetchData from "./Functionality/Fetch.js"
import SearchParams from "./Functionality/SearchParam.js"
import Darkmode from "./Functionality/Darkmode.js"
import Header from "./components/DetailsHeader.js"
import InfoSection from "./components/DetailsInfoSection.js"

const movieID = SearchParams("id")
let movieData = await fetchData("3/movie/" + movieID)
let movieReleaseDates = await fetchData("3/movie/" + movieID + "/release_dates")


let result = movieReleaseDates.results.find(data => { // Gå igennem vores movieReleaseDates og se om dens iso_3166_1 er DK (da vi vil gerne vise danske age ratings)
    return data.iso_3166_1 === "DK"
})

let movieRating = ""

if (result == undefined) { // nogen film har ikke en agerating i danmark så vi får undefined tilbage og det resultere i at details siden ikke loader.
    movieRating = "NO RATING" // derfor tjekker vi og så siger "filmen har ingen rating" hvis der ikke er nogen.
} else {
    movieRating = result.release_dates[0].certification
}


const rootElement = document.querySelector("#root")

function render () {
    rootElement.innerHTML = ""
    rootElement.append(Header(movieData))


    const mainElement = document.createElement("main")
    mainElement.classList.add("main")

    mainElement.append(InfoSection(movieData, movieRating))

    rootElement.append(mainElement)

}

async function init () {
    render()

    Darkmode()
}

init()

