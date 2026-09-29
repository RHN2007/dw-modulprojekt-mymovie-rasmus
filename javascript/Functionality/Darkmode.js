export default function Darkmode () {
    const darkModeSwitch = document.querySelector(".checkbox")
    let darkmode = localStorage.getItem("Darkmode") || "false"

    
    if (darkmode == "false") {
        darkModeSwitch.checked = false
    } else {
        darkModeSwitch.checked = true
        document.documentElement.style.colorScheme = "dark"
    }
    
    darkModeSwitch.addEventListener("change", () => {
    if (darkModeSwitch.checked) {
        document.documentElement.style.colorScheme = "dark"
        localStorage.setItem("Darkmode", true)
    } else {
        document.documentElement.style.colorScheme = "light"
        localStorage.setItem("Darkmode", false)
    }
    })
}