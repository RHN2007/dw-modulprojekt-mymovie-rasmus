export default function SearchParams(param) {
    const url = window.location.href
    const params = new URL(url).searchParams
    
    return params.get(param)
}