import Header from "./components/IndexHeader.js"
import NowShowing from "./components/IndexNSSection.js"
import fetchData from "./Functionality/Fetch.js"
import Popular from "./components/IndexPopularSection.js"
import Navigation from "./components/IndexNavigation.js"
import Darkmode from "./Functionality/Darkmode.js"

let offset = 1

let NowShowingData = await fetchData("3/movie/now_playing")
let PopularData = await fetchData("3/movie/popular")

const rootElement = document.querySelector("#root")

let observer = new IntersectionObserver(function(entries) {
    entries.forEach(async function (entry) {
        if(entry.isIntersecting) {
            observer.unobserve(entry.target)
            offset = offset + 1
            let data = await fetchData("3/movie/popular?page=" + offset)
            PopularData.results.push(...data.results) // Hvis vi bare gør PopularData.push ville det ikke virke da det er et object, så vi skal ind og fange arrayet "results" (det skulle vi uanset hvad...)
            render()
        }
    })
})

function render () {
    rootElement.innerHTML = ""
    rootElement.append(Header())

    const mainElement = document.createElement("main")
    mainElement.classList.add("main")

    mainElement.append(NowShowing(NowShowingData))
    mainElement.append(Popular(PopularData))

    rootElement.append(mainElement)

    rootElement.append(Navigation())

    let fifthLastElement = document.querySelector(".popular__list__item:nth-last-of-type(5)") // find det 5 sidste liste element i vores popular section
    observer.observe(fifthLastElement)

}

async function init () {
    render()

    Darkmode()
}

init()

