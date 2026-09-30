import fetchData from "./Functionality/Fetch.js"
import SearchParams from "./Functionality/SearchParam.js"
import Darkmode from "./Functionality/Darkmode.js"
import Header from "./components/DetailsHeader.js"

const movieID = SearchParams("id")
let movieData = await fetchData("3/movie/" + movieID)


const rootElement = document.querySelector("#root")

function render () {
    rootElement.innerHTML = ""
    rootElement.append(Header(movieData))


    const mainElement = document.createElement("main")
    mainElement.classList.add("main")

}

async function init () {
    render()

    Darkmode()
}

init()

