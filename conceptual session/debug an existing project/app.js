const elementById = id => {
    document.getElementById(id);
}
const handleSearch = () => {
    const keyword = elementById('keyword');
    const url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${keyword}`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}

handleSearch()