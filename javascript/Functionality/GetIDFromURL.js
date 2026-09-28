export default function getIDfromURL (url) {
    return url.slice(0, -1).split("/").pop()
}