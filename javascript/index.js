import Header from "./components/IndexHeader.js"
import NowShowing from "./components/IndexNSSection.js"
import fetchData from "./Functionality/Fetch.js"

let NowShowingData = await fetchData("3/movie/now_playing")

const rootElement = document.querySelector("#root")
// console.log(rootElement)

function render () {
    rootElement.innerHTML = ""
    rootElement.append(Header())

    const mainElement = document.createElement("main")
    mainElement.classList.add("main")

    mainElement.append(NowShowing(NowShowingData))

    rootElement.append(mainElement)
}

async function init () {
    render()
}

init()