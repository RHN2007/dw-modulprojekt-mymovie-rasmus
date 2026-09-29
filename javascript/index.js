import Header from "./components/IndexHeader.js"
import NowShowing from "./components/IndexNSSection.js"
import fetchData from "./Functionality/Fetch.js"
import Popular from "./components/IndexPopularSection.js"
import Navigation from "./components/IndexNavigation.js"

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

    rootElement.append(Navigation())

}

async function init () {
    render()

    const darkModeSwitch = document.querySelector(".checkbox")
    darkModeSwitch.addEventListener("change", () => {
    if (darkModeSwitch.checked) {
        document.documentElement.style.colorScheme = "dark"
    } else {
        document.documentElement.style.colorScheme = "light"
    }
    })
}

init()

