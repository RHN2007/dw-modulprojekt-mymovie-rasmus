import Header from "./components/IndexHeader.js"
import NowShowing from "./components/IndexNSSection.js"
import fetchData from "./Functionality/Fetch.js"
import Popular from "./components/IndexPopularSection.js"

let NowShowingData = await fetchData("3/movie/now_playing")
let PopularData = await fetchData("3/movie/popular")

const rootElement = document.querySelector("#root")
// console.log(rootElement)

function render () {
    rootElement.innerHTML = ""
    rootElement.append(Header())

    const mainElement = document.createElement("main")
    mainElement.classList.add("main")

    mainElement.append(NowShowing(NowShowingData))
    mainElement.append(Popular(PopularData))

    rootElement.append(mainElement)
}

async function init () {
    render()
}

init()

