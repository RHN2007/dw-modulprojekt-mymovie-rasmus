export default async function fetchData(parameter) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGU5NGVhZGRjZGRmN2QzZmNlZDM1OTgyMTRhZmEwYyIsIm5iZiI6MTc5MDU4NTIyOS40MjMsInN1YiI6IjZhYmEyOThkZDNiYTI0M2VkMTA0MDk3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f7_dPBaf-xDtwIk1q5Clu2tlzGrHQ9O_MMi7T1mFC5Q"
        }
    }

    const URL = `https://api.themoviedb.org/${parameter}`
    const response = await fetch(URL, options)
    const data = await response.json()

    return data
}